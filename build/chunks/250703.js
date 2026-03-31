/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    l = n.n(a),
    s = n(607399),
    o = n(732955),
    c = n(397927),
    u = n(97469),
    d = n(894858),
    _ = n(641324),
    h = n(82186),
    f = n(985018),
    m = n(660938);

function p(e) {
    let {
        icon: t,
        label: n,
        onClick: i
    } = e;
    return (0, r.jsx)(o.K0, {
        onClick: i,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n
    })
}

function v(e) {
    let {
        setting: t,
        onClose: n
    } = e, i = (0, u.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: i,
        children: e => (0, r.jsxs)("div", {
            className: l()(m.$Q, e),
            children: [(0, r.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: m.y9,
                children: [s.Fr && (0, r.jsx)(p, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: f.intl.string(f.t["13/7kX"])
                }), null != t && (0, r.jsx)(h.E, {
                    node: t
                })]
            }), (0, r.jsx)(p, {
                icon: c.d$L,
                onClick: n,
                label: f.intl.string(f.t.cpT0Cq)
            })]
        })
    })
}
let y = i.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, i = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: l()(m.Qs, {
            [m.Hw]: s.Fr,
            [m.n7]: i
        }),
        children: [(0, r.jsx)(v, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: m.yp,
            children: null != n && (0, r.jsx)(_.A, {
                node: n
            })
        })]
    })
})