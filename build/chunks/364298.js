/** chunk id: 364298 params = (module,exports,require) **/
function s(t, e) {
    return Math.floor(Math.random() * (e - t + 1) + t)
}

function n(t, e, i, s) {
    return s.tension * (t - e) - s.friction * i
}
i.d(e, {
    J: () => n,
    R: () => s
})