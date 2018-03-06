var watson = require('watson-developer-cloud');
var fs = require('fs');
var Jimp = require("jimp");

main();

function main(){
  //子プロセスとしてカメラ起動
  const execSync = require('child_process').execSync;
  const result =  execSync('CommandCam.exe');

  //カメラで撮った写真をjpgに変換(watsonがbmpに対応していないため)
  Jimp.read("image.bmp", function (err, lenna) {
      if (err) throw err;
        lenna.write("image.jpg"); // save 
  });

  //watsonの資格情報
  var visual_recognition = watson.visual_recognition({
    api_key: '8758c0fc3c232c775a7aa3d0873836f150614841',
    version: 'v3',
    version_date: '2016-05-20'
  });

  //どの分類樹に渡すか
  let parameters = {
    classifier_ids: ["sleapjudge_126959574"],
    threshold: 0.6
  };

  //渡す画像
  var params = {
    images_file: fs.createReadStream('./image.jpg'),
    parameters: parameters
  };

  //結果出力
  visual_recognition.classify(params, function(err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2))
  });

  //一定時間ごとに起動するように
  setTimeout(function(){ 
        main();
    }, 1000 0);

}

//curl -X POST -F "images_file=@test.jpg" -F "parameters=@fruit.json" "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=8758c0fc3c232c775a7aa3d0873836f150614841&version=2016-05-20"