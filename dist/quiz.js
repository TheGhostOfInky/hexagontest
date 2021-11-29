var questions;
var max_score = { auto: 0, demo: 0, hier: 0, prop: 0, hori: 0, comm: 0 };
var user_score = { auto: 0, demo: 0, hier: 0, prop: 0, hori: 0, comm: 0 };
var questionId;
var qN = 0;
function pQ(data) {
    questions = data;
    for (var i = 0; i < questions.length; i++) {
        max_score[questions[i].a] += Math.abs(questions[i].w);
    }
    lQ();
}
function answer(val) {
    user_score[questionId.a] += val * questionId.w;
    qN++;
    if (qN < questions.length) {
        lQ();
    }
    else {
        results();
    }
}
function calc(val) {
    return ((max_score[val] + user_score[val]) / (2 * max_score[val]));
}
function results() {
    location.href = "results.html?auto=" + calc("auto") + "&demo=" + calc("demo") + "&hier=" + calc("hier") + "&prop=" + calc("prop") + "&hori=" + calc("hori") + "&comm=" + calc("comm");
}
function lQ() {
    questionId = questions[qN];
    document.getElementById("question").innerHTML = questionId.q;
    document.getElementById("questionNumber").innerHTML = "Question " + (qN + 1) + " of " + questions.length;
}
fetch("json/questions.json")
    .then(function (response) { return response.json(); })
    .then(function (data) { return pQ(data); });
//# sourceMappingURL=quiz.js.map