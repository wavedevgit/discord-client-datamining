/** chunk id: 234914, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => d
});
var i = l(627968),
    n = l(64700),
    r = l(503698),
    s = l.n(r),
    u = l(397927),
    a = l(6976);

function o(e) {
    let {
        alt: t,
        ...l
    } = e, [r, s] = n.useState(!0);
    return (0, i.jsxs)(i.Fragment, {
        children: [r && (0, i.jsx)(u.y$y, {
            type: u.y$y.Type.LOW_MOTION,
            className: a.wG
        }), (0, i.jsx)("img", {
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
        alt: n,
        aspectRatio: r,
        className: u,
        imageChildClassName: d,
        ...c
    } = e;
    return (0, i.jsxs)("div", {
        className: s()(a.kL, u),
        children: [(0, i.jsx)("img", {
            src: l,
            alt: n,
            className: a.iL
        }), (0, i.jsx)("div", {
            className: a.CC
        }), (0, i.jsx)("div", {
            style: {
                aspectRatio: r
            },
            className: a.ZS,
            children: (0, i.jsx)(o, {
                src: t,
                alt: n,
                className: s()(a.Sl, d),
                ...c
            })
        })]
    })
}