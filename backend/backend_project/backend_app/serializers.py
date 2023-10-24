from .models import URL
from rest_framework import serializers


class UrlSerializer(serializers.ModelSerializer):
    class Meta:
        model = URL
        fields = ['title','long_url', 'short_url', 'user' ]

