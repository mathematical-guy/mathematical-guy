from django.urls import path

from blog.views import BlogComponentListView, BlogListView

urlpatterns = [
    path('', BlogListView.as_view(), name='blog-list'),
    path('<int:blog_id>/', BlogComponentListView.as_view(), name="blog-component-list"),
]
