# Generated by Django 3.1.2 on 2022-04-02 17:18

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('scopeBackend', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='KeyWord',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(max_length=120)),
                ('query', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='keywords', to='scopeBackend.query')),
            ],
        ),
    ]