/** chunk id: 914410 params = (module,exports,require) **/
a.d(t, {
    Ay: () => m,
    fh: () => _,
    qP: () => u
});
var r, n, i = a(627968),
    s = a(64700),
    l = a(503698),
    d = a.n(l);
a(284009);
var o = a(736653),
    c = a(751323),
    u = ((r = {}).UNSET = "unset", r.BLUE = "blue", r.ORANGE = "orange", r),
    _ = ((n = {}).LIGHT = "light", n.MEDIUM = "medium", n);
let m = e => {
    let {
        progress: t,
        minimum: a = 0,
        maximum: r = 100,
        weight: n = "light",
        variant: l,
        override: u,
        glowing: _ = !0,
        labelledBy: m
    } = e, p = null != u && "unset" === l, b = (0, o.Ay)(), f = u?.[b] ?? u?.default, g = s.useMemo(() => (t - a) / (r - a) * 100, [t, a, r]), h = t === a, A = {
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
    return (0, i.jsx)("div", {
        className: d()(c.progressContainer, c[n], c[l]),
        style: A,
        children: (0, i.jsxs)("div", {
            className: d()(c.progress, {
                [c.empty]: h
            }),
            style: {
                width: `${g}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": a,
            "aria-valuemax": r,
            "aria-labelledby": m,
            children: [(0, i.jsx)("div", {
                className: d()(c.glow, {
                    [c.empty]: h
                })
            }), (0, i.jsx)("div", {
                className: d()(c.bar, c[l], {
                    [c.empty]: h
                })
            })]
        })
    })
}