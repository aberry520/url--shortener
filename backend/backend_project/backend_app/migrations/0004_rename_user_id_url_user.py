# Generated by Django 4.2.6 on 2023-10-24 13:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backend_app', '0003_delete_user'),
    ]

    operations = [
        migrations.RenameField(
            model_name='url',
            old_name='user_id',
            new_name='user',
        ),
    ]
