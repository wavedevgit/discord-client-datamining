/** chunk id: 914410 params = (module,exports,require) **/
a.d(t, {
    Ay: () => p,
    fh: () => m,
    qP: () => u
});
var n, r, s = a(627968),
    l = a(64700),
    i = a(503698),
    d = a.n(i);
a(284009);
var o = a(736653),
    c = a(875808),
    u = ((n = {}).UNSET = "unset", n.BLUE = "blue", n.ORANGE = "orange", n),
    m = ((r = {}).LIGHT = "light", r.MEDIUM = "medium", r);
let p = e => {
    let {
        progress: t,
        minimum: a = 0,
        maximum: n = 100,
        weight: r = "light",
        variant: i,
        override: u,
        glowing: m = !0,
        labelledBy: p
    } = e, f = null != u && "unset" === i, b = (0, o.Ay)(), A = u?.[b] ?? u?.default, h = l.useMemo(() => (t - a) / (n - a) * 100, [t, a, n]), _ = t === a, R = {
        ...f ? {
            "--custom-background": A?.background,
            "--custom-gradient-start": A?.gradientStart,
            "--custom-gradient-end": A?.gradientEnd,
            "--custom-gradient-glow": A?.gradientEnd
        } : {},
        ...!m && {
            "--custom-gradient-glow": "transparent"
        }
    };
    return (0, s.jsx)("div", {
        className: d()(c.progressContainer, c[r], c[i]),
        style: R,
        children: (0, s.jsxs)("div", {
            className: d()(c.progress, {
                [c.empty]: _
            }),
            style: {
                width: `${h}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": a,
            "aria-valuemax": n,
            "aria-labelledby": p,
            children: [(0, s.jsx)("div", {
                className: d()(c.glow, {
                    [c.empty]: _
                })
            }), (0, s.jsx)("div", {
                className: d()(c.bar, c[i], {
                    [c.empty]: _
                })
            })]
        })
    })
}