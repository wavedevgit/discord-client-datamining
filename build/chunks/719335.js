/** chunk id: 719335, original params: e,t,a (module,exports,require) **/
a.d(t, {
    A: () => x
});
var n = a(627968),
    i = a(64700),
    c = a(311907),
    o = a(421380),
    r = a(793574),
    s = a(688810),
    l = a(465794),
    d = a(721127),
    u = a(287809),
    p = a(954571),
    _ = a(927578),
    m = a(652215),
    A = a(339984),
    f = a(788868),
    g = a(985018),
    h = a(560207);

function x(e) {
    let {
        analyticsSection: t,
        type: a
    } = e, x = (0, c.bG)([u.default], () => u.default.getCurrentUser()), b = _.Ay.canUseAnimatedAvatar(x), N = _.Ay.canUsePremiumProfileCustomization(x), y = a === A.HL.BANNER && N || a === A.HL.AVATAR && b, {
        sourceAnalyticsLocations: E
    } = (0, s.Ay)(r.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (i.useEffect(() => {
            y || p.default.track(m.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: E
            })
        }, [y, t, E]), y) return null;
    let j = (0, n.jsx)(l.A, {
        className: h.__invalid_getNitroLink,
        size: o.$n.Sizes.SMALL,
        look: o.$n.Looks.LINK,
        color: o.$n.Colors.LINK,
        subscriptionTier: f.pe.TIER_2,
        textOptions: {
            textOverride: g.intl.format(g.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: m.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, n.jsx)(d.A, {
        reducedRightPadding: !0,
        className: h.C,
        text: g.intl.format(g.t.Og803x, {}),
        button: j
    })
}