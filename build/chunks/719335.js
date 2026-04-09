/** chunk id: 719335 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(627968),
    i = n(64700),
    r = n(311907),
    o = n(421380),
    s = n(793574),
    c = n(688810),
    l = n(725807),
    _ = n(721127),
    d = n(287809),
    u = n(954571),
    h = n(927578),
    A = n(652215),
    g = n(339984),
    m = n(788868),
    x = n(985018),
    b = n(679962);

function f(e) {
    let {
        analyticsSection: t,
        type: n
    } = e, f = (0, r.bG)([d.default], () => d.default.getCurrentUser()), p = h.Ay.canUseAnimatedAvatar(f), N = h.Ay.canUsePremiumProfileCustomization(f), v = n === g.HL.BANNER && N || n === g.HL.AVATAR && p, {
        sourceAnalyticsLocations: y
    } = (0, c.Ay)(s.A.PREMIUM_PREVIEW_UPSELL_HEADER);
    if (i.useEffect(() => {
            v || u.default.track(A.HAw.PREMIUM_UPSELL_VIEWED, {
                type: t,
                location_stack: y
            })
        }, [v, t, y]), v) return null;
    let C = (0, a.jsx)(l.A, {
        className: b.__invalid_getNitroLink,
        size: o.$n.Sizes.SMALL,
        look: o.$n.Looks.LINK,
        color: o.$n.Colors.LINK,
        subscriptionTier: m.pe.TIER_2,
        textOptions: {
            textOverride: x.intl.format(x.t["944tDv"], {})
        },
        showIcon: !1,
        premiumModalAnalyticsLocation: {
            section: t,
            object: A.ZSU.BUTTON_CTA
        },
        disableShine: !0
    });
    return (0, a.jsx)(_.A, {
        reducedRightPadding: !0,
        className: b.C,
        text: x.intl.format(x.t.Og803x, {}),
        button: C
    })
}