from rest_framework import viewsets
from .models import URL
from .serializers import UrlSerializer

class UrlViewSet(viewsets.ModelViewSet):
    queryset = URL.objects.all().order_by('title')
    serializer_class = UrlSerializer
