from django.db import models
from django.conf import settings

# Create your models here.

class URL(models.Model):
    title = models.CharField(max_length=50)
    long_url = models.CharField(max_length=300)
    short_url = models.CharField(max_length=100)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return self.title