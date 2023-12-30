from django.contrib import admin
from blog.models import Blog, BlogComponent


class BlogComponentInline(admin.StackedInline):
    model = BlogComponent


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    inlines = [
        BlogComponentInline
    ]


admin.site.register(BlogComponent)
