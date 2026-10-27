from rest_framework import serializers
from urllib.parse import urlsplit, urlunsplit
from .models import Project, ContactMessage, ProjectImage, CategoryImage, NewsletterSubscriber, ProjectSpec, NewsItem, EventItem

def optimize_cloudinary_url(url, width=1200):
    """
    Optimize Cloudinary images without changing the stored original files.
    Non-Cloudinary URLs are returned unchanged.
    """
    if not url:
        return url

    parts = urlsplit(str(url))

    if parts.netloc != "res.cloudinary.com":
        return url

    path = parts.path
    marker = "/image/upload/"

    if marker not in path:
        return url

    prefix, remainder = path.split(marker, 1)

    # Avoid adding duplicate transformations.
    if remainder.startswith(("f_auto", "q_auto", "w_")):
        return url

    transformations = f"f_auto,q_auto,w_{width}"
    optimized_path = f"{prefix}{marker}{transformations}/{remainder}"

    return urlunsplit((
        parts.scheme,
        parts.netloc,
        optimized_path,
        parts.query,
        parts.fragment,
    ))


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber 
        fields = ['email']


class ProjectImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = ProjectImage
        fields = [
            'id', 'image', 'caption', 'order',
            'image_type', 'pair_key', 'section'
        ]

    def get_image(self, obj):
        if not obj.image:
            return None
        return optimize_cloudinary_url(obj.image.url, width=1200)


class ProjectSpecSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectSpec
        fields = ['label', 'value', 'order']


class ProjectSerializer(serializers.ModelSerializer):
    gallery = ProjectImageSerializer(many=True, read_only=True)
    specs = ProjectSpecSerializer(many=True, read_only=True)
    cover_image = serializers.SerializerMethodField()

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'category', 'location', 'role', 'status',
            'year', 'summary', 'cover_image', 'featured', 'order',
            'gallery', 'specs',
        ]

    def get_cover_image(self, obj):
        if not obj.cover_image:
            return None
        return optimize_cloudinary_url(obj.cover_image.url, width=1600)


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['name', 'email', 'phone', 'message']



class CategoryImageSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = CategoryImage
        fields = ['category', 'image']

    def get_image(self, obj):
        cloudinary_urls = {
            'categories/54522764971_f18f0dd182_o_1.jpg':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500152/media/categories/54522764971_f18f0dd182_o_1__81b1f095.jpg',
            'categories/CHUK3.jpg':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500157/media/categories/CHUK3__fe951f87.jpg',
            'categories/ENTRANCE.png':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500184/media/categories/ENTRANCE__534d9f91.png',
            'categories/EXTERIOR13D-nice.png':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500243/media/categories/EXTERIOR13D-nice__84c5e298.png',
            'categories/IYAKO.jpg':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500251/media/categories/IYAKO__c8860e49.jpg',
            'categories/NDERA_COMMUNITY_Z3nvKPj.jpg':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500262/media/categories/NDERA_COMMUNITY_Z3nvKPj__61cf6555.jpg',
            'categories/result_IMG_5333_EDITED_1_1.jpg':
                'https://res.cloudinary.com/cuucm48m/image/upload/v1792500279/media/categories/result_IMG_5333_EDITED_1_1__622f9333.jpg',
        }

        if not obj.image:
            return None

        image_name = obj.image.name.replace('\\', '/')
        url = cloudinary_urls.get(image_name, obj.image.url)
        return optimize_cloudinary_url(url, width=800)

class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = ['id', 'date', 'title', 'excerpt', 'image']

class EventItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventItem
        fields = ['id', 'date', 'tag', 'title', 'description', 'media']
