let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d'); 
// ラジオボタンのidを変数に代入
let reset = document.getElementById('create');
let move = document.getElementById('choice');
// 円の情報を配列にpush
let circles = [];


$('canvas').on('mousemove', e => {

    });

// キャンバス内をクリックした時の座標の取得
$('canvas').on('click',e => {
    const cursorX = e.offsetX,
          cursorY = e.offsetY;
    // 作成ボタンチェック時クリックしたら円を描画
    if(reset.checked){
        drawRect(cursorX, cursorY);
    } 
    // 選択ボタンチェック時
    if(move.checked){
        insideCircle(cursorX, cursorY);
          if (hit === true) {
                
            } else {
                
            }
          
    } 
    dragCheck(cursorX, cursorY);
    dragCircle(cursorX, cursorY);
});
// キャンパス内での円の作成
function drawRect(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, 2 * Math.PI);
    ctx.strokeStyle = "red";
    ctx.fillStyle = "pink";
    ctx.lineWidth = 2; 
    ctx.fill();
    ctx.closePath();
    ctx.stroke();
    circles.push([x , y, 30]);
};
// キャンパス内の初期化
function cls(){
    ctx.clearRect(0, 0, 600, 400);
};
// 円の中かどうかの判定
function insideCircle(x, y) { 
    // 新しく作成した円から判定
    for (let i = circles.length -1; i >= 0 ; i--){
        // 円の内部にあるかを判定
         hit = Math.pow(circles[i][0] - x, 2) + Math.pow(circles[i][1] - y, 2) <= Math.pow(circles[i][2], 2);
        //  円の内部にある場合ループから抜ける
         if(hit == true) break;
    }
    // 判定結果
    return hit;
};

