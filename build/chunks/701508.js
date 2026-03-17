/** chunk id: 701508 params = (module,exports,require) **/
a.d(t, {
    A: () => h
});
var n = a(627968),
    i = a(64700),
    l = a(503698),
    s = a.n(l),
    r = a(582754),
    o = a(397927),
    c = a(736653),
    d = a(611371),
    u = a(262834);

function m(e) {
    let {
        title: t,
        betaTag: a,
        color: i = "text-strong"
    } = e;
    return (0, n.jsxs)(o.Heading, {
        className: s()(u.DD, u.Zv),
        variant: "display-lg",
        color: i,
        children: [t, a && (0, n.jsx)(d.A, {
            className: u.TN
        })]
    })
}

function h(e) {
    let {
        title: t,
        titleColor: a,
        description: l,
        button: d,
        className: h,
        children: p,
        betaTag: _ = !1
    } = e, g = (0, c.Ay)(), x = (0, r.Mw)(g), A = i.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, n.jsx)(m, {
        title: e,
        betaTag: _,
        color: a
    }, t)) : (0, n.jsx)(m, {
        title: t,
        betaTag: _,
        color: a
    }), [t, _, a]);
    return (0, n.jsxs)("div", {
        className: s()(u.kL, h),
        children: [(0, n.jsx)("div", {
            className: u.Qs,
            children: (0, n.jsxs)("div", {
                className: u.FS,
                children: [A, null != l && (0, n.jsx)(o.Text, {
                    className: u.h_,
                    variant: "text-md/medium",
                    color: x ? "text-muted" : "text-strong",
                    children: l
                }), null != d && (0, n.jsx)("div", {
                    className: u.UD,
                    children: d
                })]
            })
        }), p]
    })
}