/** chunk id: 25911 params = (module,exports,require) **/
function i(e, t, n) {
    return (n.y - e.y) * (t.x - e.x) > (t.y - e.y) * (n.x - e.x)
}

function l(e, t, n, l) {
    return i(e, n, l) !== i(t, n, l) && i(e, t, n) !== i(e, t, l)
}

function s(e, t, n) {
    let i = Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2));
    return {
        x: t.x + (t.x - e.x) / i * n,
        y: t.y + (t.y - e.y) / i * n
    }
}

function a(e, t, n) {
    let i = {
            x: n.x,
            y: n.y
        },
        s = {
            x: n.x + n.width,
            y: n.y
        },
        a = {
            x: n.x,
            y: n.y + n.height
        },
        r = {
            x: n.x + n.width,
            y: n.y + n.height
        };
    return l(e, t, i, s) || l(e, t, s, r) || l(e, t, r, a) || l(e, t, a, i)
}
n.d(t, {
    lw: () => a,
    wf: () => s
})