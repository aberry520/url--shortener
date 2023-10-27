from .models import URL
from rest_framework import serializers


class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['title','long_url', 'short_url', 'user' ]

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['username'] = user.username
        # ...

        return token