/** chunk id: 829887, original params: e,t,n (module,exports,require) **/
n.d(t, {
    RU: () => u,
    SQ: () => c,
    mb: () => o
}), n(228524);
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(397927),
    s = n(100411);
let o = 16;

function u(e) {
    let {
        description: t,
        name: n,
        icon: r,
        onNavigate: u,
        className: c,
        missingNavIcon: E
    } = e;
    return (0, l.jsxs)(i.DUT, {
        onClick: u,
        className: a()(s.ol, null != u && s.xO, c),
        children: [null != r && (0, l.jsx)("div", {
            className: s.bl,
            children: r
        }), null != n && (0, l.jsx)("div", {
            className: s.NR,
            children: n
        }), (0, l.jsx)("div", {
            className: s.uV,
            children: t
        }), null != u && (0, l.jsx)("div", {
            className: s.Rp,
            children: (0, l.jsx)(i.uhT, {
                size: "custom",
                width: o,
                height: o
            })
        }), null == u && null != E && (0, l.jsx)("div", {
            className: s.Rp,
            children: E
        })]
    })
}

function c(e) {
    let {
        children: t
    } = e;
    return (0, l.jsx)("div", {
        className: s.Fz,
        children: t
    })
}