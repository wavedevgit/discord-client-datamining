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
    u = n(397927),
    c = n(97469),
    d = n(894858),
    h = n(641324),
    f = n(82186),
    m = n(985018),
    g = n(389985);

function v(e) {
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
    } = e, i = (0, c.NC)();
    return (0, r.jsx)(u.NPJ, {
        theme: i,
        children: e => (0, r.jsxs)("div", {
            className: l()(g.$Q, e),
            children: [(0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                align: "center",
                className: g.y9,
                children: [s.Fr && (0, r.jsx)(v, {
                    icon: u.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: m.intl.string(m.t["13/7kX"])
                }), null != t && (0, r.jsx)(f.E, {
                    node: t
                })]
            }), (0, r.jsx)(v, {
                icon: u.d$L,
                onClick: n,
                label: m.intl.string(m.t.cpT0Cq)
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
        className: l()(g.Qs, {
            [g.Hw]: s.Fr,
            [g.n7]: i
        }),
        children: [(0, r.jsx)(p, {
            setting: n,
            onClose: t
        }), (0, r.jsx)("div", {
            className: g.yp,
            children: null != n && (0, r.jsx)(h.A, {
                node: n
            })
        })]
    })
})