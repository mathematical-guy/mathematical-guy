from django.views import generic

from blog.models import BlogComponent


class BlogComponentListView(generic.ListView):
    model = BlogComponent
    context_object_name = "components"
    template_name = "blog/read_blog.html"

    def get_queryset(self):
        blog_id = self.kwargs.get('blog_id')
        return BlogComponent.objects.filter(blog__id=blog_id)
