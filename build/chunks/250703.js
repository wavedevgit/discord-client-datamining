/** Chunk was on 59024 **/
/** chunk id: 250703, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var r = n(627968),
    l = n(64700),
    o = n(503698),
    a = n.n(o),
    i = n(607399),
    c = n(732955),
    s = n(397927),
    u = n(97469),
    d = n(894858),
    b = n(641324),
    y = n(985018),
    p = n(379763);

function f(e) {
    let {
        icon: t,
        label: n,
        onClick: l
    } = e;
    return (0, r.jsx)(c.K0, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": n
    })
}

function g(e) {
    let {
        title: t,
        badge: n,
        onClose: l
    } = e, o = (0, u.NC)();
    return (0, r.jsx)(s.NPJ, {
        theme: o,
        children: e => (0, r.jsxs)("div", {
            className: a()(p.$Q, e),
            children: [(0, r.jsxs)("div", {
                className: p.y9,
                children: [i.Fr && (0, r.jsx)(f, {
                    icon: s.fEi,
                    onClick: () => d.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: y.intl.string(y.t["13/7kX"])
                }), (0, r.jsx)(s.Heading, {
                    variant: "heading-md/medium",
                    color: "text-default",
                    children: t
                }), null != n && n]
            }), (0, r.jsx)(f, {
                icon: s.d$L,
                onClick: l,
                label: y.intl.string(y.t.cpT0Cq)
            })]
        })
    })
}
let m = l.memo(function(e) {
    var t, n;
    let {
        onClose: l,
        setting: o
    } = e, c = null != (t = null == o ? void 0 : o.useTitle()) ? t : "", s = null == o || null == (n = o.useBadge) ? void 0 : n.call(o), u = d.A.useField("showNavigationMobile");
    return (0, r.jsxs)("div", {
        className: a()(p.Qs, {
            [p.Hw]: i.Fr,
            [p.n7]: u
        }),
        children: [(0, r.jsx)(g, {
            title: c,
            badge: s,
            onClose: l
        }), (0, r.jsx)("div", {
            className: p.yp,
            children: null != o && (0, r.jsx)(b.A, {
                node: o
            })
        })]
    })
})