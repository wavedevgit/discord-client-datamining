/** chunk id: 914410 params = (module,exports,require) **/
n.d(t, {
    Ay: () => h,
    fh: () => m,
    qP: () => u
});
var s, r, a = n(627968),
    l = n(64700),
    i = n(503698),
    d = n.n(i);
n(284009);
var o = n(736653),
    c = n(63947),
    u = ((s = {}).UNSET = "unset", s.BLUE = "blue", s.ORANGE = "orange", s),
    m = ((r = {}).LIGHT = "light", r.MEDIUM = "medium", r);
let h = e => {
    let {
        progress: t,
        minimum: n = 0,
        maximum: s = 100,
        weight: r = "light",
        variant: i,
        override: u,
        glowing: m = !0,
        labelledBy: h
    } = e, x = null != u && "unset" === i, C = (0, o.Ay)(), _ = u?.[C] ?? u?.default, p = l.useMemo(() => (t - n) / (s - n) * 100, [t, n, s]), g = t === n, f = {
        ...x ? {
            "--custom-background": _?.background,
            "--custom-gradient-start": _?.gradientStart,
            "--custom-gradient-end": _?.gradientEnd,
            "--custom-gradient-glow": _?.gradientEnd
        } : {},
        ...!m && {
            "--custom-gradient-glow": "transparent"
        }
    };
    return (0, a.jsx)("div", {
        className: d()(c.progressContainer, c[r], c[i]),
        style: f,
        children: (0, a.jsxs)("div", {
            className: d()(c.progress, {
                [c.empty]: g
            }),
            style: {
                width: `${p}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": s,
            "aria-labelledby": h,
            children: [(0, a.jsx)("div", {
                className: d()(c.glow, {
                    [c.empty]: g
                })
            }), (0, a.jsx)("div", {
                className: d()(c.bar, c[i], {
                    [c.empty]: g
                })
            })]
        })
    })
}