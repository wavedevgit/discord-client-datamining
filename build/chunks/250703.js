/** Chunk was on 65076 **/
/** chunk id: 250703, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => O
});
var n = r(627968),
    l = r(64700),
    o = r(503698),
    a = r.n(o),
    i = r(607399),
    c = r(732955),
    s = r(397927),
    u = r(97469),
    y = r(894858),
    f = r(641324),
    b = r(985018),
    d = r(379763);

function p(e) {
    let {
        icon: t,
        label: r,
        onClick: l
    } = e;
    return (0, n.jsx)(c.K0, {
        onClick: l,
        icon: t,
        size: "sm",
        variant: "icon-only",
        "aria-label": r
    })
}

function g(e) {
    let {
        title: t,
        badge: r,
        onClose: l
    } = e, o = (0, u.NC)();
    return (0, n.jsx)(s.NPJ, {
        theme: o,
        children: e => (0, n.jsxs)("div", {
            className: a()(d.$Q, e),
            children: [(0, n.jsxs)("div", {
                className: d.y9,
                children: [i.Fr && (0, n.jsx)(p, {
                    icon: s.fEi,
                    onClick: () => y.A.setState({
                        showNavigationMobile: !0
                    }),
                    label: b.intl.string(b.t["13/7kX"])
                }), (0, n.jsx)(s.Heading, {
                    variant: "heading-md/medium",
                    color: "text-default",
                    children: t
                }), null != r && r]
            }), (0, n.jsx)(p, {
                icon: s.d$L,
                onClick: l,
                label: b.intl.string(b.t.cpT0Cq)
            })]
        })
    })
}
let O = l.memo(function(e) {
    var t, r;
    let {
        onClose: l,
        setting: o
    } = e, c = null != (t = null == o ? void 0 : o.useTitle()) ? t : "", s = null == o || null == (r = o.useBadge) ? void 0 : r.call(o), u = y.A.useField("showNavigationMobile");
    return (0, n.jsxs)("div", {
        className: a()(d.Qs, {
            [d.Hw]: i.Fr,
            [d.n7]: u
        }),
        children: [(0, n.jsx)(g, {
            title: c,
            badge: s,
            onClose: l
        }), (0, n.jsx)("div", {
            className: d.yp,
            children: null != o && (0, n.jsx)(f.A, {
                node: o
            })
        })]
    })
})