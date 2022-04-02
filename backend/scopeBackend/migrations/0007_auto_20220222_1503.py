# -*- coding: utf-8 -*-
# Generated by Django 1.11.29 on 2022-02-22 20:03
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('scopeBackend', '0006_auto_20220222_1502'),
    ]

    operations = [
        migrations.AddField(
            model_name='query',
            name='user_id',
            field=models.PositiveIntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='query',
            name='name',
            field=models.CharField(max_length=120),
        ),
    ]