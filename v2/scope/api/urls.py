from django.urls import path
from .views import UsersView

urlpatterns = [
    path('users', UsersView.as_view()),
]