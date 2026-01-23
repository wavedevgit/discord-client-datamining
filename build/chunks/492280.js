/** Chunk was on 42944 **/
/** chunk id: 492280, original params: e,a,n (module,exports,require) **/
n.d(a, {
    E: () => u,
    l: () => m
});
var t = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    r = n(585958),
    s = n(788593),
    o = n(461349),
    c = n(640830);

function d(e) {
    let {
        applicationId: a
    } = e, {
        coverImageUrl: n
    } = (0, r.n)(a);
    return null != n && "" !== n ? (0, t.jsx)("div", {
        className: i()(o.PY, c.LH),
        children: (0, t.jsx)(s.R, {
            imageSrc: n
        })
    }) : (0, t.jsx)("div", {
        className: i()(o.mD, c.LH)
    })
}

function u(e) {
    let {
        applicationId: a,
        size: n = "default",
        className: l
    } = e;
    return (0, t.jsxs)("div", {
        className: i()(c.kL, c.Yi, {
            [c.PG]: "small" === n,
            [c.$g]: "medium" === n
        }, l),
        "aria-hidden": !0,
        children: [null != a ? (0, t.jsx)(d, {
            applicationId: a
        }) : (0, t.jsx)("div", {
            className: o.mD
        }), (0, t.jsxs)("div", {
            className: c.RC,
            children: [(0, t.jsx)("div", {
                className: c.h$
            }), (0, t.jsx)("div", {
                className: c.h$
            })]
        })]
    })
}

function m(e) {
    let {
        applicationIds: a,
        size: n = "default",
        className: l
    } = e, r = "small" === n ? a.slice(0, 3) : a.slice(0, 4);
    return (0, t.jsx)("div", {
        className: i()(c.kL, c.Nu, {
            [c.PG]: "small" === n,
            [c.$g]: "medium" === n
        }, l),
        "aria-hidden": !0,
        children: r.map((e, a) => (0, t.jsx)(d, {
            applicationId: e
        }, a))
    })
}