/** Chunk was on 5606 **/
/** chunk id: 107834, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(311907),
    a = n(582754),
    o = n(397927),
    c = n(820284),
    d = n(490415),
    u = n(736653),
    p = n(742589),
    _ = n(287809),
    m = n(927578),
    g = n(652215),
    f = n(788868),
    b = n(985018),
    h = n(187585);
let A = s.Ay.connectStores([_.default], () => ({
    user: _.default.getCurrentUser()
}))((0, d.A)(e => {
    let {
        isAuthenticated: t,
        user: n
    } = e, i = (0, m.TW)(n, f.PremiumTypes.TIER_2), s = (0, u.Ay)();
    return (0, r.jsx)(c.A, {
        section: g.JJy.NAVIGATION,
        children: (0, r.jsx)(o.NPJ, {
            theme: s,
            children: e => (0, r.jsxs)(p.A, {
                isAuthenticated: t,
                className: l()(e, {
                    [h.xD]: !i && !(0, a.Mw)(s),
                    [h.lO]: !i && (0, a.Mw)(s)
                }),
                role: "navigation",
                children: [(0, r.jsx)(p.A.Icon, {
                    icon: o.tvc,
                    "aria-hidden": !0,
                    color: i ? void 0 : o.LU0.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                }), (0, r.jsx)(p.A.Title, {
                    children: b.intl.string(b.t.Ipxkog)
                })]
            })
        })
    })
}))