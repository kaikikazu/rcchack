var watson = require('watson-developer-cloud');
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

  /*
  //x時間待つ
  const d1 = new Date();
    while (true) {
      const d2 = new Date();
      if (d2 - d1 > 10000) {
        break;
    }
  }
  */

  //watsonの資格情報
  var visual_recognition = watson.visual_recognition({
    api_key: '8758c0fc3c232c775a7aa3d0873836f150614841',
    version: 'v3',
    version_date: '2016-05-20'
  });

  //どの分類器に渡すか
  let parameters = {
    classifier_ids: ["sleepjudge_121989147"],
    threshold: 0.6
  };

  //渡す画像
  var params = {
    images_file: fs.createReadStream('./image.jpg'),
    parameters: parameters
  };

  //写真表示（デバック用）
   const result2 =  execSync('start image.bmp');

  //結果出力
  visual_recognition.classify(params, function(err, response) {
    //sleepjudge分類器に引っかかたか
    if(response.images[0].classifiers[0]==null){
      console.log("NO sleep")
    }else{
      //寝てるか、起きてるか
      if(response.images[0].classifiers[0].classes[0].class == "sleep"){
        if(response.images[0].classifiers[0].classes[0].score >= 0.5){
          console.log("sleep!!!")
          const result3 =  execSync('test.exe');
        }
      }
    }
    //watsonの結果を全部出力
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2))
  });

/*
  //一定時間ごとに起動するように
  setTimeout(function(){
        main();
    }, 5000);
*/
}

