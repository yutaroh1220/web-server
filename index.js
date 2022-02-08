//ctrl + C でサーバー停止
const express = require('express')
const path = require("path");
const app = express();

//reqのbodyを使うためのおまじない
app.use(express.urlencoded({extended: false}));

//publicの中にあるhtmlを読み込み
app.use(express.static(path.join(__dirname,"public")))

app.post('/api/v1/quiz', function (req, res) {
  //answerはHTMLのname answer
  const answer = req.body.answer;
  //textで送信なので"2"で受け取る
  if(answer === "2"){
    res.redirect("/correct.html");
  } else {
    res.redirect("/wrong.html");
  }
});

//　"/"にアクセスした時"
// app.get('/', function (req, res) {
//   console.log(req);
//   res.send('<h1>Top page</h1>');
// });

//イベントドリブン（イベントが来た時に走る）
app.get('/api/v1/users', function (req, res) {
  res.send({
    name:"mike",
    age:30
  });
});

// //localhost:3000　にアクセス
// app.listen(3000 ,function(){
//   console.log("web-server is running.");
// });

//herokuのPORTを取得||localの3000番
const PORT = process.env.PORT || 3000;
app.listen(PORT ,function(){
  console.log("web-server is running.");
});