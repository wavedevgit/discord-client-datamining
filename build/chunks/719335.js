/** chunk id: 719335 params = (module,exports,require) **/
i.d(e, {
    A: () => b
});
var a = i(627968),
    n = i(64700),
    r = i(311907),
    s = i(421380),
    l = i(793574),
    o = i(688810),
    d = i(725807),
    c = i(721127),
    u = i(287809),
    _ = i(954571),
    h = i(927578),
    g = i(652215),
    m = i(339984),
    x = i(788868),
    A = i(985018),
    f = i(582602);

function b(t) {
    let {
        analyticsSection: e,
        type: i
    } = t, b = (0, r.bG)([u.default], () => u.default.getCurrentUser()), v = h.Ay.canUseAnimatedAvatar(b), N = h.Ay.canUsePremiumProfileCustomization(b), p = i === m.HL.BANNER && N || i === m.HL.AVATAR && v, {
        sourceAnalyticsLocations: y
    } = (0, o.Ay)(l.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (n.useEffect(() => {
            p || _.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                type: e,
                location_stack: y
            })
        }, [p, e, y]), p) return null;
    let L = (0, a.jsx)(d.A, {
        className: f.__invalid_getNitroLink,
        size: s.$n.Sizes.SMALL,
        look: s.$n.Looks.LINK,
        color: s.$n.Colors.LINK,
        subscriptionTier: x.pe.TIER_2,
        textOptions: {
            textOverride: A.intl.format(A.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: e,
            object: g.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, a.jsx)(c.A, {
        reducedRightPadding: !0,
        className: f.C,
        text: A.intl.format(A.t.Og803x, {}),
        button: L
    })
}