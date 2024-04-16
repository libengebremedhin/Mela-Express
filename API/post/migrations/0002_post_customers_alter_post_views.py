# Generated by Django 5.0.3 on 2024-04-10 21:20

from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('post', '0001_initial'),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='customers',
            field=models.ManyToManyField(related_name='post_customers', to=settings.AUTH_USER_MODEL),
        ),
        migrations.AlterField(
            model_name='post',
            name='views',
            field=models.ManyToManyField(related_name='post_views', to=settings.AUTH_USER_MODEL),
        ),
    ]
