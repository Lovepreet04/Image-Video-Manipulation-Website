from rest_framework import serializers
from .models import upload , uploadVid


class UploadImageViewSerializer(serializers.ModelSerializer):
    class Meta:
     
        model=upload
        # field=['id','stName','email']
        fields='__all__'

class UploadVideoViewSerializer(serializers.ModelSerializer):
    class Meta:
     
        model=uploadVid
        # field=['id','stName','email']
        fields='__all__'
