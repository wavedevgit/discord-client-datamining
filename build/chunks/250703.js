/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(607399),
    o = n(732955),
    c = n(397927),
    u = n(97469),
    d = n(894858),
    m = n(641324),
    f = n(82186),
    h = n(985018),
    p = n(389985);

function g(e) {
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

function x(e) {
    let {
        setting: t,
        onClose: n
    } = e, a = (0, u.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: a,
        children: e => (0, r.jsxs)("div", {
            className: s()(p.$Q, e),
            children: [(0, r.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: p.y9,
                children: [l.Fr && (0, r.jsx)(g, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: h.intl.string(h.t["13/7kX"])
                }), null != t && (0, r.jsx)(f.E, {
                    node: t
                })]
            }), (0, r.jsx)(g, {
                icon: c.d$L,
                onClick: n,
                label: h.intl.string(h.t.cpT0Cq)
            })]
        })
    })
}
let _ = a.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, a = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: s()(p.Qs, {
            [p.Hw]: l.Fr,
            [p.n7]: a
        }),
        children: [(0, r.jsx)(x, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: p.yp,
            children: null != n && (0, r.jsx)(m.A, {
                node: n
            })
        })]
    })
})