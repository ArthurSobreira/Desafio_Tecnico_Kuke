# Generated by Django 5.1.4 on 2025-01-11 18:30

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('movies', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Film',
            new_name='Movie',
        ),
    ]
