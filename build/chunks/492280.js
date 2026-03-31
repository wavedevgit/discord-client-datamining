/** chunk id: 492280 params = (module,exports,require) **/
n.d(t, {
    E: () => u,
    l: () => g
});
var i = n(627968);
n(64700);
var a = n(503698),
    l = n.n(a),
    s = n(885151),
    r = n(788593),
    o = n(522500),
    d = n(230765);

function c(e) {
    let {
        applicationId: t
    } = e, {
        data: n
    } = (0, s.k)(t), a = n?.supplementalData?.coverImageUrl;
    return null != a && "" !== a ? (0, i.jsx)("div", {
        className: l()(o.PY, d.LH),
        children: (0, i.jsx)(r.R, {
            imageSrc: a
        })
    }) : (0, i.jsx)("div", {
        className: l()(o.mD, d.LH)
    })
}

function u(e) {
    let {
        applicationId: t,
        className: n,
        gridClassName: a
    } = e;
    return (0, i.jsx)("div", {
        className: l()(d.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsxs)("div", {
            className: l()(d.Yi, a),
            children: [null != t ? (0, i.jsx)(c, {
                applicationId: t
            }) : (0, i.jsx)("div", {
                className: o.mD
            }), (0, i.jsxs)("div", {
                className: d.RC,
                children: [(0, i.jsx)("div", {
                    className: d.h$
                }), (0, i.jsx)("div", {
                    className: d.h$
                })]
            })]
        })
    })
}

function g(e) {
    let {
        applicationIds: t,
        className: n,
        gridClassName: a
    } = e;
    return (0, i.jsx)("div", {
        className: l()(d.kL, n),
        "aria-hidden": !0,
        children: (0, i.jsx)("div", {
            className: l()(d.Nu, a),
            children: t.slice(0, 4).map((e, t) => (0, i.jsx)(c, {
                applicationId: e
            }, t))
        })
    })
}