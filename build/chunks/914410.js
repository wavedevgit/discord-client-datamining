/** chunk id: 914410, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => _,
    fh: () => m,
    qP: () => c
});
var n, a, l = r(627968),
    s = r(64700),
    i = r(503698),
    d = r.n(i);
r(284009);
var u = r(736653),
    o = r(875808),
    c = ((n = {}).UNSET = "unset", n.BLUE = "blue", n.ORANGE = "orange", n),
    m = ((a = {}).LIGHT = "light", a.MEDIUM = "medium", a);
let _ = e => {
    let {
        progress: t,
        minimum: r = 0,
        maximum: n = 100,
        weight: a = "light",
        variant: i,
        override: c,
        glowing: m = !0,
        labelledBy: _
    } = e, R = null != c && "unset" === i, p = (0, u.Ay)(), h = c?.[p] ?? c?.default, A = s.useMemo(() => (t - r) / (n - r) * 100, [t, r, n]), E = t === r, x = {
        ...R ? {
            "--custom-background": h?.background,
            "--custom-gradient-start": h?.gradientStart,
            "--custom-gradient-end": h?.gradientEnd,
            "--custom-gradient-glow": h?.gradientEnd
        } : {},
        ...!m && {
            "--custom-gradient-glow": "transparent"
        }
    };
    return (0, l.jsx)("div", {
        className: d()(o.progressContainer, o[a], o[i]),
        style: x,
        children: (0, l.jsxs)("div", {
            className: d()(o.progress, {
                [o.empty]: E
            }),
            style: {
                width: `${A}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": r,
            "aria-valuemax": n,
            "aria-labelledby": _,
            children: [(0, l.jsx)("div", {
                className: d()(o.glow, {
                    [o.empty]: E
                })
            }), (0, l.jsx)("div", {
                className: d()(o.bar, o[i], {
                    [o.empty]: E
                })
            })]
        })
    })
}