from django.db import models

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    token = models.CharField(max_length=256)

    def __str__(self):
        return self.username

class URL(models.Model):
    title = models.CharField(max_length=50)
    long_url = models.CharField(max_length=300)
    short_url = models.CharField(max_length=100)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title