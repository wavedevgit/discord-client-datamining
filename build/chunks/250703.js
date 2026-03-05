/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => v
});
var r = n(627968),
    a = n(64700),
    i = n(503698),
    l = n.n(i),
    s = n(607399),
    o = n(732955),
    u = n(397927),
    c = n(97469),
    d = n(894858),
    h = n(641324),
    g = n(82186),
    f = n(985018),
    m = n(379763);

function y(e) {
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

function p(e) {
    let {
        setting: t,
        onClose: n
    } = e, a = (0, c.NC)();
    return (0, r.jsx)(u.NPJ, {
        theme: a,
        children: e => (0, r.jsxs)("div", {
            className: l()(m.$Q, e),
            children: [(0, r.jsxs)(u.BJc, {
                direction: "horizontal",
                align: "center",
                className: m.y9,
                children: [s.Fr && (0, r.jsx)(y, {
                    icon: u.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: f.intl.string(f.t["13/7kX"])
                }), null != t && (0, r.jsx)(g.E, {
                    node: t
                })]
            }), (0, r.jsx)(y, {
                icon: u.d$L,
                onClick: n,
                label: f.intl.string(f.t.cpT0Cq)
            })]
        })
    })
}
let v = a.memo(function(e) {
    let {
        onClose: t,
        setting: n
    } = e, a = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: l()(m.Qs, {
            [m.Hw]: s.Fr,
            [m.n7]: a
        }),
        children: [(0, r.jsx)(p, {
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