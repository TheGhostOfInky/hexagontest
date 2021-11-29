var leftTr;
var rightTr;
var canvas = document.getElementById("results");
var ctx = canvas.getContext("2d");
function gqv(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return parseFloat(pair[1]);
        }
    }
    return (NaN);
}
function cTriang(input) {
    var sum = input.x + input.y + input.z;
    return { x: input.x / sum, y: input.y / sum, z: input.z / sum };
}
function drawCanvas(lT, rT) {
    ctx.fillStyle = "#ddd";
    ctx.fillRect(0, 0, 700, 700);
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.moveTo(195, 83);
    ctx.lineTo(195, 617);
    ctx.lineTo(655, 350);
    ctx.lineTo(195, 83);
    ctx.stroke();
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;
    ctx.moveTo(503, 83);
    ctx.lineTo(503, 617);
    ctx.lineTo(43, 350);
    ctx.lineTo(503, 83);
    ctx.stroke();
    var x1 = lT.z; //equa
    var y1 = lT.x - lT.y; //auto - hier
    var x2 = rT.z; //prop
    var y2 = rT.y - rT.x; //comm - hori
    console.log(x1, y1, x2, y2);
    var X1 = 508 - (x1 * 460);
    var Y1 = 345 + (y1 * 267);
    var X2 = 190 + (x2 * 460);
    var Y2 = 345 + (y2 * 267);
    console.log(X1, Y1, X2, Y2);
    var X = (X1 + X2) / 2;
    var Y = (Y1 + Y2) / 2;
    ctx.fillStyle = "#0082a4";
    ctx.fillRect(X, Y, 10, 10);
}
leftTr = cTriang({ x: gqv("auto"), y: gqv("hier"), z: gqv("equa") });
rightTr = cTriang({ x: gqv("comm"), y: gqv("hori"), z: gqv("prop") });
console.log(leftTr, rightTr);
drawCanvas(leftTr, rightTr);
//# sourceMappingURL=results.js.map