var fs = require('fs');
var Jimp = require("jimp");

count = 0;

main();

function main(){
  filename = "./test/image" + count + ".jpg";
  //子プロセスとしてカメラ起動
  const execSync = require('child_process').execSync;
  const result =  execSync('CommandCam.exe');

  //カメラで撮った写真をjpgに変換(watsonがbmpに対応していないため)
  Jimp.read("image.bmp", function (err, lenna) {
      if (err) throw err;
        lenna.resize(256, 256)
        .write("image.jpg"); // save
  });

  Jimp.read("image.bmp", function (err, lenna) {
      if (err) throw err;
        lenna.resize(256, 256)
        .write(filename); // save
  });
  count++;

  const result2 =  execSync('start image.jpg');
  
  //一定時間ごとに起動するように
  setTimeout(function(){ 
        main();
    }, 3000);
  
}

//curl -X POST -F "images_file=@test.jpg" -F "parameters=@fruit.json" "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8758c0fc3c232c775a7aa3d0873836f150614841&version=2016-05-20"