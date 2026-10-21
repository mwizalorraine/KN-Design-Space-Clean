from rest_framework import serializers
from .models import Project, ContactMessage, ProjectImage, CategoryImage, NewsletterSubscriber, ProjectSpec, NewsItem, EventItem


class NewsletterSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsletterSubscriber 
        fields = ['email']


class ProjectImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectImage
        fields = ['id', 'image', 'caption', 'order', 'image_type', 'pair_key', 'section']  # added section


class ProjectSpecSerializer(serializers.ModelSerializer):  # new
    class Meta:
        model = ProjectSpec
        fields = ['label', 'value', 'order']


class ProjectSerializer(serializers.ModelSerializer):
    gallery = ProjectImageSerializer(many=True, read_only=True)
    specs = ProjectSpecSerializer(many=True, read_only=True)  # new

    class Meta:
        model = Project
        fields = [
            'id', 'title', 'slug', 'category', 'location', 'role', 'status',
            'year', 'summary', 'cover_image', 'featured', 'order',
            'gallery', 'specs',  # added specs
        ]


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
        return cloudinary_urls.get(image_name, obj.image.url)

class NewsItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewsItem
        fields = ['id', 'date', 'title', 'excerpt', 'image']

class EventItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = EventItem
        fields = ['id', 'date', 'tag', 'title', 'description', 'media']
