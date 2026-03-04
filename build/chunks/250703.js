/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
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
    _ = n(641324),
    m = n(82186),
    g = n(985018),
    b = n(379763);

function p(e) {
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

function h(e) {
    let {
        setting: t,
        onClose: n
    } = e, a = (0, u.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: a,
        children: e => (0, r.jsxs)("div", {
            className: s()(b.$Q, e),
            children: [(0, r.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: b.y9,
                children: [l.Fr && (0, r.jsx)(p, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: g.intl.string(g.t["13/7kX"])
                }), null != t && (0, r.jsx)(m.E, {
                    node: t
                })]
            }), (0, r.jsx)(p, {
                icon: c.d$L,
                onClick: n,
                label: g.intl.string(g.t.cpT0Cq)
            })]
        })
    })
}
let f = a.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, a = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: s()(b.Qs, {
            [b.Hw]: l.Fr,
            [b.n7]: a
        }),
        children: [(0, r.jsx)(h, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: b.yp,
            children: null != n && (0, r.jsx)(_.A, {
                node: n
            })
        })]
    })
})