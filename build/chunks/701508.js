/** chunk id: 701508, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(582754),
    o = n(397927),
    c = n(736653),
    d = n(611371),
    u = n(262834);

function p(e) {
    let {
        title: t,
        betaTag: n,
        color: l = "text-strong"
    } = e;
    return (0, r.jsxs)(o.Heading, {
        className: a()(u.DD, u.Zv),
        variant: "display-lg",
        color: l,
        children: [t, n && (0, r.jsx)(d.A, {
            className: u.TN
        })]
    })
}

function h(e) {
    let {
        title: t,
        titleColor: n,
        description: i,
        button: d,
        className: h,
        children: m,
        betaTag: g = !1
    } = e, _ = (0, c.Ay)(), b = (0, s.Mw)(_), f = l.useMemo(() => Array.isArray(t) ? t.map((e, t) => (0, r.jsx)(p, {
        title: e,
        betaTag: g,
        color: n
    }, t)) : (0, r.jsx)(p, {
        title: t,
        betaTag: g,
        color: n
    }), [t, g, n]);
    return (0, r.jsxs)("div", {
        className: a()(u.kL, h),
        children: [(0, r.jsx)("div", {
            className: u.Qs,
            children: (0, r.jsxs)("div", {
                className: u.FS,
                children: [f, null != i && (0, r.jsx)(o.Text, {
                    className: u.h_,
                    variant: "text-md/medium",
                    color: b ? "text-muted" : "text-strong",
                    children: i
                }), null != d && (0, r.jsx)("div", {
                    className: u.UD,
                    children: d
                })]
            })
        }), m]
    })
}