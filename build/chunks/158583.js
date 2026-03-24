/** chunk id: 158583 params = (module,exports,require) **/
n.d(t, {
    T: () => v
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
    m = n(287809),
    _ = n(975571),
    g = n(474090),
    x = n(181079),
    A = n(422258),
    h = n(668267),
    p = n(93055),
    f = n(652215),
    T = n(788868),
    S = n(665606),
    E = n(985018);
let b = _.A.getArticleURL(f.MVz.FAVORITES_GUILD);

function C() {
    let {
        analyticsLocations: e
    } = (0, o.Ay)(r.A.USER_SETTINGS_FAVORITES), t = s.useCallback(() => {
        (0, h.mv)("settings_page"), (0, c.uh)(f.YYv), (0, u.default)()
    }, []);
    return (0, i.jsx)(o.f5, {
        value: e,
        children: (0, i.jsx)(a.D0$, {
            label: E.intl.string(S.default.OT1NK5),
            description: E.intl.format(S.default.GR2KOG, {
                helpCenterLink: b
            }),
            layout: "horizontal-responsive",
            badge: "beta",
            children: (0, i.jsxs)(a.BJc, {
                direction: "horizontal",
                gap: 8,
                fullWidth: !1,
                children: [(0, i.jsx)(a.Button, {
                    variant: "secondary",
                    text: E.intl.string(S.default["7WwLnr"]),
                    onClick: t
                }), (0, i.jsx)(d.A, {
                    subscriptionTier: T.pe.TIER_2,
                    defaultTextOverride: E.intl.string(S.default["20sYUU"])
                })]
            })
        })
    })
}

function v() {
    let e = (0, l.bG)([x.A], () => x.A.favoriteGuildEnabled),
        t = (0, l.bG)([m.default], () => {
            let e = m.default.getCurrentUser();
            return null != e && g.Ay.isPremiumExactly(e, T.PremiumTypes.TIER_2)
        }),
        n = (0, p.DZ)(),
        r = s.useCallback(e => {
            (0, A.tV)(e, "settings_page"), !e && n && (0, c.pX)(f.BVt.ME)
        }, [n]);
    return t ? (0, i.jsx)(a.dOG, {
        checked: e,
        description: E.intl.format(S.default.GR2KOG, {
            helpCenterLink: b
        }),
        onChange: r,
        label: E.intl.string(S.default.OT1NK5),
        badge: "beta"
    }) : (0, i.jsx)(C, {})
}