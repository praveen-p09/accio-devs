from threading import Thread
from stream import generate_frames
import os
from flask import Flask, Response
from Processor_backend import processer
import firebase_admin
from firebase_admin import credentials, storage, firestore

streamer = Flask(__name__)
db = firestore.client()
# Reference to the Firebase Storage bucket
bucket = storage.bucket()


@streamer.route('/')
def index():
    return Response(generate_frames(), mimetype='multipart/x-mixed-replace; boundary=--frame')

def upload_images():
    m=0
    while True:
        images = os.listdir('images')
        for path in images:
            image_path = os.path.join("images",path)
            # Local path to the image you want to upload
            local_image_path = image_path
            # Path in Firebase Storage where you want to store the image
            # upload location with image name as id
            firebase_storage_path = f"images/hole{m}.jpg"
            data = {"longi": "81.606215", "lati": "21.249599"}
            db.collection("streamlocation").document(f"hole{m}.jpg").set(data)
            # Upload the image to Firebase Storage
            blob = bucket.blob(firebase_storage_path)
            blob.upload_from_filename(local_image_path)
            print(f"Image uploaded to Firebase Storage: {firebase_storage_path}")
            os.remove(image_path)
            m+=1
if __name__ == '__main__':
    runner = Thread(target=generate_frames)
    upload = Thread(target=upload_images)

    runner.start()
    upload.start()
    upload.join()
    runner.join()
    streamer.run(host='0.0.0.0',port=4000)
    process = processer()
    process.run()