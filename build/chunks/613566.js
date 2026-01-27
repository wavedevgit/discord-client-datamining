/** Chunk was on web.js **/
/** chunk id: 613566, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => d,
    fh: () => u,
    qP: () => c
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a);
n(284009);
var s = n(736653),
    l = n(599556),
    c = function(e) {
        return e.UNSET = "unset", e.BLUE = "blue", e.ORANGE = "orange", e
    }({}),
    u = function(e) {
        return e.LIGHT = "light", e.MEDIUM = "medium", e
    }({});
let d = e => {
    var t;
    let {
        progress: n,
        minimum: a = 0,
        maximum: c = 100,
        weight: u = "light",
        variant: d,
        override: f,
        labelledBy: p
    } = e, _ = null != f && "unset" === d, h = (0, s.Ay)(), m = null != (t = null == f ? void 0 : f[h]) ? t : null == f ? void 0 : f.default, g = i.useMemo(() => (n - a) / (c - a) * 100, [n, a, c]), E = n === a, y = _ ? {
        "--custom-background": null == m ? void 0 : m.background,
        "--custom-gradient-start": null == m ? void 0 : m.gradientStart,
        "--custom-gradient-end": null == m ? void 0 : m.gradientEnd,
        "--custom-gradient-glow": null == m ? void 0 : m.gradientEnd
    } : {};
    return (0, r.jsx)("div", {
        className: o()(l.progressContainer, l[u], l[d]),
        style: y,
        children: (0, r.jsxs)("div", {
            className: o()(l.progress, {
                [l.empty]: E
            }),
            style: {
                width: "".concat(g, "%")
            },
            role: "meter",
            "aria-valuenow": n,
            "aria-valuemin": a,
            "aria-valuemax": c,
            "aria-labelledby": p,
            children: [(0, r.jsx)("div", {
                className: o()(l.glow, {
                    [l.empty]: E
                })
            }), (0, r.jsx)("div", {
                className: o()(l.bar, l[d], {
                    [l.empty]: E
                })
            })]
        })
    })
}