/** chunk id: 914410 params = (module,exports,require) **/
a.d(t, {
    Ay: () => m,
    fh: () => _,
    qP: () => u
});
var n, r, s = a(627968),
    i = a(64700),
    d = a(503698),
    l = a.n(d);
a(284009);
var o = a(736653),
    c = a(875808),
    u = ((n = {}).UNSET = "unset", n.BLUE = "blue", n.ORANGE = "orange", n),
    _ = ((r = {}).LIGHT = "light", r.MEDIUM = "medium", r);
let m = e => {
    let {
        progress: t,
        minimum: a = 0,
        maximum: n = 100,
        weight: r = "light",
        variant: d,
        override: u,
        glowing: _ = !0,
        labelledBy: m
    } = e, p = null != u && "unset" === d, b = (0, o.Ay)(), f = u?.[b] ?? u?.default, g = i.useMemo(() => (t - a) / (n - a) * 100, [t, a, n]), A = t === a, h = {
        ...p ? {
            "--custom-background": f?.background,
            "--custom-gradient-start": f?.gradientStart,
            "--custom-gradient-end": f?.gradientEnd,
            "--custom-gradient-glow": f?.gradientEnd
        } : {},
        ...!_ && {
            "--custom-gradient-glow": "transparent"
        }
    };
    return (0, s.jsx)("div", {
        className: l()(c.progressContainer, c[r], c[d]),
        style: h,
        children: (0, s.jsxs)("div", {
            className: l()(c.progress, {
                [c.empty]: A
            }),
            style: {
                width: `${g}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": a,
            "aria-valuemax": n,
            "aria-labelledby": m,
            children: [(0, s.jsx)("div", {
                className: l()(c.glow, {
                    [c.empty]: A
                })
            }), (0, s.jsx)("div", {
                className: l()(c.bar, c[d], {
                    [c.empty]: A
                })
            })]
        })
    })
}