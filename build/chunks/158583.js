/** chunk id: 158583 params = (module,exports,require) **/
n.d(t, {
    T: () => b
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(793574),
    o = n(688810),
    d = n(792656),
    c = n(976860),
    u = n(12901),
    _ = n(287809),
    m = n(975571),
    g = n(474090),
    A = n(181079),
    h = n(422258),
    x = n(957300),
    p = n(652215),
    T = n(788868),
    E = n(665606),
    S = n(985018);
let C = m.A.getArticleURL(p.MVz.FAVORITES_GUILD);

function f() {
    let e = (0, x.E)(e => e.enterPreview),
        {
            analyticsLocations: t
        } = (0, o.Ay)(r.A.USER_SETTINGS_FAVORITES),
        n = s.useCallback(() => {
            e(), (0, c.uh)(p.YYv), (0, u.default)()
        }, [e]);
    return (0, i.jsx)(o.f5, {
        value: t,
        children: (0, i.jsx)(a.D0$, {
            label: S.intl.string(E.default.OT1NK5),
            description: S.intl.format(E.default.GR2KOG, {
                helpCenterLink: C
            }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, i.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [(0, i.jsx)(a.Button, {
                    variant: "secondary",
                    text: S.intl.string(E.default["7WwLnr"]),
                    onClick: n
                }), (0, i.jsx)(d.A, {
                    subscriptionTier: T.pe.TIER_2,
                    defaultTextOverride: S.intl.string(E.default["20sYUU"])
                })]
            })
        })
    })
}

function b() {
    let e = (0, l.bG)([A.A], () => A.A.favoriteGuildEnabled);
    return (0, l.bG)([_.default], () => {
        let e = _.default.getCurrentUser();
        return null != e && g.Ay.isPremiumExactly(e, T.PremiumTypes.TIER_2)
    }) ? (0, i.jsx)(a.dOG, {
        checked: e,
        description: S.intl.format(E.default.GR2KOG, {
            helpCenterLink: C
        }),
        onChange: h.tV,
        label: S.intl.string(E.default.OT1NK5),
        badge: "beta"
    }) : (0, i.jsx)(f, {})
}