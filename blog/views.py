from django.views import generic

from blog.models import BlogComponent, Blog


class BlogComponentListView(generic.ListView):
    model = BlogComponent
    context_object_name = "components"
    template_name = "blog/read_blog.html"

    def get_queryset(self):
        blog_id = self.kwargs.get('blog_id')
        return BlogComponent.objects.filter(blog__id=blog_id)

    def get_context_data(self, **kwargs):
        context: dict = super(BlogComponentListView, self).get_context_data(**kwargs)
        blog = Blog.objects.filter(id=self.kwargs.get('blog_id')).first()
        context["blog_title"] = blog.title if blog else "N/A"
        return context
