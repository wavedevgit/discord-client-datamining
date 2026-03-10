/** chunk id: 234914 params = (module,exports,require) **/
l.d(t, {
    A: () => d
});
var n = l(627968),
    i = l(64700),
    r = l(503698),
    s = l.n(r),
    u = l(397927),
    a = l(6976);

function o(e) {
    let {
        alt: t,
        ...l
    } = e, [r, s] = i.useState(!0);
    return (0, n.jsxs)(n.Fragment, {
        children: [r && (0, n.jsx)(u.y$y, {
            type: u.y$y.Type.LOW_MOTION,
            className: a.wG
        }), (0, n.jsx)("img", {
            ...l,
            alt: t,
            onLoad: () => s(!1)
        })]
    })
}

function d(e) {
    let {
        src: t,
        backgroundSrc: l,
        alt: i,
        aspectRatio: r,
        className: u,
        imageChildClassName: d,
        ...c
    } = e;
    return (0, n.jsxs)("div", {
        className: s()(a.kL, u),
        children: [(0, n.jsx)("img", {
            src: l,
            alt: i,
            className: a.iL
        }), (0, n.jsx)("div", {
            className: a.CC
        }), (0, n.jsx)("div", {
            style: {
                aspectRatio: r
            },
            className: a.ZS,
            children: (0, n.jsx)(o, {
                src: t,
                alt: i,
                className: s()(a.Sl, d),
                ...c
            })
        })]
    })
}