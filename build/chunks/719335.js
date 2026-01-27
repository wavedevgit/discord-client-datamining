/** Chunk was on 87916 **/
/** chunk id: 719335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => N
});
var a = n(627968),
    i = n(64700),
    l = n(311907),
    r = n(421380),
    s = n(793574),
    o = n(688810),
    c = n(465794),
    d = n(721127),
    u = n(287809),
    _ = n(954571),
    A = n(927578),
    f = n(652215),
    g = n(339984),
    m = n(788868),
    p = n(985018),
    x = n(560207);

function N(e) {
    let {
        analyticsSection: t,
        type: n
    } = e, N = (0, l.bG)([u.default], () => u.default.getCurrentUser()), b = A.Ay.canUseAnimatedAvatar(N), h = A.Ay.canUsePremiumProfileCustomization(N), y = n === g.HL.BANNER && h || n === g.HL.AVATAR && b, {
        sourceAnalyticsLocations: E
    } = (0, o.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (i.useEffect(() => {
            y || _.default.track(f.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: E
            })
        }, [y, t, E]), y) return null;
    let R = (0, a.jsx)(c.A, {
        className: x.__invalid_getNitroLink,
        size: r.$n.Sizes.SMALL,
        look: r.$n.Looks.LINK,
        color: r.$n.Colors.LINK,
        subscriptionTier: m.pe.TIER_2,
        textOptions: {
            textOverride: p.intl.format(p.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: f.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, a.jsx)(d.A, {
        reducedRightPadding: !0,
        className: x.C,
        text: p.intl.format(p.t.Og803x, {}),
        button: R
    })
}