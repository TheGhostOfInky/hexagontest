const canvas = document.getElementById("results");
const ctx = canvas.getContext("2d");
var leftTr;
var rightTr;
var hexagon_img = new Image();
hexagon_img.src = "assets/hexagon.svg";
function gqv(variable) {
    let query = window.location.search.substring(1);
    let vars = query.split("&");
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split("=");
        if (pair[0] == variable) {
            return parseFloat(pair[1]);
        }
    }
    return (NaN);
}
function cTriang(input) {
    let sum = input.x + input.y + input.z;
    if (sum == 0) {
        return { x: 1 / 3, y: 1 / 3, z: 1 / 3 };
    }
    else {
        return { x: input.x / sum, y: input.y / sum, z: input.z / sum };
    }
}
function drawCanvas(lT, rT) {
    ctx.fillStyle = "#eee";
    ctx.fillRect(0, 0, 800, 940);
    let hexagon_img = new Image();
    hexagon_img.src = "assets/hexagon.svg";
    ctx.drawImage(hexagon_img, 0, 0);
    let x1 = lT.y; //demo
    let y1 = lT.x - lT.z; //auto - hier
    let x2 = rT.x; //prop
    let y2 = rT.y - rT.z; //hori - comm
    let X1 = 553.768 - (x1 * 465.524);
    let Y1 = 395.860 + (y1 * 268.772);
    let X2 = 243.424 + (x2 * 465.524);
    let Y2 = 395.860 + (y2 * 268.772);
    let X = (X1 + X2) / 2;
    let Y = (Y1 + Y2) / 2;
    ctx.beginPath();
    ctx.fillStyle = "#000";
    ctx.arc(X, Y, 10, 0, 2 * Math.PI);
    ctx.fill();
    ctx.beginPath();
    ctx.fillStyle = "#f00";
    ctx.arc(X, Y, 8, 0, 2 * Math.PI);
    ctx.fill();
    ctx.textAlign = "left";
    ctx.font = "35px 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif";
    ctx.fillStyle = "#93952f";
    ctx.fillText("Autonomy: " + ((lT.x * 100).toFixed(2)) + "%", 40, 820);
    ctx.fillStyle = "#ff2923";
    ctx.fillText("Democracy: " + ((lT.y * 100).toFixed(2)) + "%", 40, 860);
    ctx.fillStyle = "#4f2578";
    ctx.fillText("Hierarchy: " + ((lT.z * 100).toFixed(2)) + "%", 40, 900);
    ctx.textAlign = "right";
    ctx.fillStyle = "#22546a";
    ctx.fillText("Property: " + ((rT.x * 100).toFixed(2)) + "%", 760, 820);
    ctx.fillStyle = "#ff6400";
    ctx.fillText("Horizontality: " + ((rT.y * 100).toFixed(2)) + "%", 760, 860);
    ctx.fillStyle = "#c10061";
    ctx.fillText("Command: " + ((rT.z * 100).toFixed(2)) + "%", 760, 900);
}
leftTr = cTriang({ x: gqv("auto"), y: gqv("demo"), z: gqv("hier") });
rightTr = cTriang({ x: gqv("prop"), y: gqv("hori"), z: gqv("comm") });
window.onload = function () {
    drawCanvas(leftTr, rightTr);
};
//# sourceMappingURL=results.js.map