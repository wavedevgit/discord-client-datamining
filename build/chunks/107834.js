/** chunk id: 107834 params = (module,exports,require) **/
n.d(t, {
    A: () => T
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(311907),
    a = n(582754),
    o = n(397927),
    d = n(820284),
    c = n(490415),
    u = n(736653),
    _ = n(742589),
    m = n(287809),
    g = n(927578),
    A = n(652215),
    h = n(788868),
    x = n(985018),
    p = n(463955);
let T = r.Ay.connectStores([m.default], () => ({
    user: m.default.getCurrentUser()
}))((0, c.A)(e => {
    let {
        isAuthenticated: t,
        user: n
    } = e, s = (0, g.TW)(n, h.PremiumTypes.TIER_2), r = (0, u.Ay)();
    return (0, i.jsx)(d.A, {
        section: A.JJy.NAVIGATION,
        children: (0, i.jsx)(o.NPJ, {
            theme: r,
            children: e => (0, i.jsxs)(_.A, {
                isAuthenticated: t,
                className: l()(e, {
                    [p.xD]: !s && !(0, a.Mw)(r),
                    [p.lO]: !s && (0, a.Mw)(r)
                }),
                role: "navigation",
                children: [(0, i.jsx)(_.A.Icon, {
                    icon: o.tvc,
                    "aria-hidden": !0,
                    color: s ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                }), (0, i.jsx)(_.A.Title, {
                    children: x.intl.string(x.t.Ipxkog)
                })]
            })
        })
    })
}))