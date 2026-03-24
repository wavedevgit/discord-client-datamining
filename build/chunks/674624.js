/** chunk id: 674624 params = (module,exports,require) **/
n.d(t, {
    Ay: () => D,
    jW: () => L,
    w1: () => P
});
var i, s = n(627968),
    l = n(64700),
    a = n(367622),
    r = n(827734),
    o = n(582754),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    m = n(259065),
    _ = n(206835),
    g = n(976860),
    A = n(780964),
    x = n(358776),
    p = n(840065),
    h = n(112848),
    f = n(149757),
    T = n(920050),
    E = n(189024),
    S = n(652215),
    b = n(355097),
    C = n(985018),
    N = n(64514),
    v = n(121818),
    I = n(419455),
    j = n(288604),
    y = n(163635),
    O = n(345362),
    R = n(509442),
    L = ((i = {}).BEST_OF_NITRO = "bestof", i.APPEARANCE_STYLE = "appearance", i.UPGRADES = "upgrades", i.VIP_EXTRAS = "vip", i);
let P = [{
    id: "bestof",
    label: () => C.intl.string(C.t.q1u7nQ)
}, {
    id: "appearance",
    label: () => C.intl.string(C.t.CUnZkZ)
}, {
    id: "upgrades",
    label: () => C.intl.string(C.t.KC5q8v)
}, {
    id: "vip",
    label: () => C.intl.string(C.t.DjEAcv)
}];

