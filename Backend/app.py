import cv2
from roboflow import Roboflow
rf = Roboflow(api_key="C52c4Yj2oYlQbQ4gJc8V")
project = rf.workspace().project("pothole-ruaom")
model = project.version(1).model

video_path = 'Test_video.mp4'
url = 'http://192.168.234.86:8080/video'
cap = cv2.VideoCapture(url)
while True:
    ret, frame = cap.read()
    if (ret):
        frame = cv2.resize(frame, (int(1920 / 1.38), int(1080 / 1.38)))
        image = frame
        results = model.predict(image, confidence=60, overlap=50).json()
        # example box object from the Pillow library
        detections = results['prediction']
        x1, x2, y1, y2, c = 0, 0, 0, 0, 0
        for bounding_box in detections:
            x1 = int(bounding_box['x'] - bounding_box['width'] / 2)
            x2 = int(bounding_box['x'] + bounding_box['width'] / 2)
            y1 = int(bounding_box['y'] - bounding_box['height'] / 2)
            y2 = int(bounding_box['y'] + bounding_box['height'] / 2)
            if (c >= 0):
                frame = cv2.line(frame, (frame.shape[1] // 2,
                                         frame.shape[0] // 2),
                                 (int(x1 + x2) // 2, int(y1 + y2) // 2), (0, 255, 0), 1)
                font = cv2.FONT_HERSHEY_SIMPLEX
                frame = cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 2)
                frame = cv2.putText(frame, f'Pothole  {c:.2f}', (int(x1), int(y1) - 5), font, .75, (0, 255, 255), 2)

        cv2.imshow('Phone Camera', frame)

        if cv2.waitKey(1) & 0xFF == ord('q'):
            break

cap.release()
cv2.destroyWindow()
