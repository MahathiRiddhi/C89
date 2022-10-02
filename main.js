var canvas = document.getElementById("myCanvas")
var ctx = canvas.getContext("2d")
var lastX, lastY, currentX, currentY
var color = "color"
var width = "width_of_linr"
if (screen.width < 992) {
    canvas.width = screen.width-70
    canvas.height =screen.height-300
}

canvas.addEventListener("touchstart", touchstartfn)
canvas.addEventListener("touchmove", touchmovefn)


function touchstartfn(e) {
    lastX = e.touches[0].clientX - canvas.offsetLeft
    lastY = e.touches[0].clientY - canvas.offsetTop
}

function touchmovefn(e) {
    currentX = e.touches[0].clientX - canvas.offsetLeft
    currentY = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.moveTo(lastX, lastY)
    ctx.lineTo(currentX, currentY)
    ctx.stroke()
    lastX = currentX
    lastY = currentY
}


//Additional Activity
function clearArea()
{
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
