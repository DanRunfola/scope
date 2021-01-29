# Generated by Django 3.1.2 on 2021-01-29 09:22

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('extraction', '0002_extract_source'),
        ('parsing', '0002_auto_20201128_1324'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='activity',
            name='source_id',
        ),
        migrations.AddField(
            model_name='activity',
            name='dollar_amount',
            field=models.CharField(blank=True, max_length=30, null=True),
        ),
        migrations.AddField(
            model_name='activity',
            name='extract',
            field=models.ForeignKey(default=7, on_delete=django.db.models.deletion.PROTECT, related_name='activities', to='extraction.extract'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='activity',
            name='locations',
            field=models.CharField(blank=True, max_length=50, null=True),
        ),
        migrations.AlterField(
            model_name='activity',
            name='status_code',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='activities', to='parsing.statuscode'),
        ),
    ]