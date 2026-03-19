/** chunk id: 674624 params = (module,exports,require) **/
n.d(t, {
    Ay: () => P,
    jW: () => L,
    w1: () => D
});
var i, s = n(627968),
    l = n(64700),
    a = n(367622),
    r = n(827734),
    o = n(582754),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    _ = n(259065),
    m = n(206835),
    g = n(976860),
    A = n(780964),
    x = n(358776),
    h = n(840065),
    p = n(112848),
    T = n(149757),
    E = n(920050),
    S = n(189024),
    C = n(652215),
    f = n(355097),
    N = n(985018),
    I = n(64514),
    b = n(121818),
    v = n(419455),
    j = n(288604),
    y = n(163635),
    O = n(345362),
    R = n(509442),
    L = ((i = {}).BEST_OF_NITRO = "bestof", i.APPEARANCE_STYLE = "appearance", i.UPGRADES = "upgrades", i.VIP_EXTRAS = "vip", i);
let D = [{
    id: "bestof",
    label: () => N.intl.string(N.t.q1u7nQ)
}, {
    id: "appearance",
    label: () => N.intl.string(N.t.CUnZkZ)
}, {
    id: "upgrades",
    label: () => N.intl.string(N.t.KC5q8v)
}, {
    id: "vip",
    label: () => N.intl.string(N.t.DjEAcv)
}];

