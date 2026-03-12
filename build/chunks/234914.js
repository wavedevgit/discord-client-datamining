/** chunk id: 234914 params = (module,exports,require) **/
a.d(t, {
    A: () => u
});
var n = a(627968),
    r = a(64700),
    l = a(503698),
    i = a.n(l),
    s = a(397927),
    c = a(140490);

function o(e) {
    let {
        alt: t,
        ...a
    } = e, [l, i] = r.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
        children: [l && (0, n.jsx)(s.y$y, {
            type: s.y$y.Type.LOW_MOTION,
            className: c.wG
        }), (0, n.jsx)("img", {
            ...a,
            alt: t,
            onLoad: () => i(!1)
        })]
    })
}

function u(e) {
    let {
        src: t,
        backgroundSrc: a,
        alt: r,
        aspectRatio: l,
        className: s,
        imageChildClassName: u,
        ..._
    } = e;
    return (0, n.jsxs)("div", {
        className: i()(c.kL, s),
        children: [(0, n.jsx)("img", {
            src: a,
            alt: r,
            className: c.iL
        }), (0, n.jsx)("div", {
            className: c.CC
        }), (0, n.jsx)("div", {
            style: {
                aspectRatio: l
            },
            className: c.ZS,
            children: (0, n.jsx)(o, {
                src: t,
                alt: r,
                className: i()(c.Sl, u),
                ..._
            })
        })]
    })
}