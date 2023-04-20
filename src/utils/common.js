const base = (ctx, options = {}, render = () => {}) => {
    const { needClose = false, needFill = false } = options
    ctx.beginPath()
    render(ctx, options)
    if (needFill) {
        ctx.fill()
    }
    if (needClose) {
        ctx.closePath()
    }
    ctx.stroke()
}

/**
 * 绘制折线
 * @param {*} ctx
 * @param {*} options
 */
const createPath = (
    ctx,
    options = {
        start: [0, 0],
        end: [10, 10],
        turnPoints: [],
        strokeTyle: '#000',
        needClose: false,
        needFill: false,
    }
) => {
    const {
        start,
        end,
        turnPoints = [],
        needClose = false,
        needFill = false,
    } = options
    ctx.beginPath()
    ctx.moveTo(...start)
    if (turnPoints.length) {
        turnPoints.forEach((point = [0, 0]) => {
            ctx.lineTo(...point)
        })
    }
    ctx.lineTo(...end)
    if (needFill) {
        ctx.fill()
    }
    if (needClose) {
        ctx.closePath()
    }
    ctx.stroke() // draw
}

/**
 * 绘制弧形
 * @param {*} ctx
 * @param {*} options
 * @returns
 */
const createArc = (ctx, options) =>
    base(ctx, options, () => {
        const {
            x = 0,
            y = 0,
            radius = 10,
            startAngle = 0,
            endAngle = 2 * Math.PI,
            counterclockwise = false,
        } = options
        ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise)
    })

/**
 * 绘制贝塞尔曲线
 * @param {*} ctx
 * @param {*} opts
 * @returns
 */
const createCurve = (ctx, opts) =>
    base(ctx, opts, () => {
        const { cp = [0, 0], start = [0, 0], end = [10, 10] } = opts
        ctx.moveTo(...start)
        if (!opts.cp2) {
            // 单点控制
            ctx.quadraticCurveTo(...cp, ...end)
        } else {
            // 两点控制
            ctx.bezierCurveTo(...cp, ...cp2, ...end)
        }
    })

/**
 * 画虚线
 * @param {*} ctx
 * @param {*} opts
 * @returns
 */
const drawDash = (ctx, opt = {}, drawfunc = () => {}) => {
    // width 实线线段的宽度，space线段中缝隙距离
    const { width = 1, space = 5, offset = 1, animate = false } = opt
    let off = offset

    function draw() {
        ctx.setLineDash([width, space])
        ctx.lineDashOffset = -off
        drawfunc()
    }

    function march() {
        off++
        if (off > 5) {
            off = 0
        }
        draw()
        setTimeout(march, 200)
    }

    if (animate) {
        march()
    }
    draw()
    return ctx
}

export { createPath, createArc, createCurve, drawDash }
