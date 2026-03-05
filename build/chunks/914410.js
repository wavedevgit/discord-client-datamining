/** chunk id: 914410, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ay: () => _,
    fh: () => m,
    qP: () => c
});
var r, a, s = n(627968),
    l = n(64700),
    i = n(503698),
    d = n.n(i);
n(284009);
var u = n(736653),
    o = n(898434),
    c = ((r = {}).UNSET = "unset", r.BLUE = "blue", r.ORANGE = "orange", r),
    m = ((a = {}).LIGHT = "light", a.MEDIUM = "medium", a);
let _ = e => {
    let {
        progress: t,
        minimum: n = 0,
        maximum: r = 100,
        weight: a = "light",
        variant: i,
        override: c,
        glowing: m = !0,
        labelledBy: _
    } = e, R = null != c && "unset" === i, h = (0, u.Ay)(), p = c?.[h] ?? c?.default, x = l.useMemo(() => (t - n) / (r - n) * 100, [t, n, r]), A = t === n, E = {
        ...R ? {
            "--custom-background": p?.background,
            "--custom-gradient-start": p?.gradientStart,
            "--custom-gradient-end": p?.gradientEnd,
            "--custom-gradient-glow": p?.gradientEnd
        } : {},
        ...!m && {
            "--custom-gradient-glow": "transparent"
        }
    };
    return (0, s.jsx)("div", {
        className: d()(o.progressContainer, o[a], o[i]),
        style: E,
        children: (0, s.jsxs)("div", {
            className: d()(o.progress, {
                [o.empty]: A
            }),
            style: {
                width: `${x}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": n,
            "aria-valuemax": r,
            "aria-labelledby": _,
            children: [(0, s.jsx)("div", {
                className: d()(o.glow, {
                    [o.empty]: A
                })
            }), (0, s.jsx)("div", {
                className: d()(o.bar, o[i], {
                    [o.empty]: A
                })
            })]
        })
    })
}