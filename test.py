import json
from watson_developer_cloud import VisualRecognitionV3

visual_recognition = VisualRecognitionV3(
    '2016-05-20',
    api_key='{8758c0fc3c232c775a7aa3d0873836f150614841}')

with open('./test.jpg', 'rb') as images_file:
    classes = visual_recognition.classify(
        images_file,
        parameters=json.dumps({
            'classifier_ids': ['sleapjudge_126959574','default'],
            'threshold': 0.6
        }))
print(json.dumps(classes, indent=2))