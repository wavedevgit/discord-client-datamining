/** Chunk was on 94073 **/
/** chunk id: 719335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    a = n(64700),
    o = n(311907),
    i = n(421380),
    l = n(793574),
    s = n(688810),
    c = n(465794),
    u = n(721127),
    _ = n(287809),
    d = n(954571),
    f = n(927578),
    A = n(652215),
    b = n(339984),
    m = n(788868),
    p = n(985018),
    y = n(560207);

function g(e) {
    let {
        analyticsSection: t,
        type: n
    } = e, g = (0, o.bG)([_.default], () => _.default.getCurrentUser()), x = f.Ay.canUseAnimatedAvatar(g), v = f.Ay.canUsePremiumProfileCustomization(g), E = n === b.HL.BANNER && v || n === b.HL.AVATAR && x, {
        sourceAnalyticsLocations: L
    } = (0, s.Ay)(l.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (a.useEffect(() => {
            E || d.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: L
            })
        }, [E, t, L]), E) return null;
    let N = (0, r.jsx)(c.A, {
        className: y.__invalid_getNitroLink,
        size: i.$n.Sizes.SMALL,
        look: i.$n.Looks.LINK,
        color: i.$n.Colors.LINK,
        subscriptionTier: m.pe.TIER_2,
        textOptions: {
            textOverride: p.intl.format(p.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: A.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, r.jsx)(u.A, {
        reducedRightPadding: !0,
        className: y.C,
        text: p.intl.format(p.t.Og803x, {}),
        button: N
    })
}