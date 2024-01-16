from threading import Thread
from stream import streaming
import os
from upload_images import upload_images
from flask import Flask, request, Response
from Processor_backend import processer
import firebase_admin
from firebase_admin import credentials, storage, firestore

# streamer = Flask(__name__) creates a Flask application instance called streamer. Flask is a web
# framework for Python that allows you to build web applications. __name__ is a special variable in
# Python that represents the name of the current module. By passing __name__ as an argument to
# Flask, it tells Flask to use the current module as the starting point for the application.
db = firestore.client()
bucket = storage.bucket()
streamer = Flask(__name__)
initial = os.getcwd()
if not os.path.exists(f"{initial}/location"):
    os.mkdir(f"{initial}/location")

@streamer.route('/uploadvideo',methods = ['POST'])
def start_stream():
    ip = request.form['ip']
    long = request.form['longi']
    lati = request.form['lati']
    stream = streaming(ip)
    stream.stream = Response(stream.generate_frames(long,lati), mimetype='multipart/x-mixed-replace; boundary=frame')
    stream.thread = Thread(target=stream.start)
    stream.thread.start()

def run_app():
    streamer.run(host='0.0.0.0',port=4000)
    
if __name__ == '__main__':
    # The code snippet is creating two threads, runner and upload, and starting them using the
    # start() method.
    upload = Thread(target=upload_images,args=(db,bucket))
    process = processer()
    processing = Thread(target=process.run)
    Thread_stream = Thread(target=run_app)
    Thread_stream.start()
    upload.start()
    processing.start()
    Thread_stream.join()
    upload.join()
    processing.join()