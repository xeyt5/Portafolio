from django.urls import path
from . import views

urlpatterns = [
    path('dashboard/', views.dashboard_list, name='dashboard_list'),
    path('dashboard/update/', views.dashboard_update, name='dashboard_update'),
]