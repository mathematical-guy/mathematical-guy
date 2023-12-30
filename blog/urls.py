from django.urls import path

from blog.views import BlogComponentListView

urlpatterns = [
    path('<int:blog_id>/', BlogComponentListView.as_view(), name="blog-component-list"),
]
