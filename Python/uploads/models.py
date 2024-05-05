from django.db import models
import ffmpeg
from .utils import readImg , readVid
from PIL import Image 
import numpy as np
import cv2 as c
from io import BytesIO
from django.core.files.base import ContentFile

ACTION_CHOICES=(
    ('NO_FILTER','nofilter'),
)

class upload(models.Model):
    image=models.ImageField(upload_to='image', default='default.png')
    action=models.CharField(max_length=50)
    width=models.IntegerField(default=500)
    height=models.IntegerField(default=500)
    updated=models.DateTimeField(auto_now=True)
    created=models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return str(self.id)
    
    def save(self,*args, **kwargs):
        pil_img=Image.open(self.image)
        cv_img=np.array(pil_img)
        img=readImg(cv_img,self.action,self.width,self.height)
        img_pil= Image.fromarray(img)
        buffer = BytesIO()
        img_pil.save(buffer,format="png")
        image_png=buffer.getvalue()
        self.image.save(str(self.image), ContentFile(image_png),save=False)
        super().save(*args, **kwargs)


class uploadVid(models.Model):
    video= models.FileField(upload_to='video/')
    action=models.CharField(max_length=50)
    width=models.IntegerField(default=500)
    height=models.CharField(max_length=50)
    updated=models.DateTimeField(auto_now=True)
    created=models.DateTimeField(auto_now_add=True)
     
    def __str__(self):
        return str(self.id)
    
    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)

        cap= c.VideoCapture(self.video.path)

        v_Name=str(self.video)[6:-4]+'.avi'
        print(v_Name)
        output_path=self.video.path[:77]+'EditedVid\\'+ v_Name
        fps = int(cap.get(c.CAP_PROP_FPS))
        fps = int(self.width)
        if self.height=='500 X 500':
            width = 500
            height = 500
            pass
        elif self.height=='500 X 700':
            width = 500
            height = 700
            pass
        elif self.height=='1920 X 1080':
            width = 1920
            height = 1080
            pass
        else:
            width = int(cap.get(c.CAP_PROP_FRAME_WIDTH))
            height = int(cap.get(c.CAP_PROP_FRAME_HEIGHT))
        fourcc = c.VideoWriter_fourcc('P','I','M','1') 

        color=True
        li=['edgeDetection','convert2GRAY','Video Background Removal']
        if self.action in li:
            color=False 
        print(color)
        print('input',self.video.path)
        print('output',output_path)


        out = c.VideoWriter(output_path, fourcc, fps, (width, height),isColor=color)
        while (cap.isOpened()):
            r,frame= cap.read()
            if r== True:
                filtered=readVid(frame,self.action,width,height)
                out.write(filtered)
                c.imshow("Filtered Video", filtered)
                if c.waitKey(2) & 0xFF == ord("q"):
                    break
            else:
                break
        cap.release()
        out.release()
        c.destroyAllWindows()
        print('sucessfull')