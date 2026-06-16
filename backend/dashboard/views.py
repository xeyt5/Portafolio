from django.shortcuts import render
from rest_framework.decorators import api_view, parser_classes
from rest_framework.response import Response
from rest_framework import status
from .models import Dashboard
from .serialize import DashboardSerializer
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
import os
import uuid
from PIL import Image
from django.conf import settings

# Create your views here.

@api_view(['GET'])
def dashboard_list(request):
    dashboard = Dashboard.objects.last()
    if not dashboard:
        dashboard = Dashboard.objects.create()
    serializer = DashboardSerializer(dashboard, context={'request': request})
    return Response({
        "status": True,
        "data": {
            "dashboard": serializer.data
        }
    }, status=status.HTTP_200_OK)

@api_view(['PATCH'])
@parser_classes([MultiPartParser, FormParser, JSONParser])
def dashboard_update(request):
    dashboard = Dashboard.objects.last()
    if not dashboard:
        dashboard = Dashboard.objects.create()

    data = request.data.copy()

    image_file = request.FILES.get('imagen')
    if image_file:
        try:
            if dashboard.imagen:
                old_image_path = os.path.join(settings.MEDIA_ROOT, str(dashboard.imagen))
                if os.path.exists(old_image_path):
                    os.remove(old_image_path)

            img = Image.open(image_file)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")

            max_width = 1280
            if img.width > max_width:
                ratio = max_width / img.width
                img = img.resize((max_width, int(img.height * ratio)), Image.LANCZOS)

            img_uuid = f"{uuid.uuid4()}.webp"
            img_path = os.path.join(settings.MEDIA_ROOT, 'dashboards', img_uuid)
            os.makedirs(os.path.dirname(img_path), exist_ok=True)
            img.save(img_path, format='WEBP', quality=85)

            data['imagen'] = f'dashboards/{img_uuid}'
        except Exception as e:
            print(f"Error processing image: {e}")
            return Response({"status": "error", "message": "Error processing image"}, status=status.HTTP_400_BAD_REQUEST)

    serializer = DashboardSerializer(dashboard, data=data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({
            "status": True,
            "data": {
                "dashboard": serializer.data
            }
        }, status=status.HTTP_200_OK)

    print("Serializer errors:", serializer.errors)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)