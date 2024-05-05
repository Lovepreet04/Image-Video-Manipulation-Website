from uploads import views
from django.urls import path, include

urlpatterns = [
    path('img/',views.UploadImageView.as_view()),
    path('vid/',views.UploadVideoView.as_view()),
]