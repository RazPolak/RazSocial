from django.urls import path

from .views import PostsList, PostCreate

urlpatterns = [
    path('api/getPosts', PostsList.as_view()),
    path('api/addPost', PostCreate.as_view())

]
