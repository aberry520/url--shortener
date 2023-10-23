from .models import URL, User
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['username', 'password', 'token']

class UrlSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = URL
        fields = ['title','long_url', 'short_url', 'user_id' ]

