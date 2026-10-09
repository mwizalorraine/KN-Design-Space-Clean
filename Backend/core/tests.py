import json

from django.contrib.auth import get_user_model
from django.test import TestCase


class SignInApiTests(TestCase):
    def test_signin_authenticates_valid_user(self):
        user = get_user_model().objects.create_user(
            username='demo',
            email='demo@example.com',
            password='StrongPass!123',
        )

        response = self.client.post(
            '/api/auth/signin/',
            data=json.dumps({'username': 'demo', 'password': 'StrongPass!123'}),
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 200)
        self.assertTrue(response.json()['authenticated'])
        self.assertEqual(response.json()['user']['username'], user.username)

    def test_signin_rejects_invalid_credentials(self):
        get_user_model().objects.create_user(
            username='demo',
            email='demo@example.com',
            password='StrongPass!123',
        )

        response = self.client.post(
            '/api/auth/signin/',
            data=json.dumps({'username': 'demo', 'password': 'wrong-pass'}),
            content_type='application/json',
        )

        self.assertEqual(response.status_code, 401)
        self.assertFalse(response.json()['authenticated'])
