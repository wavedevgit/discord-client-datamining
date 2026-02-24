/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    l = n(607399),
    o = n(732955),
    c = n(397927),
    u = n(97469),
    d = n(894858),
    _ = n(641324),
    m = n(82186),
    g = n(985018),
    p = n(389985);

function b(e) {
    let {
        icon: t,
        label: n,
        onClick: r
    } = e;
    return (0, a.jsx)(o.K0, {
        onClick: r,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n
    })
}

function f(e) {
    let {
        setting: t,
        onClose: n
    } = e, r = (0, u.NC)();
    return (0, a.jsx)(c.NPJ, {
        theme: r,
        children: e => (0, a.jsxs)("div", {
            className: s()(p.$Q, e),
            children: [(0, a.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: p.y9,
                children: [l.Fr && (0, a.jsx)(b, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: g.intl.string(g.t["13/7kX"])
                }), null != t && (0, a.jsx)(m.E, {
                    node: t
                })]
            }), (0, a.jsx)(b, {
                icon: c.d$L,
                onClick: n,
                label: g.intl.string(g.t.cpT0Cq)
            })]
        })
    })
}
let h = r.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, r = d.A.useField("showNavigationMobile");
    return (0, a.jsxs)("div", {
        className: s()(p.Qs, {
            [p.Hw]: l.Fr,
            [p.n7]: r
        }),
        children: [(0, a.jsx)(f, {
            setting: n,
            onClose: t
        }), (0, a.jsx)("div", {
            className: p.yp,
            children: null != n && (0, a.jsx)(_.A, {
                node: n
            })
        })]
    })
})