type question = { q: string; w: number; a: string }
type score = {auto: number; demo: number; hier: number; prop: number; hori: number; comm: number}
var questions: Array<question>
var max_score: score = {auto:0, demo:0, hier:0, prop:0, hori:0, comm:0}
var user_score: score = {auto:0, demo:0, hier:0, prop:0, hori:0, comm:0}
var questionId: question
var qN: number = 0
var answers: Array<number> = []

function parseQuestions(data){
    questions = data
    for(let i: number=0;i<questions.length;i++){
        max_score[questions[i].a] += Math.abs(questions[i].w)
    }
    loadQuestion()
}

function answer(val: number){
    user_score[questionId.a] += val * questionId.w
    qN++
    answers.push(val)
    if(qN<questions.length){
        loadQuestion()
    } else {
        results()
    }
}

function calc(val: string): number{
    return ( (max_score[val] + user_score[val]) / (2 * max_score[val]))
}

function results(){
    location.href = `results.html?auto=${calc("auto")}&demo=${calc("demo")}&hier=${calc("hier")}&prop=${calc("prop")}&hori=${calc("hori")}&comm=${calc("comm")}`
}

function loadQuestion(){
    questionId = questions[qN]
    document.getElementById("question").innerHTML = questionId.q
    document.getElementById("questionNumber").innerHTML = "Question " + (qN + 1) + " of " + questions.length

}

function prevQuestion(){
    if(qN == 0){
        window.history.back()
    } else {
        qN--
        loadQuestion()
        user_score[questionId.a] -= answers.slice(-1).pop() * questionId.w
        answers.pop()
    }
}

fetch("json/questions.json")
    .then(response => response.json())
    .then(data => parseQuestions(data))