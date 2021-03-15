# Generated by Django 3.1.2 on 2021-03-15 08:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('domain', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Source',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('source_url', models.URLField(blank=True, unique=True)),
                ('source_html', models.TextField(blank=True, null=True)),
                ('source_text', models.TextField(blank=True, null=True)),
                ('source_date', models.DateTimeField(blank=True, null=True)),
                ('date_added', models.DateTimeField(blank=True, default=django.utils.timezone.now)),
                ('current_status', models.CharField(blank=True, choices=[('SRCM', 'sourced_m'), ('EXTM', 'extracted_m')], default='SRCM', max_length=10)),
                ('current_user', models.OneToOneField(blank=True, null=True, on_delete=django.db.models.deletion.PROTECT, to=settings.AUTH_USER_MODEL)),
                ('source_code', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, related_name='sources', to='domain.sourcecode')),
            ],
        ),
    ]
