/** chunk id: 888675, original params: e,s,t (module,exports,require) **/
t.d(s, {
    A: () => u
});
var n = t(627968);
t(64700);
var l = t(503698),
    a = t.n(l),
    i = t(397927),
    r = t(449859),
    o = t(256883);

function c(e) {
    let {
        icon: s,
        iconNode: t,
        timestamp: l,
        timestampFormat: i,
        className: c,
        children: u,
        contentClassName: m,
        iconClassName: d,
        iconContainerClassName: h,
        timestampClassName: g,
        compact: p = !1,
        additionalContent: j
    } = e;
    return (0, n.jsxs)("div", {
        className: a()(c, {
            [o.kL]: !0,
            [o.oE]: p,
            [o.E]: !p
        }),
        children: [null != t && (0, n.jsx)("div", {
            className: a()(o.zc, h),
            children: t
        }), null != s && (0, n.jsx)("div", {
            className: o.zc,
            children: (0, n.jsx)("div", {
                "data-accessibility": "desaturate",
                className: a()(o.Kk, o.RK, d),
                style: {
                    backgroundImage: "url('".concat(s, "')")
                }
            })
        }), (0, n.jsxs)("div", {
            className: a()(m, o.Qs),
            children: [(0, n.jsxs)("div", {
                children: [u, null != l && (0, n.jsx)(r.A, {
                    timestamp: l,
                    timestampFormat: i,
                    className: g
                })]
            }), j]
        })]
    })
}
c.Action = e => {
    let {
        onClick: s,
        children: t
    } = e;
    return (0, n.jsxs)("span", {
        className: o.XI,
        children: ["—", (0, n.jsx)(i.MzZ, {
            onClick: s,
            className: o.si,
            children: t
        })]
    })
};
let u = c