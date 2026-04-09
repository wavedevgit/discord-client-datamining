/** chunk id: 717807 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    a = n(311907),
    r = n(988506),
    l = n(342494),
    s = n(793574),
    o = n(22007),
    d = n(287809),
    c = n(927578),
    u = n(161319),
    A = n(385327),
    _ = n(788868),
    h = n(652215),
    m = n(985018),
    g = n(174872);
let p = e => {
    let {
        targetElementRef: t
    } = e, n = (0, a.bG)([d.default], () => d.default.getCurrentUser()), p = !1 === c.Ay.isPremiumExactly(n, _.PremiumTypes.TIER_2), E = n?.premiumState?.premiumSource === r.fE.FRACTIONAL_NITRO && n?.premiumState.premiumSubscriptionType !== r.jK.TIER_2, I = !0 === (null == n || p || E) ? m.intl.string(m.t.E1ONHQ) : m.intl.string(m.t.CMKNhr);
    return (0, i.jsx)(l.AM, {
        targetElementRef: t,
        title: m.intl.string(m.t["V8J+16"]),
        body: I,
        graphic: {
            type: "image",
            src: g.A
        },
        badge: {
            type: "beta",
            variant: "expressive"
        },
        size: "md",
        alignmentStrategy: "edge",
        align: "top",
        position: "right",
        caretConfig: {
            align: "start"
        },
        actions: [{
            text: m.intl.string(m.t["CDdYB/"]),
            onClick: () => {
                (0, o.A)(h.BVt.NITRO_HOME), (0, u.u)({
                    analyticsLocations: [s.A.HOME_PAGE_PREMIUM_TAB]
                }), (0, A.Es)()
            }
        }],
        onRequestClose: A.Es
    })
}