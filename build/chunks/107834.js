/** chunk id: 107834, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(311907),
    r = n(582754),
    o = n(397927),
    d = n(820284),
    c = n(490415),
    u = n(736653),
    _ = n(742589),
    g = n(287809),
    m = n(927578),
    A = n(652215),
    h = n(788868),
    p = n(985018),
    x = n(187585);
let E = a.Ay.connectStores([g.default], () => ({
    user: g.default.getCurrentUser()
}))((0, c.A)(e => {
    let {
        isAuthenticated: t,
        user: n
    } = e, s = (0, m.TW)(n, h.PremiumTypes.TIER_2), a = (0, u.Ay)();
    return (0, i.jsx)(d.A, {
        section: A.JJy.NAVIGATION,
        children: (0, i.jsx)(o.NPJ, {
            theme: a,
            children: e => (0, i.jsxs)(_.A, {
                isAuthenticated: t,
                className: l()(e, {
                    [x.xD]: !s && !(0, r.Mw)(a),
                    [x.lO]: !s && (0, r.Mw)(a)
                }),
                role: "navigation",
                children: [(0, i.jsx)(_.A.Icon, {
                    icon: o.tvc,
                    "aria-hidden": !0,
                    color: s ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                }), (0, i.jsx)(_.A.Title, {
                    children: p.intl.string(p.t.Ipxkog)
                })]
            })
        })
    })
}))