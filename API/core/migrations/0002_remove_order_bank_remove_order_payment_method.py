# Generated by Django 5.0.3 on 2024-04-11 01:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='bank',
        ),
        migrations.RemoveField(
            model_name='order',
            name='payment_method',
        ),
    ]
