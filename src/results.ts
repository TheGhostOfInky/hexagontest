type triangle = { x: number; y: number; z: number }
var leftTr: triangle
var rightTr: triangle
const canvas =<HTMLCanvasElement> document.getElementById("results")
const ctx = canvas.getContext("2d")

function gqv(variable:string){
    let query: string = window.location.search.substring(1)
    let vars: Array<string> = query.split("&")
    for (let i: number = 0; i<vars.length ; i++) {
        let pair: Array<string> = vars[i].split("=")
        if(pair[0] == variable) {
            return parseFloat(pair[1])
        }
    }
    return(NaN);
}

function cTriang(input:triangle){
    let sum: number = input.x + input.y + input.z
    return {x: input.x / sum, y: input.y / sum, z: input.z / sum}
}


function drawCanvas(lT:triangle,rT:triangle){
    ctx.fillStyle = "#ddd"
    ctx.fillRect(0,0,700,700)

    ctx.beginPath()
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 1
    ctx.moveTo(195,83)
    ctx.lineTo(195,617)
    ctx.lineTo(655,350)
    ctx.lineTo(195,83)
    ctx.stroke()

    ctx.beginPath()
    ctx.strokeStyle = "#000"
    ctx.lineWidth = 1
    ctx.moveTo(503,83)
    ctx.lineTo(503,617)
    ctx.lineTo(43,350)
    ctx.lineTo(503,83)
    ctx.stroke()

    let x1: number = lT.z //equa
    let y1: number = lT.x - lT.y //auto - hier
    let x2: number = rT.z //prop
    let y2: number = rT.y - rT.x //comm - hori

    console.log(x1,y1,x2,y2)

    let X1: number = 508 - (x1 * 460)
    let Y1: number = 345 + (y1 * 267)
    let X2: number = 190 + (x2 * 460)
    let Y2: number = 345 + (y2 * 267)

    console.log(X1,Y1,X2,Y2)

    let X: number = (X1 + X2) / 2
    let Y: number = (Y1 + Y2) / 2

    ctx.fillStyle = "#0082a4"
    ctx.fillRect(X,Y,10,10)

}

leftTr = cTriang({x: gqv("auto"), y: gqv("hier"), z: gqv("equa")})
rightTr = cTriang({x: gqv("comm"), y: gqv("hori"), z: gqv("prop")})

console.log(leftTr,rightTr)

drawCanvas(leftTr,rightTr)