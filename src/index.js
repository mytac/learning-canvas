import { Common } from './utils'

function draw() {
    const canvas = document.getElementById('tutorial')
    if (canvas.getContext) {
        const ctx = canvas.getContext('2d')

        Common.createArc(ctx, {
            x: 100,
            y: 100,
            radius: 40,
            startAngle: 0,
            needFill: true,
        })

        Common.createCurve(ctx, {
            cp: [100, 200],
            end: [300, 300],
            needClose: true,
            needFill: true,
        })
    }
}

draw()
