from django.db import models


class BlogComponentTypes(models.TextChoices):
    IMAGE = "IMAGE", "IMAGE"
    TEXT = "TEXT", "TEXT"


class Blog(models.Model):
    title = models.CharField(max_length=32, unique=True, blank=False, null=False)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.title}"


class BlogComponent(models.Model):
    blog: Blog = models.ForeignKey(Blog, on_delete=models.CASCADE, related_name="blog_component")
    type = models.CharField(max_length=12, choices=BlogComponentTypes.choices)
    image = models.ImageField(null=True, blank=True)
    text = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.blog.title} - {self.type} - {self.id}"
