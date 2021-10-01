from django.shortcuts import render
from rest_framework import generics, status, mixins
from .serializers import CreateUsersSerializer
from .models import Users
from rest_framework.views import APIView
from rest_framework.response import Response


class UsersView(mixins.ListModelMixin,
                  mixins.CreateModelMixin,
                  generics.GenericAPIView):
    queryset = Users.objects.all()
    serializer_class = CreateUsersSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)