/** chunk id: 613566, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => h,
    fh: () => m,
    qP: () => c
});
var n, a, l = r(627968),
    s = r(64700),
    i = r(503698),
    d = r.n(i);
r(284009);
var u = r(736653),
    o = r(281630),
    c = ((n = {}).UNSET = "unset", n.BLUE = "blue", n.ORANGE = "orange", n),
    m = ((a = {}).LIGHT = "light", a.MEDIUM = "medium", a);
let h = e => {
    let {
        progress: t,
        minimum: r = 0,
        maximum: n = 100,
        weight: a = "light",
        variant: i,
        override: c,
        glowing: m = !0,
        labelledBy: h
    } = e, x = null != c && "unset" === i, p = (0, u.Ay)(), _ = c?.[p] ?? c?.default, f = s.useMemo(() => (t - r) / (n - r) * 100, [t, r, n]), g = t === r, N = {
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
    return (0, l.jsx)("div", {
        className: d()(o.progressContainer, o[a], o[i]),
        style: N,
        children: (0, l.jsxs)("div", {
            className: d()(o.progress, {
                [o.empty]: g
            }),
            style: {
                width: `${f}%`
            },
            role: "meter",
            "aria-valuenow": t,
            "aria-valuemin": r,
            "aria-valuemax": n,
            "aria-labelledby": h,
            children: [(0, l.jsx)("div", {
                className: d()(o.glow, {
                    [o.empty]: g
                })
            }), (0, l.jsx)("div", {
                className: d()(o.bar, o[i], {
                    [o.empty]: g
                })
            })]
        })
    })
}