/** chunk id: 914410 params = (module,exports,require) **/
r.d(t, {
    Ay: () => _,
    fh: () => m,
    qP: () => u
});
var n, a, i = r(627968),
    s = r(64700),
    l = r(503698),
    d = r.n(l);
r(284009);
var o = r(736653),
    c = r(751323),
    u = ((n = {}).UNSET = "unset", n.BLUE = "blue", n.ORANGE = "orange", n),
    m = ((a = {}).LIGHT = "light", a.MEDIUM = "medium", a);
let _ = e => {
    let {
        progress: t,
        minimum: r = 0,
        maximum: n = 100,
        weight: a = "light",
        variant: l,
        override: u,
        glowing: m = !0,
        labelledBy: _
    } = e, p = null != u && "unset" === l, f = (0, o.Ay)(), h = u?.[f] ?? u?.default, b = s.useMemo(() => (t - r) / (n - r) * 100, [t, r, n]), g = t === r, x = {
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
        className: d()(c.progressContainer, c[a], c[l]),
        style: x,
        children: (0, i.jsxs)("div", {
            className: d()(c.progress, {
                [c.empty]: g
            }),
            style: {
                width: `${b}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": r,
            "aria-valuemax": n,
            "aria-labelledby": _,
            children: [(0, i.jsx)("div", {
                className: d()(c.glow, {
                    [c.empty]: g
                })
            }), (0, i.jsx)("div", {
                className: d()(c.bar, c[l], {
                    [c.empty]: g
                })
            })]
        })
    })
}