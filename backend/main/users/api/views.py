from django.contrib.auth import get_user_model
from rest_framework.generics import ListAPIView, CreateAPIView

from .serializers import UserSerializer, UserCreateSerializer

User = get_user_model()


class UserList(ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class UserCreate(CreateAPIView):
    serializer_class = UserCreateSerializer
