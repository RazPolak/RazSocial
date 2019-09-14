from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated
from django.http.response import HttpResponseBadRequest

from .serializers import PostsListSerializer, PostCreateSerializer
from ..models import Post


class PostsList(ListAPIView):
    serializer_class = PostsListSerializer

    def get_queryset(self):
        params = self.request.query_params
        # Pull only latest post
        is_latest = params.get('latest')
        if is_latest is not None:
            last_id = Post.objects.last().id
            return Post.objects.filter(id=last_id)

        # Pull only specific user posts
        current_user = params.get('user')
        if current_user is not None:
            posts = Post.objects.filter(user__username=current_user)
            if posts:
                return posts
            return HttpResponseBadRequest

        return Post.objects.all()


class PostCreate(CreateAPIView):
    serializer_class = PostCreateSerializer
    permission_classes = (IsAuthenticated,)

    def perform_create(self, serializer):
        user = self.request.user
        data = self.request.data
        print(data)

        if user:
            serializer.save(user=user)
            return True

        return HttpResponseBadRequest
