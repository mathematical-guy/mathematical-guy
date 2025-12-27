from django.contrib import admin
from blog.models import Blog, BlogComponent
from blog.forms import BlogComponentInlineFormset


class BlogComponentInline(admin.StackedInline):
    model = BlogComponent
    formset = BlogComponentInlineFormset
    extra = 1
    min_num = 1


@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    inlines = [BlogComponentInline]

