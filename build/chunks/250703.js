/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => b
});
var n = r(627968),
    a = r(64700),
    i = r(503698),
    l = r.n(i),
    s = r(607399),
    o = r(732955),
    c = r(397927),
    u = r(97469),
    d = r(894858),
    h = r(641324),
    f = r(82186),
    _ = r(985018),
    m = r(379763);

function p(e) {
    let {
        icon: t,
        label: r,
        onClick: a
    } = e;
    return (0, n.jsx)(o.K0, {
        onClick: a,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": r
    })
}

function g(e) {
    let {
        setting: t,
        onClose: r
    } = e, a = (0, u.NC)();
    return (0, n.jsx)(c.NPJ, {
        theme: a,
        children: e => (0, n.jsxs)("div", {
            className: l()(m.$Q, e),
            children: [(0, n.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: m.y9,
                children: [s.Fr && (0, n.jsx)(p, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: _.intl.string(_.t["13/7kX"])
                }), null != t && (0, n.jsx)(f.E, {
                    node: t
                })]
            }), (0, n.jsx)(p, {
                icon: c.d$L,
                onClick: r,
                label: _.intl.string(_.t.cpT0Cq)
            })]
        })
    })
}
let b = a.memo(function(e) {
    let {
        onClose: t,
        setting: r
    } = e, a = d.A.useField("showNavigationMobile");
    return (0, n.jsxs)("div", {
        className: l()(m.Qs, {
            [m.Hw]: s.Fr,
            [m.n7]: a
        }),
        children: [(0, n.jsx)(g, {
            setting: r,
            onClose: t
        }), (0, n.jsx)("div", {
            className: m.yp,
            children: null != r && (0, n.jsx)(h.A, {
                node: r
            })
        })]
    })
})