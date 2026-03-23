/** chunk id: 234914 params = (module,exports,require) **/
a.d(t, {
    A: () => u
});
var n = a(627968),
    l = a(64700),
    r = a(503698),
    i = a.n(r),
    s = a(397927),
    c = a(6976);

function o(e) {
    let {
        alt: t,
        ...a
    } = e, [r, i] = l.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
        children: [r && (0, n.jsx)(s.y$y, {
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
        alt: l,
        aspectRatio: r,
        className: s,
        imageChildClassName: u,
        ..._
    } = e;
    return (0, n.jsxs)("div", {
        className: i()(c.kL, s),
        children: [(0, n.jsx)("img", {
            src: a,
            alt: l,
            className: c.iL
        }), (0, n.jsx)("div", {
            className: c.CC
        }), (0, n.jsx)("div", {
            style: {
                aspectRatio: r
            },
            className: c.ZS,
            children: (0, n.jsx)(o, {
                src: t,
                alt: l,
                className: i()(c.Sl, u),
                ..._
            })
        })]
    })
}