from django.contrib import admin
from django.urls import path
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('admin/', admin.site.urls),
]

media_urls = static(prefix=settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
static_urls = static(prefix=settings.STATIC_URL, document_root=settings.STATIC_ROOT)

urlpatterns = urlpatterns + static_urls + media_urls
