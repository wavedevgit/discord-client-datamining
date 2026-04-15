/** chunk id: 358731 params = (module,exports,require) **/
n.d(t, {
    Ay: () => c,
    nY: () => h
});
var i, r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(311907),
    s = n(775602),
    d = n(454290),
    u = n(422362),
    h = ((i = {}).DEFAULT = "DEFAULT", i.FOCUS_SENSITIVE = "FOCUS_SENSITIVE", i.PINNED = "PINNED", i);
let c = r.memo(function(e) {
    let {
        children: t,
        mode: n = "DEFAULT"
    } = e, {
        zoomed: i
    } = (0, d.Q)(), r = (0, o.bG)([s.A], () => s.A.keyboardModeEnabled);
    return t(l()(u.E3, {
        [u.R]: i && !r && "PINNED" !== n,
        [u.rB]: "FOCUS_SENSITIVE" === n
    }))
})