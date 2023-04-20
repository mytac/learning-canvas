import { Common } from './utils'

function draw() {
    const canvas = document.getElementById('tutorial')

    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')
        ctx.miterLimit = 10
        ctx.strokeStyle = '#000'
        ctx.lineWidth = 10
        const height = canvas.height
        const width = canvas.width

        console.log('width', width)

        Common.drawDash(ctx, { animate: true }, () => {
            ctx.clearRect(0, 0, width, height)

            ctx.beginPath()
            ctx.moveTo(0, 50)

            ctx.lineTo(25, 25)
            ctx.lineTo(50, 50)
            ctx.lineTo(75, 25)
            ctx.stroke()
        })
    }
}

draw()
