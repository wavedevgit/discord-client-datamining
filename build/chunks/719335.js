/** Chunk was on 87916 **/
/** chunk id: 719335, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
});
var a = n(627968),
    i = n(64700),
    s = n(311907),
    r = n(421380),
    l = n(793574),
    o = n(688810),
    c = n(465794),
    d = n(721127),
    u = n(287809),
    p = n(954571),
    _ = n(927578),
    A = n(652215),
    m = n(339984),
    f = n(788868),
    g = n(985018),
    h = n(560207);

function x(e) {
    let {
        analyticsSection: t,
        type: n
    } = e, x = (0, s.bG)([u.default], () => u.default.getCurrentUser()), b = _.Ay.canUseAnimatedAvatar(x), N = _.Ay.canUsePremiumProfileCustomization(x), y = n === m.HL.BANNER && N || n === m.HL.AVATAR && b, {
        sourceAnalyticsLocations: j
    } = (0, o.Ay)(l.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (i.useEffect(() => {
            y || p.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: j
            })
        }, [y, t, j]), y) return null;
    let E = (0, a.jsx)(c.A, {
        className: h.__invalid_getNitroLink,
        size: r.$n.Sizes.SMALL,
        look: r.$n.Looks.LINK,
        color: r.$n.Colors.LINK,
        subscriptionTier: f.pe.TIER_2,
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
    return (0, a.jsx)(d.A, {
        reducedRightPadding: !0,
        className: h.C,
        text: g.intl.format(g.t.Og803x, {}),
        button: E
    })
}