# Generated by Django 4.2.6 on 2023-10-24 13:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend_app', '0002_alter_url_user_id'),
    ]

    operations = [
        migrations.DeleteModel(
            name='User',
        ),
    ]