function P() {
    let e = (0, d.DP)(),
        t = (0, p.Lh)(),
        n = (0, T.N)(t)?.standard ?? null,
        {
            analyticsLocations: i
        } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        L = (0, m.A)({
            scrollPosition: f._F.TRY_IT_OUT,
            analyticsLocations: i
        }),
        D = (0, l.useCallback)(() => {
            let e = (0, x.Ci)("openClientThemes");
            (0, h.openUserSettings)(e ? A.X.DISPLAY_THEME_CATEGORY : A.X.APPEARANCE_PANEL, {
                analyticsLocations: i
            })
        }, [i]),
        P = (0, l.useCallback)(() => {
            (0, h.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                analyticsLocations: i
            })
        }, [i]),
        G = (0, l.useCallback)(() => {
            let e = (0, x.Ci)("openCustomAppSettings") ? A.X.DISPLAY_IN_APP_ICON_CATEGORY : A.X.APPEARANCE_IN_APP_ICON;
            (0, h.openUserSettings)(e, {
                analyticsLocations: i
            })
        }, [i]),
        M = (0, l.useCallback)(() => {
            (0, g.pX)(C.BVt.COLLECTIBLES_SHOP)
        }, []),
        U = (0, l.useCallback)(() => {
            (0, h.openUserSettings)(A.X.SOUNDBOARD_CATEGORY, {
                analyticsLocations: i
            })
        }, [i]),
        k = (0, l.useCallback)(() => {
            (0, h.openUserSettings)(A.X.PROFILE_PANEL, {
                analyticsLocations: i
            }, () => (0, _.L)({
                analyticsLocations: i
            }))
        }, [i]),
        V = (0, S.A)(),
        w = (0, l.useMemo)(() => V.map(e => e?.id), [V]),
        B = (0, l.useMemo)(() => [{
            id: E.SERVER_BOOSTS_CARD_ID,
            title: N.intl.formatToPlainString(N.t.pWySes, {
                boostCount: 2,
                percentageOff: 30
            }),
            description: N.intl.formatToPlainString(N.t.cWFUoT, {
                boostCount: 2,
                percentageOff: 30
            }),
            subscriptionRequired: !0,
            ctaText: N.intl.string(N.t.jVcuVY),
            onCtaClick: P,
            primaryAsset: (0, s.jsx)(a.CIt, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: E.PROFILES_CARD_ID,
            title: N.intl.string(N.t.xDRab3),
            description: N.intl.string(N.t.yn6fWA),
            ctaText: N.intl.string(N.t.jVcuVY),
            onCtaClick: L,
            primaryAsset: (0, s.jsx)(a.R$P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "appearance"]
        }, {
            id: E.HD_VIDEO_CARD_ID,
            title: N.intl.string(N.t["/mQ5gg"]),
            description: N.intl.string(N.t["7WwAXh"]),
            primaryAsset: (0, s.jsx)(a.TMU, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: E.CLIENT_THEMES_CARD_ID,
            title: N.intl.string(N.t.acc6h6),
            description: N.intl.formatToPlainString(N.t.WQazjs, {
                themeCount: 20
            }),
            ctaText: N.intl.string(N.t.jVcuVY),
            onCtaClick: D,
            primaryAsset: R.A,
            categories: ["bestof", "appearance"]
        }, {
            id: E.MORE_EMOJIS_CARD_ID,
            title: N.intl.string(N.t.D8vIDT),
            description: N.intl.string(N.t.DRMecB),
            primaryAsset: (0, s.jsx)(a.nT5, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: E.LARGE_UPLOADS_CARD_ID,
            title: N.intl.string(N.t.nL1WZV),
            description: N.intl.formatToPlainString(N.t.k8LC1w, {
                maxSizeMb: 500
            }),
            primaryAsset: (0, s.jsx)(a.oYh, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: E.CUSTOM_APP_ICONS_CARD_ID,
            title: N.intl.string(N.t["GU+wqh"]),
            description: N.intl.string(N.t["1uPk1Z"]),
            ctaText: N.intl.string(N.t.jVcuVY),
            onCtaClick: G,
            primaryAsset: j.A,
            categories: ["appearance"]
        }, {
            id: E.ENTRANCE_SOUNDS_CARD_ID,
            title: N.intl.string(N.t.WJfCPi),
            description: N.intl.string(N.t.liQKJR),
            ctaText: N.intl.string(N.t.jVcuVY),
            onCtaClick: U,
            primaryAsset: y.A,
            categories: ["appearance"]
        }, {
            id: E.DISPLAY_NAME_STYLES_CARD_ID,
            title: N.intl.string(N.t.OLtTrt),
            description: N.intl.string(N.t["di/pXR"]),
            onCtaClick: k,
            primaryAsset: v.A,
            ctaText: N.intl.string(N.t.jVcuVY),
            categories: ["appearance"]
        }, {
            id: E.CUSTOM_SOUNDS_CARD_ID,
            title: N.intl.string(N.t["Cu/oFd"]),
            description: N.intl.string(N.t.czj2aa),
            primaryAsset: (0, s.jsx)(a.WPL, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: E.SPECIAL_STICKERS_CARD_ID,
            title: N.intl.string(N.t.MQoVeb),
            description: N.intl.string(N.t.HGCLZX),
            primaryAsset: O.A,
            categories: ["upgrades"]
        }, {
            id: E.SUPER_REACTIONS_CARD_ID,
            title: N.intl.string(N.t.qERvAA),
            description: N.intl.string(N.t.WkUWzx),
            primaryAsset: (0, s.jsx)(a.Z8w, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: E.VIDEO_BACKGROUNDS_CARD_ID,
            title: N.intl.string(N.t.ssVDYQ),
            description: N.intl.string(N.t.aUSRMa),
            primaryAsset: (0, o.Mw)(e) ? I : b,
            categories: ["upgrades"]
        }, {
            id: E.EARLY_ACCESS_CARD_ID,
            title: N.intl.string(N.t["g/KRY6"]),
            description: N.intl.string(N.t.JzAmJc),
            primaryAsset: (0, s.jsx)(a.AxI, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: E.BADGE_CARD_ID,
            title: N.intl.string(N.t.Bn3CtB),
            description: N.intl.string(N.t.LmENwu),
            subscriptionRequired: !0,
            primaryAsset: null != n ? (0, s.jsx)("img", {
                src: n,
                alt: "",
                width: 160,
                draggable: "false"
            }) : (0, s.jsx)(a.vXC, {
                color: r.A.colors.ICON_MUTED,
                "aria-hidden": !0
            }),
            categories: ["vip"]
        }, {
            id: E.SPECIAL_MEMBER_PRICING_CARD_ID,
            title: N.intl.string(N.t["MTD+7w"]),
            description: N.intl.string(N.t.Bhs0s6),
            ctaText: N.intl.string(N.t.dBJVnZ),
            onCtaClick: M,
            primaryAsset: (0, s.jsx)(a.D8b, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: E.PERMADECOS_CARD_ID,
            title: N.intl.string(N.t.L14NZN),
            description: N.intl.string(N.t.eCZkAI),
            primaryAsset: (0, s.jsx)(a.u7P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }], [e, n, L, D, P, G, M, U, k]);
    return (0, l.useMemo)(() => B.filter(e => null != e && !w.includes(e.id)), [B, w])
}