# Generated by Django 3.1.3 on 2021-03-24 19:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('domain', '0001_initial'),
        ('parsing_m', '0002_actor'),
    ]

    operations = [
        migrations.AlterField(
            model_name='activity',
            name='actor_code',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='activities', to='domain.actorcode'),
        ),
        migrations.AlterField(
            model_name='activity',
            name='actor_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name='activity',
            name='actor_rolecode',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, related_name='activities', to='domain.actorrole'),
        ),
    ]
