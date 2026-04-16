/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(732955),
    u = n(397927),
    c = n(97469),
    d = n(894858),
    h = n(641324),
    p = n(82186),
    _ = n(985018),
    m = n(441562);

function f(e) {
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

function g(e) {
    let {
        setting: t,
        onClose: n
    } = e, i = (0, c.NC)();
    return (0, r.jsx)(u.NPJ, {
        theme: i,
        children: e => (0, r.jsxs)("div", {
            className: s()(m.$Q, e),
            children: [(0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                align: "center",
                className: m.y9,
                children: [l.Fr && (0, r.jsx)(f, {
                    icon: u.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: _.intl.string(_.t["13/7kX"])
                }), null != t && (0, r.jsx)(p.E, {
                    node: t
                })]
            }), (0, r.jsx)(f, {
                icon: u.d$L,
                onClick: n,
                label: _.intl.string(_.t.cpT0Cq)
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
        className: s()(m.Qs, {
            [m.Hw]: l.Fr,
            [m.n7]: i
        }),
        children: [(0, r.jsx)(g, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: m.yp,
            children: null != n && (0, r.jsx)(h.A, {
                node: n
            })
        })]
    })
})