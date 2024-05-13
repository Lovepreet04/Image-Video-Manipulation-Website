import cv2 as c
import numpy as np
from matplotlib import pyplot as plt

def readImg(img1,action,x,y):
    x=int(x)
    y=int(y)
    img=c.resize(img1,(x,y))
    w,h=img.shape[0],img.shape[1]
    threshold=[100,100]
    mtx=[10,10]
    filtered = img
    if action == 'edgeDetection':
        filtered = c.Canny(img,threshold[0],threshold[1])
    elif action == 'imgScalling':
        m = c.getRotationMatrix2D((w/2,h/2),40,0)
        filtered = c.warpAffine(img,m,(w,h))
    elif action == 'imgBlue Less':
        filtered = c.GaussianBlur(img,(7,7),0)
    elif action == 'imgBlue Medium':
        filtered = c.medianBlur(img,5)
    elif action == 'imgBlue Smooth':
        filtered = c.bilateralFilter(img,10,100,100)
    elif action == 'borderedImg':
        sides=[20,20,20,20]
        filtered =c.copyMakeBorder(img,sides[0],sides[1],sides[2],sides[3],c.BORDER_CONSTANT,None,2)
    elif action == 'erosionImg':
        m=np.ones((mtx[0],mtx[0]),np.int8)
        filtered = c.erode(img,m,1)
    elif action == 'dilatedImg':
        m=np.ones((mtx[0],mtx[0]),np.int8)
        filtered = c.dilate(img,m,1)
    elif action == 'convert2GRAY':
        filtered = c.cvtColor(img,c.COLOR_BGR2GRAY)
    elif action == 'convert2HSV':
        filtered = c.cvtColor(img,c.COLOR_BGR2HSV)
    return filtered

def readVid(img1,action,x,y):
    img=c.resize(img1,(x,y))
    w,h=img.shape[0],img.shape[1]
    threshold=[100,100]
    mtx=[10,10]
    filtered = img
    gry= c.cvtColor(img,c.COLOR_BGR2GRAY)
    if action == 'edgeDetection':
        filtered = c.Canny(img,threshold[0],threshold[1])
    # elif action=='object(vehicle) Detection':
    #     path='cars.xml'
    #     car=c.CascadeClassifier(path)
    #     cars= car.detectMultiScale(gry,1.2,3)
    #     for (x,y,w,h) in cars:
    #         c.rectangle(filtered,(x,y),(x+w,y+h),(0,0,255),3)
    elif action=='Human Face Detection':
        path=c.data.haarcascades + 'haarcascade_frontalface_default.xml'
        car=c.CascadeClassifier(path)
        cars= car.detectMultiScale(gry,1.2,3)
        for (x,y,w,h) in cars:
            c.rectangle(filtered,(x,y),(x+w,y+h),(0,0,255),3)
    elif action=='smile Detection':
        path=c.data.haarcascades + 'haarcascade_smile.xml'
        path2=c.data.haarcascades + 'haarcascade_frontalface_default.xml'
        sm=c.CascadeClassifier(path)
        fc=c.CascadeClassifier(path2)
        f= fc.detectMultiScale(gry,1.3,3)
        for x,y,w,h in f:
            roi_gry=gry[y:y+h,x:x+w]
            roi_img=img[y:y+h,x:x+w]
            s= sm.detectMultiScale(roi_img,1.4,8)
            for sx,sy,sw,sh in s:
                c.rectangle(roi_img,(sx,sy),(sx+sw,sy+sh),(0,255,0),2)
    elif action=='Eye Detection':
        path=c.data.haarcascades + 'haarcascade_eye.xml'
        path2=c.data.haarcascades + 'haarcascade_frontalface_default.xml'
        sm=c.CascadeClassifier(path)
        fc=c.CascadeClassifier(path2)
        f= fc.detectMultiScale(gry,1.3,3)
        for x,y,w,h in f:
            roi_gry=gry[y:y+h,x:x+w]
            roi_img=img[y:y+h,x:x+w]
            s= sm.detectMultiScale(roi_img,1.4,8)
            for sx,sy,sw,sh in s:
                c.rectangle(roi_img,(sx,sy),(sx+sw,sy+sh),(0,255,0),2)
    elif action=='Pedestrian Detection':
        path=c.data.haarcascades + 'haarcascade_fullbody.xml'
        sm=c.CascadeClassifier(path)
        f= sm.detectMultiScale(gry,1.1,4)
        for x,y,w,h in f:
            c.rectangle(filtered,(x,y),(x+w,y+h),(0,0,255),3)
    elif action == 'Smooth':
        filtered = c.bilateralFilter(img,10,100,100)
    elif action == 'erosionImg':
        m=np.ones((mtx[0],mtx[0]),np.int8)
        filtered = c.erode(img,m,1)
    elif action == 'dilatedImg':
        m=np.ones((mtx[0],mtx[0]),np.int8)
        filtered = c.dilate(img,m,1)
    elif action == 'convert2GRAY':
        filtered = gry
    elif action == 'convert2HSV':
        filtered = c.cvtColor(img,c.COLOR_BGR2HSV)
    return filtered
