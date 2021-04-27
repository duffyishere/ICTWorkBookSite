console.log("main.js")
//asdf 는 데이터객체리스트
console.log(asdf)

var cnt = 1
var toSolveProblem = document.getElementById("toSolveProblem");
toSolveProblem.innerHTML = asdf[cnt][0]+"?"
var question1 = document.getElementById('question1');
question1.innerHTML = asdf[cnt][1][1][0]
var question2 = document.getElementById('question2');
question2.innerHTML = asdf[cnt][1][1][1]
var question3 = document.getElementById('question3');
question3.innerHTML = asdf[cnt][1][1][2]
var question4 = document.getElementById('question4');
question4.innerHTML = asdf[cnt][1][1][3]
var question5 = document.getElementById('question5');
question5.innerHTML = asdf[cnt][1][1][4]
var btnIndex = document.getElementById('problemIndex');
btnIndex.innerHTML = JSON.stringify(cnt)+". "

console.log(toSolveProblem)

function checkAnswer(){
    var answer = asdf[cnt][1][0]
    console.log("답 : "+answer)
    var userAnswer = "";
    var btn1 = document.getElementById("btn1")
    // console.log(btn1.value)
    var btn2 = document.getElementById("btn2")
    // console.log(btn2.value)
    var btn3 = document.getElementById("btn3")
    // console.log(btn3.value)
    var btn4 = document.getElementById("btn4")
    // console.log(btn4.value)
    var btn5 = document.getElementById("btn5")
    // console.log(btn5.value)
    if(btn1.checked == true){userAnswer = btn1.value}    
    if(btn2.checked == true){userAnswer = btn2.value}
    if(btn3.checked == true){userAnswer = btn3.value}
    if(btn4.checked == true){userAnswer = btn4.value}
    if(btn5.checked == true){userAnswer = btn5.value}
    if(answer == userAnswer){
        alert("맞았습니다")
        btn1.checked = false
        btn2.checked = false
        btn3.checked = false
        btn4.checked = false
        btn5.checked = false
        cnt+=1
        refresh()
    }else{
        alert("다시 풀어보세요")
        btn1.checked = false
        btn2.checked = false
        btn3.checked = false
        btn4.checked = false
        btn5.checked = false
    }
}

function refresh(){
    var answer = asdf[cnt][1][0]
    console.log("답"+answer)
    var toSolveProblem = document.getElementById("toSolveProblem");
    toSolveProblem.innerHTML = asdf[cnt][0]+"?"
    var question1 = document.getElementById('question1');
    question1.innerHTML = asdf[cnt][1][1][0]
    var question2 = document.getElementById('question2');
    question2.innerHTML = asdf[cnt][1][1][1]
    var question3 = document.getElementById('question3');
    question3.innerHTML = asdf[cnt][1][1][2]
    var question4 = document.getElementById('question4');
    question4.innerHTML = asdf[cnt][1][1][3]
    var question5 = document.getElementById('question5');
    question5.innerHTML = asdf[cnt][1][1][4]
    btnIndex.innerHTML = JSON.stringify(cnt)+". "
    
}