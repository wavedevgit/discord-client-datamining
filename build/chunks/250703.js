/** chunk id: 250703 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    l = n(607399),
    o = n(732955),
    c = n(397927),
    u = n(97469),
    d = n(894858),
    m = n(641324),
    f = n(82186),
    g = n(985018),
    h = n(389985);

function y(e) {
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

function p(e) {
    let {
        setting: t,
        onClose: n
    } = e, i = (0, u.NC)();
    return (0, r.jsx)(c.NPJ, {
        theme: i,
        children: e => (0, r.jsxs)("div", {
            className: s()(h.$Q, e),
            children: [(0, r.jsxs)(c.BJc, {
                direction: "horizontal",
                align: "center",
                className: h.y9,
                children: [l.Fr && (0, r.jsx)(y, {
                    icon: c.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: g.intl.string(g.t["13/7kX"])
                }), null != t && (0, r.jsx)(f.E, {
                    node: t
                })]
            }), (0, r.jsx)(y, {
                icon: c.d$L,
                onClick: n,
                label: g.intl.string(g.t.cpT0Cq)
            })]
        })
    })
}
let _ = i.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, i = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: s()(h.Qs, {
            [h.Hw]: l.Fr,
            [h.n7]: i
        }),
        children: [(0, r.jsx)(p, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: h.yp,
            children: null != n && (0, r.jsx)(m.A, {
                node: n
            })
        })]
    })
})