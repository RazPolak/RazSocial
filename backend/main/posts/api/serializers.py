from rest_framework import serializers

from ..models import Post


class PostsListSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()

    @staticmethod
    def get_user(obj):
        return obj.user.username

    class Meta:
        model = Post
        fields = ('id', 'title', 'body', 'date', 'user')


class PostCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = ('title', 'body')
