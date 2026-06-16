from django.db import models
import uuid
from PIL import Image
from io import BytesIO
from django.core.files.base import ContentFile

# Create your models here.

def dashboard_upload_to(instance, filename):
    ext = filename.split('.')[-1].lower()
    return f'dashboards/{uuid.uuid4()}.{ext}'

class Dashboard(models.Model):
    descripcion = models.CharField(max_length=255)
    imagen = models.ImageField(upload_to=dashboard_upload_to, null=True, blank=True)
    
    def __str__(self):
        return f'Dashboard (id={self.pk})'

