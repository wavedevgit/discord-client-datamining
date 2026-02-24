/** chunk id: 719335, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => x
});
var n = a(627968),
    i = a(64700),
    s = a(311907),
    l = a(421380),
    r = a(793574),
    o = a(688810),
    c = a(465794),
    d = a(721127),
    u = a(287809),
    p = a(954571),
    _ = a(927578),
    A = a(652215),
    m = a(339984),
    h = a(788868),
    g = a(985018),
    f = a(731785);

function x(e) {
    let {
        analyticsSection: t,
        type: a
    } = e, x = (0, s.bG)([u.default], () => u.default.getCurrentUser()), N = _.Ay.canUseAnimatedAvatar(x), b = _.Ay.canUsePremiumProfileCustomization(x), E = a === m.HL.BANNER && b || a === m.HL.AVATAR && N, {
        sourceAnalyticsLocations: R
    } = (0, o.Ay)(r.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (i.useEffect(() => {
            E || p.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: R
            })
        }, [E, t, R]), E) return null;
    let y = (0, n.jsx)(c.A, {
        className: f.__invalid_getNitroLink,
        size: l.$n.Sizes.SMALL,
        look: l.$n.Looks.LINK,
        color: l.$n.Colors.LINK,
        subscriptionTier: h.pe.TIER_2,
        textOptions: {
            textOverride: g.intl.format(g.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: A.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, n.jsx)(d.A, {
        reducedRightPadding: !0,
        className: f.C,
        text: g.intl.format(g.t.Og803x, {}),
        button: y
    })
}