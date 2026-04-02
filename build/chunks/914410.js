/** chunk id: 914410 params = (module,exports,require) **/
r.d(t, {
    Ay: () => _,
    fh: () => m,
    qP: () => u
});
var a, n, i = r(627968),
    s = r(64700),
    l = r(503698),
    o = r.n(l);
r(284009);
var d = r(736653),
    c = r(557714),
    u = ((a = {}).UNSET = "unset", a.BLUE = "blue", a.ORANGE = "orange", a),
    m = ((n = {}).LIGHT = "light", n.MEDIUM = "medium", n);
let _ = e => {
    let {
        progress: t,
        minimum: r = 0,
        maximum: a = 100,
        weight: n = "light",
        variant: l,
        override: u,
        glowing: m = !0,
        labelledBy: _
    } = e, p = null != u && "unset" === l, f = (0, d.Ay)(), h = u?.[f] ?? u?.default, b = s.useMemo(() => (t - r) / (a - r) * 100, [t, r, a]), g = t === r, x = {
        ...p ? {
            "--custom-background": h?.background,
            "--custom-gradient-start": h?.gradientStart,
            "--custom-gradient-end": h?.gradientEnd,
            "--custom-gradient-glow": h?.gradientEnd
        } : {},
        ...!m && {
            "--custom-gradient-glow": "transparent"
        }
    };
    return (0, i.jsx)("div", {
        className: o()(c.progressContainer, c[n], c[l]),
        style: x,
        children: (0, i.jsxs)("div", {
            className: o()(c.progress, {
                [c.empty]: g
            }),
            style: {
                width: `${b}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": r,
            "aria-valuemax": a,
            "aria-labelledby": _,
            children: [(0, i.jsx)("div", {
                className: o()(c.glow, {
                    [c.empty]: g
                })
            }), (0, i.jsx)("div", {
                className: o()(c.bar, c[l], {
                    [c.empty]: g
                })
            })]
        })
    })
}