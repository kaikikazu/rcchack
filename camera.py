import cv2

cap = cv2.VideoCapture(0)

# Capture frame-by-frame
ret, frame = cap.read()

if cap.isOpened():
        print ("error")
else:
        print ("OK")

# Display the resulting frame
# cv2.imshow('frame', frame)
path = "photo.jpg"
cv2.imwrite(path,frame)

# When everything done, release the capture
cap.release()
cv2.destroyAllWindows()
