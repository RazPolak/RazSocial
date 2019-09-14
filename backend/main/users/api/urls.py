
from django.urls import path
from .views import UserList, UserCreate

urlpatterns = [
    path('api/userList', UserList.as_view()),
    path('api/userCreate', UserCreate.as_view()),
]
