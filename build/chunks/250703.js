/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(607399),
    o = n(732955),
    u = n(397927),
    c = n(97469),
    d = n(894858),
    h = n(641324),
    m = n(82186),
    f = n(985018),
    p = n(660938);

function v(e) {
    let {
        icon: t,
        label: n,
        onClick: l
    } = e;
    return (0, r.jsx)(o.K0, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n
    })
}

function y(e) {
    let {
        setting: t,
        onClose: n
    } = e, l = (0, c.NC)();
    return (0, r.jsx)(u.NPJ, {
        theme: l,
        children: e => (0, r.jsxs)("div", {
            className: a()(p.$Q, e),
            children: [(0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                align: "center",
                className: p.y9,
                children: [s.Fr && (0, r.jsx)(v, {
                    icon: u.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: f.intl.string(f.t["13/7kX"])
                }), null != t && (0, r.jsx)(m.E, {
                    node: t
                })]
            }), (0, r.jsx)(v, {
                icon: u.d$L,
                onClick: n,
                label: f.intl.string(f.t.cpT0Cq)
            })]
        })
    })
}
let g = l.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, l = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: a()(p.Qs, {
            [p.Hw]: s.Fr,
            [p.n7]: l
        }),
        children: [(0, r.jsx)(y, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: p.yp,
            children: null != n && (0, r.jsx)(h.A, {
                node: n
            })
        })]
    })
})