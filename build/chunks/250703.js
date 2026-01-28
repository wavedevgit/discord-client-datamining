/** Chunk was on 75473 **/
/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    o = n(64700),
    a = n(503698),
    l = n.n(a),
    i = n(607399),
    c = n(732955),
    s = n(397927),
    u = n(97469),
    d = n(894858),
    b = n(641324),
    f = n(985018),
    p = n(379763);

function _(e) {
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
            className: l()(p.$Q, e),
            children: [(0, r.jsxs)("div", {
                className: p.y9,
                children: [i.Fr && (0, r.jsx)(_, {
                    icon: s.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: f.intl.string(f.t["13/7kX"])
                }), (0, r.jsx)(s.Heading, {
                    variant: "heading-md/medium",
                    color: "text-default",
                    children: t
                }), null != n && n]
            }), (0, r.jsx)(_, {
                icon: s.d$L,
                onClick: o,
                label: f.intl.string(f.t.cpT0Cq)
            })]
        })
    })
}
let m = o.memo(function(e) {
    var t, n;
    let {
        onClose: o,
        setting: a
    } = e, c = null != (t = null == a ? void 0 : a.useTitle()) ? t : "", s = null == a || null == (n = a.useBadge) ? void 0 : n.call(a), u = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: l()(p.Qs, {
            [p.Hw]: i.Fr,
            [p.n7]: u
        }),
        children: [(0, r.jsx)(y, {
            title: c,
            badge: s,
            onClose: o
        }), (0, r.jsx)("div", {
            className: p.yp,
            children: null != a && (0, r.jsx)(b.A, {
                node: a
            })
        })]
    })
})