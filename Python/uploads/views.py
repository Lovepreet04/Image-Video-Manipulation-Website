from django.shortcuts import render,redirect
from .models import upload , uploadVid
from .serializer import UploadImageViewSerializer , UploadVideoViewSerializer
from rest_framework.generics import ListAPIView
from rest_framework.views import APIView
# from rest_framework.response import Response
from rest_framework import status
# from rest_framework import viewsets
from django.http import HttpResponse
import cv2 as c
import os
from django.core.files.uploadedfile import TemporaryUploadedFile
from django.core.files.base import ContentFile
# Create your views here.

class UploadImageView(ListAPIView):
    queryset= upload.objects.all()
    serializer_class=UploadImageViewSerializer

    def post(self,request,*args, **kwargs):
        image=request.data['image']
        action=request.data['action']
        width=request.data['width']
        height=request.data['height']
        upload.objects.create(action=action,image=image,width=width,height=height)
        return HttpResponse({'message':'created'}, status=status.HTTP_200_OK)
    
# views.py
# from django.shortcuts import render, redirect
# from .models import Cashier  # Adjust the model import

def delete_item(request, pk):
    upload.objects.filter(id=pk).delete()  # Delete the object with the given ID
    # return redirect('main:byauthor')  # Redirect to the list view
    


class UploadVideoView(ListAPIView):
    queryset= uploadVid.objects.all()
    serializer_class=UploadVideoViewSerializer

    def post(self,request,*args, **kwargs):
        video=request.data['video']
        action=request.data['action']
        width=request.data['width']
        height=request.data['height']
        uploadVid.objects.create(action=action,video=video,width=width,height=height)
        return HttpResponse({'message':'created'}, status=status.HTTP_200_OK)
    


    def process_and_save_video(self,request):
        if request.method == 'POST':
            video_obj = request.FILES.get('video')
            print(video_obj)
            if video_obj:
                vid_path = video_obj.temporary_file_path()
                cap = c.VideoCapture(vid_path)
                while cap.isOpened():
                    ret, img = cap.read() 
                    # converting to gray-scale 
                    gray = c.cvtColor(img, c.COLOR_BGR2GRAY)
                edited_video = uploadVid(action=request.POST.get('action'))
                edited_video.video.save(video_obj.name, ContentFile(gray))
                os.remove(vid_path)
                return "Video uploaded and processed successfully!"

def delete_item(request, pk):
    uploadVid.objects.filter(id=pk).delete() 