from django.contrib import admin
from .models import upload , uploadVid



@admin.register(upload)
class UploadAdmin(admin.ModelAdmin):
    list_display=['image','action','width','height']

@admin.register(uploadVid)
class UploadVidAdmin(admin.ModelAdmin):
    list_display=['video','action','width','height']