/** chunk id: 719335 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var a = n(627968),
    i = n(64700),
    r = n(311907),
    o = n(421380),
    s = n(793574),
    l = n(688810),
    c = n(725807),
    _ = n(721127),
    d = n(287809),
    A = n(954571),
    u = n(927578),
    g = n(652215),
    m = n(339984),
    h = n(788868),
    L = n(985018),
    x = n(679962);

function C(e) {
    let {
        analyticsSection: t,
        type: n
    } = e, C = (0, r.bG)([d.default], () => d.default.getCurrentUser()), f = u.Ay.canUseAnimatedAvatar(C), N = u.Ay.canUsePremiumProfileCustomization(C), R = n === m.HL.BANNER && N || n === m.HL.AVATAR && f, {
        sourceAnalyticsLocations: y
    } = (0, l.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (i.useEffect(() => {
            R || A.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: y
            })
        }, [R, t, y]), R) return null;
    let p = (0, a.jsx)(c.A, {
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
    return (0, a.jsx)(_.A, {
        reducedRightPadding: !0,
        className: x.C,
        text: L.intl.format(L.t.Og803x, {}),
        button: p
    })
}