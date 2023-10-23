from rest_framework import viewsets
from .models import URL, User
from .serializers import UrlSerializer, UserSerializer

# Create your views here.
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all().order_by('username')
    serializer_class = UserSerializer

class UrlViewSet(viewsets.ModelViewSet):
    queryset = URL.objects.all().order_by('title')
    serializer_class = UrlSerializer
