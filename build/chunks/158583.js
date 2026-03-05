/** chunk id: 158583 params = (module,exports,require) **/
n.d(t, {
    T: () => C
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
    g = n(474090),
    m = n(181079),
    A = n(422258),
    h = n(957300),
    p = n(652215),
    x = n(788868),
    E = n(525736),
    T = n(985018);

function S() {
    let e = (0, h.E)(e => e.enterPreview),
        {
            analyticsLocations: t
        } = (0, o.Ay)(r.A.USER_SETTINGS_FAVORITES),
        n = s.useCallback(() => {
            e(), (0, c.uh)(p.YYv), (0, u.default)()
        }, [e]);
    return (0, i.jsx)(o.f5, {
        value: t,
        children: (0, i.jsx)(a.D0$, {
            label: T.intl.string(E.default["0h2CcM"]),
            description: T.intl.string(E.default.IF7iE0),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, i.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [(0, i.jsx)(a.Button, {
                    variant: "secondary",
                    text: T.intl.string(E.default.v7GajN),
                    onClick: n
                }), (0, i.jsx)(d.A, {
                    subscriptionTier: x.pe.TIER_2,
                    defaultTextOverride: T.intl.string(T.t.mr4K7D)
                })]
            })
        })
    })
}

function C() {
    let e = (0, l.bG)([m.A], () => m.A.favoriteGuildEnabled);
    return (0, l.bG)([_.default], () => {
        let e = _.default.getCurrentUser();
        return null != e && g.Ay.isPremiumExactly(e, x.PremiumTypes.TIER_2)
    }) ? (0, i.jsx)(a.dOG, {
        checked: e,
        description: T.intl.string(E.default.IF7iE0),
        onChange: A.tV,
        label: T.intl.string(E.default["0h2CcM"]),
        badge: "beta"
    }) : (0, i.jsx)(S, {})
}