/** chunk id: 492280 params = (module,exports,require) **/
n.d(t, {
    E: () => u,
    l: () => m
});
var i = n(627968);
n(64700);
var l = n(503698),
    a = n.n(l),
    s = n(454908),
    r = n(788593),
    o = n(496527),
    c = n(272220);

function d(e) {
    let {
        applicationId: t
    } = e, {
        data: n
    } = (0, s.I)(t), l = n?.getCoverURL();
    return null != l && "" !== l ? (0, i.jsx)("div", {
        className: a()(o.PY, c.LH),
        children: (0, i.jsx)(r.R, {
            imageSrc: l
        })
    }) : (0, i.jsx)("div", {
        className: a()(o.mD, c.LH)
    })
}

function u(e) {
    let {
        applicationId: t,
        className: n,
        gridClassName: l
    } = e;
    return (0, i.jsx)("div", {
        className: a()(c.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: a()(c.Yi, l),
            children: [null != t ? (0, i.jsx)(d, {
                applicationId: t
            }) : (0, i.jsx)("div", {
                className: o.mD
            }), (0, i.jsxs)("div", {
                className: c.RC,
                children: [(0, i.jsx)("div", {
                    className: c.h$
                }), (0, i.jsx)("div", {
                    className: c.h$
                })]
            })]
        })
    })
}

function m(e) {
    let {
        applicationIds: t,
        className: n,
        gridClassName: l
    } = e;
    return (0, i.jsx)("div", {
        className: a()(c.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: a()(c.Nu, l),
            children: t.slice(0, 4).map((e, t) => (0, i.jsx)(d, {
                applicationId: e
            }, t))
        })
    })
}