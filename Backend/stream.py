import cv2
from ultralytics import YOLO
import torch
def generate_frames():
    url = 'http://192.168.137.206:8080/video'
    cap = cv2.VideoCapture(url)
    # print(torch.cuda.is_available())
    model = YOLO('best.pt')
    m = 0
    is_saved = False
    cnt = 0
    while True:
        ret, frame = cap.read()
        if ret:
            frame = cv2.resize(frame, (int(1920 / 1.38), int(1080 / 1.38)))
            result = model.track(frame,persist=True)
            for res in result:
                boxes = res.boxes
                for i, r in enumerate(boxes.xyxy):
                    r = r.cpu().tolist()
                    c = boxes.conf[i].tolist()
                    x1, y1, x2, y2 = r[0], r[1], r[2], r[3]
                    if (c >= 0.65):
                        if is_saved and cnt <= 10:
                            cnt += 1
                        elif is_saved:
                            is_saved = False
                            cnt = 0
                        else:
                            xmid = int(x1 + x2) // 2
                            ymid = int(y1 + y2) // 2
                            disx = (xmid - frame.shape[1] // 2) ** 2
                            disy = (ymid - frame.shape[0] // 2) ** 2
                            dis = disx + disy
                            dis = dis ** 0.5

                            if dis < 40 and not is_saved:
                                cv2.imwrite("image.jpg", frame[int(y1) - 20:int(y2) + 20, int(x1) - 20:int(x2) + 20])
                                is_saved = True
                                
                        frame = cv2.line(frame, (frame.shape[1] // 2, frame.shape[0] // 2),
                                         (int(x1 + x2) // 2, int(y1 + y2) // 2), (255, 0, 255), 2)
                        font = cv2.FONT_HERSHEY_SIMPLEX
                        frame = cv2.rectangle(frame, (int(x1), int(y1)), (int(x2), int(y2)), (0, 0, 255), 2)
                        frame = cv2.putText(frame, f'Pothole  {c:.2f}', (int(x1), int(y1) - 5), font, .75,
                                            (0, 255, 255), 2)
            # cv2.imshow('Phone Camera', frame)
            # if cv2.waitKey(1) & 0xFF == ord('q'):
            #     break
            _, buffer = cv2.imencode('.jpg', frame)
            frame_bytes = buffer.tobytes()
            yield (b'--frame\r\n'
                   b'Content-Type: image/jpeg\r\n\r\n' + frame_bytes + b'\r\n')

