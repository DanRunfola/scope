from django.db import models

class Users(models.Model):
    username=models.CharField(max_length=20,unique=False)
    password=models.CharField(max_length=20,unique=True)