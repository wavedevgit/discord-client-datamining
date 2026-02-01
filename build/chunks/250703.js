/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    o = n(64700),
    a = n(503698),
    i = n.n(a),
    l = n(607399),
    c = n(732955),
    s = n(397927),
    u = n(97469),
    _ = n(894858),
    d = n(641324),
    b = n(985018),
    p = n(379763);

function f(e) {
    let {
        icon: t,
        label: n,
        onClick: o
    } = e;
    return (0, r.jsx)(c.K0, {
        onClick: o,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n
    })
}

function y(e) {
    let {
        title: t,
        badge: n,
        onClose: o
    } = e, a = (0, u.NC)();
    return (0, r.jsx)(s.NPJ, {
        theme: a,
        children: e => (0, r.jsxs)("div", {
            className: i()(p.$Q, e),
            children: [(0, r.jsxs)("div", {
                className: p.y9,
                children: [l.Fr && (0, r.jsx)(f, {
                    icon: s.fEi,
                    onClick: () => _.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: b.intl.string(b.t["13/7kX"])
                }), (0, r.jsx)(s.Heading, {
                    variant: "heading-md/medium",
                    color: "text-default",
                    children: t
                }), null != n && n]
            }), (0, r.jsx)(f, {
                icon: s.d$L,
                onClick: o,
                label: b.intl.string(b.t.cpT0Cq)
            })]
        })
    })
}
let g = o.memo(function(e) {
    var t, n;
    let {
        onClose: o,
        setting: a
    } = e, c = null != (t = null == a ? void 0 : a.useTitle()) ? t : "", s = null == a || null == (n = a.useBadge) ? void 0 : n.call(a), u = _.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: i()(p.Qs, {
            [p.Hw]: l.Fr,
            [p.n7]: u
        }),
        children: [(0, r.jsx)(y, {
            title: c,
            badge: s,
            onClose: o
        }), (0, r.jsx)("div", {
            className: p.yp,
            children: null != a && (0, r.jsx)(d.A, {
                node: a
            })
        })]
    })
})