function D() {
    let e = (0, d.DP)(),
        t = (0, h.Lh)(),
        n = (0, f.N)(t)?.standard ?? null,
        {
            analyticsLocations: i
        } = (0, u.Ay)(c.A.PREMIUM_MARKETING_PERK_CARD),
        L = (0, _.A)({
            scrollPosition: b._F.TRY_IT_OUT,
            analyticsLocations: i
        }),
        P = (0, l.useCallback)(() => {
            let e = (0, x.Ci)("openClientThemes");
            (0, p.openUserSettings)(e ? A.X.DISPLAY_THEME_CATEGORY : A.X.APPEARANCE_PANEL, {
                analyticsLocations: i
            })
        }, [i]),
        D = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(A.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                analyticsLocations: i
            })
        }, [i]),
        G = (0, l.useCallback)(() => {
            let e = (0, x.Ci)("openCustomAppSettings") ? A.X.DISPLAY_IN_APP_ICON_CATEGORY : A.X.APPEARANCE_IN_APP_ICON;
            (0, p.openUserSettings)(e, {
                analyticsLocations: i
            })
        }, [i]),
        M = (0, l.useCallback)(() => {
            (0, g.pX)(S.BVt.COLLECTIBLES_SHOP)
        }, []),
        k = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(A.X.SOUNDBOARD_CATEGORY, {
                analyticsLocations: i
            })
        }, [i]),
        U = (0, l.useCallback)(() => {
            (0, p.openUserSettings)(A.X.PROFILE_PANEL, {
                analyticsLocations: i
            }, () => (0, m.L)({
                analyticsLocations: i
            }))
        }, [i]),
        w = (0, E.A)(),
        V = (0, l.useMemo)(() => w.map(e => e?.id), [w]),
        B = (0, l.useMemo)(() => [{
            id: T.SERVER_BOOSTS_CARD_ID,
            title: C.intl.formatToPlainString(C.t.pWySes, {
                boostCount: 2,
                percentageOff: 30
            }),
            description: C.intl.formatToPlainString(C.t.cWFUoT, {
                boostCount: 2,
                percentageOff: 30
            }),
            subscriptionRequired: !0,
            ctaText: C.intl.string(C.t.jVcuVY),
            onCtaClick: D,
            primaryAsset: (0, s.jsx)(a.CIt, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: T.PROFILES_CARD_ID,
            title: C.intl.string(C.t.xDRab3),
            description: C.intl.string(C.t.yn6fWA),
            ctaText: C.intl.string(C.t.jVcuVY),
            onCtaClick: L,
            primaryAsset: (0, s.jsx)(a.R$P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "appearance"]
        }, {
            id: T.HD_VIDEO_CARD_ID,
            title: C.intl.string(C.t["/mQ5gg"]),
            description: C.intl.string(C.t["7WwAXh"]),
            primaryAsset: (0, s.jsx)(a.TMU, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: T.CLIENT_THEMES_CARD_ID,
            title: C.intl.string(C.t.acc6h6),
            description: C.intl.formatToPlainString(C.t.WQazjs, {
                themeCount: 20
            }),
            ctaText: C.intl.string(C.t.jVcuVY),
            onCtaClick: P,
            primaryAsset: R.A,
            categories: ["bestof", "appearance"]
        }, {
            id: T.MORE_EMOJIS_CARD_ID,
            title: C.intl.string(C.t.D8vIDT),
            description: C.intl.string(C.t.DRMecB),
            primaryAsset: (0, s.jsx)(a.nT5, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: T.LARGE_UPLOADS_CARD_ID,
            title: C.intl.string(C.t.nL1WZV),
            description: C.intl.formatToPlainString(C.t.k8LC1w, {
                maxSizeMb: 500
            }),
            primaryAsset: (0, s.jsx)(a.oYh, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: T.CUSTOM_APP_ICONS_CARD_ID,
            title: C.intl.string(C.t["GU+wqh"]),
            description: C.intl.string(C.t["1uPk1Z"]),
            ctaText: C.intl.string(C.t.jVcuVY),
            onCtaClick: G,
            primaryAsset: j.A,
            categories: ["appearance"]
        }, {
            id: T.ENTRANCE_SOUNDS_CARD_ID,
            title: C.intl.string(C.t.WJfCPi),
            description: C.intl.string(C.t.liQKJR),
            ctaText: C.intl.string(C.t.jVcuVY),
            onCtaClick: k,
            primaryAsset: y.A,
            categories: ["appearance"]
        }, {
            id: T.DISPLAY_NAME_STYLES_CARD_ID,
            title: C.intl.string(C.t.OLtTrt),
            description: C.intl.string(C.t["di/pXR"]),
            onCtaClick: U,
            primaryAsset: I.A,
            ctaText: C.intl.string(C.t.jVcuVY),
            categories: ["appearance"]
        }, {
            id: T.CUSTOM_SOUNDS_CARD_ID,
            title: C.intl.string(C.t["Cu/oFd"]),
            description: C.intl.string(C.t.czj2aa),
            primaryAsset: (0, s.jsx)(a.WPL, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: T.SPECIAL_STICKERS_CARD_ID,
            title: C.intl.string(C.t.MQoVeb),
            description: C.intl.string(C.t.HGCLZX),
            primaryAsset: O.A,
            categories: ["upgrades"]
        }, {
            id: T.SUPER_REACTIONS_CARD_ID,
            title: C.intl.string(C.t.qERvAA),
            description: C.intl.string(C.t.WkUWzx),
            primaryAsset: (0, s.jsx)(a.Z8w, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: T.VIDEO_BACKGROUNDS_CARD_ID,
            title: C.intl.string(C.t.ssVDYQ),
            description: C.intl.string(C.t.aUSRMa),
            primaryAsset: (0, o.Mw)(e) ? N : v,
            categories: ["upgrades"]
        }, {
            id: T.EARLY_ACCESS_CARD_ID,
            title: C.intl.string(C.t["g/KRY6"]),
            description: C.intl.string(C.t.JzAmJc),
            primaryAsset: (0, s.jsx)(a.AxI, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: T.BADGE_CARD_ID,
            title: C.intl.string(C.t.Bn3CtB),
            description: C.intl.string(C.t.LmENwu),
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
            id: T.SPECIAL_MEMBER_PRICING_CARD_ID,
            title: C.intl.string(C.t["MTD+7w"]),
            description: C.intl.string(C.t.Bhs0s6),
            ctaText: C.intl.string(C.t.dBJVnZ),
            onCtaClick: M,
            primaryAsset: (0, s.jsx)(a.D8b, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: T.PERMADECOS_CARD_ID,
            title: C.intl.string(C.t.L14NZN),
            description: C.intl.string(C.t.eCZkAI),
            primaryAsset: (0, s.jsx)(a.u7P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }], [e, n, L, P, D, G, M, k, U]);
    return (0, l.useMemo)(() => B.filter(e => null != e && !V.includes(e.id)), [B, V])
}