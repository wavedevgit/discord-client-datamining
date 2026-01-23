/** Chunk was on 21738 **/
/** chunk id: 717807, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968),
    i = n(311907),
    l = n(988506),
    a = n(342494),
    s = n(793574),
    o = n(22007),
    c = n(287809),
    u = n(927578),
    d = n(161319),
    p = n(385327),
    h = n(788868),
    g = n(652215),
    f = n(985018),
    m = n(174872);
let A = e => {
    var t;
    let {
        targetElementRef: n
    } = e, A = (0, i.bG)([c.default], () => c.default.getCurrentUser()), _ = !1 === u.Ay.isPremiumExactly(A, h.PremiumTypes.TIER_2), b = (null == A || null == (t = A.premiumState) ? void 0 : t.premiumSource) === l.fE.FRACTIONAL_NITRO && (null == A ? void 0 : A.premiumState.premiumSubscriptionType) !== l.jK.TIER_2, E = !0 === (null == A || _ || b) ? f.intl.string(f.t.E1ONHQ) : f.intl.string(f.t.CMKNhr);
    return (0, r.jsx)(a.AM, {
        targetElementRef: n,
        title: f.intl.string(f.t["V8J+16"]),
        body: E,
        graphic: {
            type: "image",
            src: m.A
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
            text: f.intl.string(f.t["CDdYB/"]),
            onClick: () => {
                (0, o.A)(g.BVt.NITRO_HOME), (0, d.uE)({
                    analyticsLocations: [s.A.HOME_PAGE_PREMIUM_TAB]
                }), (0, p.Es)()
            }
        }],
        onRequestClose: p.Es
    })
}