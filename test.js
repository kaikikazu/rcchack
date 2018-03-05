var watson = require('watson-developer-cloud');
var fs = require('fs');
var Jimp = require("jimp");

/*
const execSync = require('child_process').execSync;
const result =  execSync('./CommandCam.exe');
console.log(result);
*/

Jimp.read("image.bmp", function (err, lenna) {
    if (err) throw err;
    lenna.resize(256, 256)            // resize 
         .quality(60)                 // set JPEG quality 
         .greyscale()                 // set greyscale 
         .write("image.jpg"); // save 
});

var visual_recognition = watson.visual_recognition({
  api_key: '8758c0fc3c232c775a7aa3d0873836f150614841',
  version: 'v3',
  version_date: '2016-05-20'
});

let parameters = {
  classifier_ids: ["sleapjudge_126959574","default"],
  threshold: 0.6
};

var params = {
  images_file: fs.createReadStream('./image.jpg'),
  parameters: parameters
};

visual_recognition.classify(params, function(err, response) {
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});

//curl -X POST -F "images_file=@test.jpg" -F "parameters=@fruit.json" "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8758c0fc3c232c775a7aa3d0873836f150614841&version=2016-05-20"