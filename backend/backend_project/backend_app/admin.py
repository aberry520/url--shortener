from django.contrib import admin
from .models import URL, User
admin.site.register(User)
admin.site.register(URL)