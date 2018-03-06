
while(1){
    KeyDownFunc()
}

function KeyDownFunc(e){

    // ------------------------------------------------------------
    // 入力情報を取得
    // ------------------------------------------------------------
    // キーコード
    var key_code = e.keyCode;
    // Shiftキーの押下状態
    var shift_key = e.shiftKey;
    // Ctrlキーの押下状態
    var ctrl_key = e.ctrlKey;
    // Altキーの押下状態
    var alt_key = e.altKey;

    // ------------------------------------------------------------
    // 出力テスト
    // ------------------------------------------------------------
    console.log("code:" + key_code);
    console.log("shift:" + shift_key);
    console.log("ctrl" + ctrl_key);
    console.log("alt:" + alt_key);
}