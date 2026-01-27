/** Chunk was on web.js **/
/** chunk id: 663803, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => d
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(397927),
    l = n(985018),
    c = n(643239);

function u(e) {
    return "" === e || "-" === e
}
let d = e => {
    let {
        value: t,
        onChange: n,
        className: a,
        minValue: d,
        maxValue: f
    } = e, [p, _] = i.useState(t), h = u(p) || null != d && p <= d, m = u(p) || null != f && p >= f, g = e => {
        n(u(e) ? null != d ? d : 0 : e), _(e)
    }, E = e => {
        e.stopPropagation(), h || g(p - 1)
    }, y = e => {
        e.stopPropagation(), m || g(p + 1)
    }, b = e => {
        if (u(e)) return g(e);
        let t = parseInt(e);
        if (!isNaN(t)) return null != f && t >= f ? g(f) : null != d && t <= d ? g(d) : g(t)
    };
    return (0, r.jsxs)("div", {
        className: o()(c.o, a),
        children: [(0, r.jsx)(s.K0, {
            variant: "icon-only",
            size: "sm",
            icon: s.QGg,
            onClick: E,
            "aria-label": l.intl.string(l.t["k+ohJm"]),
            disabled: h
        }), (0, r.jsx)("div", {
            className: c.U,
            children: (0, r.jsx)(s.ksK, {
                value: "".concat(p),
                onChange: b
            })
        }), (0, r.jsx)(s.K0, {
            size: "sm",
            variant: "icon-only",
            icon: s.j96,
            onClick: y,
            "aria-label": l.intl.string(l.t.w8Sc4B),
            disabled: m
        })]
    })
}