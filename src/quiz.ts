type question = { q: string; w: number; a: string }
type score = {auto: number; equa: number; hier: number; prop: number; hori: number; comm: number}
var questions: Array<question>
var max_score: score = {auto:0, equa:0, hier:0, prop:0, hori:0, comm:0}
var user_score: score = {auto:0, equa:0, hier:0, prop:0, hori:0, comm:0}
var questionId: question
var qN: number = 0

function pQ(data){
    questions = data
    for(let i: number=0;i<questions.length;i++){
        max_score[questions[i].a] += Math.abs(questions[i].w)
    }
    console.log(max_score)
    lQ()
}

function answer(val: number){
    user_score[questionId.a] += val * questionId.w
    console.log(user_score)
    qN++
    if(qN<questions.length){
        lQ()
    } else {
        results()
    }
}

function calc(val: string){
    return ( (max_score[val] + user_score[val]) / (2 * max_score[val]))
}

function results(){
    location.href = `results.html?auto=${calc("auto")}&equa=${calc("equa")}&hier=${calc("hier")}&prop=${calc("prop")}&hori=${calc("hori")}&comm=${calc("comm")}`
}

function lQ(){
    questionId = questions[qN]
    document.getElementById("question").innerHTML = questionId.q
}

fetch("json/questions.json")
    .then(response => response.json())
    .then(data => pQ(data))