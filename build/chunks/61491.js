/** chunk id: 61491 params = (module,exports,require) **/
function r(e, t, n) {
    return n * (Math.max(e, 0) / t.width)
}

function l(e, t, n) {
    return s(e / t * 100, n)
}

function s(e, t) {
    return e / 100 * t.width
}

function i(e) {
    let t = 0 | e,
        n = Math.floor(t / 3600),
        r = Math.floor(t % 3600 / 60),
        l = t % 60;
    return n > 0 ? `${n}:${String(r).padStart(2,"0")}:${String(l).padStart(2,"0")}` : `${r}:${String(l).padStart(2,"0")}`
}
n.d(t, {
    DX: () => l,
    TO: () => s,
    hc: () => r,
    rB: () => i
})