from rest_framework import serializers
from .models import Users


class CreateUsersSerializer(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('username', 'password')