/** chunk id: 719335 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968),
    a = n(64700),
    r = n(311907),
    o = n(421380),
    s = n(793574),
    l = n(688810),
    c = n(465794),
    _ = n(721127),
    d = n(287809),
    A = n(954571),
    u = n(927578),
    g = n(652215),
    m = n(339984),
    h = n(788868),
    L = n(985018),
    x = n(731785);

function C(e) {
    let {
        analyticsSection: t,
        type: n
    } = e, C = (0, r.bG)([d.default], () => d.default.getCurrentUser()), N = u.Ay.canUseAnimatedAvatar(C), f = u.Ay.canUsePremiumProfileCustomization(C), R = n === m.HL.BANNER && f || n === m.HL.AVATAR && N, {
        sourceAnalyticsLocations: p
    } = (0, l.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (a.useEffect(() => {
            R || A.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: p
            })
        }, [R, t, p]), R) return null;
    let E = (0, i.jsx)(c.A, {
        className: x.__invalid_getNitroLink,
        size: o.$n.Sizes.SMALL,
        look: o.$n.Looks.LINK,
        color: o.$n.Colors.LINK,
        subscriptionTier: h.pe.TIER_2,
        textOptions: {
            textOverride: L.intl.format(L.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: g.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, i.jsx)(_.A, {
        reducedRightPadding: !0,
        className: x.C,
        text: L.intl.format(L.t.Og803x, {}),
        button: E
    })
}