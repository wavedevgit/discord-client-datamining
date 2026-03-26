/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(607399),
    o = n(732955),
    c = n(397927),
    u = n(97469),
    d = n(894858),
    _ = n(641324),
    h = n(82186),
    f = n(985018),
    p = n(660938);

function m(e) {
    let {
        icon: t,
        label: n,
        onClick: a
    } = e;
    return (0, r.jsx)(o.K0, {
        onClick: a,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n
    })
}

function b(e) {
    let {
        setting: t,
        onClose: n
    } = e, a = (0, u.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: a,
        children: e => (0, r.jsxs)("div", {
            className: l()(p.$Q, e),
            children: [(0, r.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: p.y9,
                children: [s.Fr && (0, r.jsx)(m, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: f.intl.string(f.t["13/7kX"])
                }), null != t && (0, r.jsx)(h.E, {
                    node: t
                })]
            }), (0, r.jsx)(m, {
                icon: c.d$L,
                onClick: n,
                label: f.intl.string(f.t.cpT0Cq)
            })]
        })
    })
}
let g = a.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, a = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: l()(p.Qs, {
            [p.Hw]: s.Fr,
            [p.n7]: a
        }),
        children: [(0, r.jsx)(b, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: p.yp,
            children: null != n && (0, r.jsx)(_.A, {
                node: n
            })
        })]
    })
})