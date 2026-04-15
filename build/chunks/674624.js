/** chunk id: 674624 params = (module,exports,require) **/
n.d(t, {
    Ay: () => U,
    jW: () => D,
    w1: () => L
});
var i, r = n(627968),
    a = n(64700),
    s = n(367622),
    l = n(827734),
    o = n(582754),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    _ = n(259065),
    m = n(206835),
    p = n(976860),
    g = n(591179),
    A = n(462463),
    f = n(780964),
    h = n(358776),
    b = n(858897),
    x = n(112848),
    C = n(149757),
    N = n(920050),
    R = n(189024),
    v = n(652215),
    E = n(355097),
    I = n(985018),
    T = n(64514),
    j = n(121818),
    S = n(419455),
    M = n(288604),
    P = n(163635),
    y = n(345362),
    O = n(509442),
    D = ((i = {}).BEST_OF_NITRO = "bestof", i.APPEARANCE_STYLE = "appearance", i.UPGRADES = "upgrades", i.VIP_EXTRAS = "vip", i);
let L = [{
    id: "bestof",
    label: () => I.intl.string(I.t.q1u7nQ)
}, {
    id: "appearance",
    label: () => I.intl.string(I.t.CUnZkZ)
}, {
    id: "upgrades",
    label: () => I.intl.string(I.t.KC5q8v)
}, {
    id: "vip",
    label: () => I.intl.string(I.t.DjEAcv)
}];

function U() {
    let e = (0, c.DP)(),
        t = (0, g.X)("useFavoritesPerkCards"),
        n = (0, x.Lh)(),
        i = (0, C.N)(n)?.standard ?? null,
        {
            analyticsLocations: D
        } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        L = (0, m.A)({
            scrollPosition: E._F.TRY_IT_OUT,
            analyticsLocations: D
        }),
        U = (0, a.useCallback)(() => {
            let e = (0, h.Ci)("openClientThemes");
            (0, b.openUserSettings)(e ? f.X.DISPLAY_THEME_CATEGORY : f.X.APPEARANCE_PANEL, {
                analyticsLocations: D
            })
        }, [D]),
        k = (0, a.useCallback)(() => {
            (0, b.openUserSettings)(f.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                analyticsLocations: D
            })
        }, [D]),
        B = (0, a.useCallback)(() => {
            let e = (0, h.Ci)("openCustomAppSettings") ? f.X.DISPLAY_IN_APP_ICON_CATEGORY : f.X.APPEARANCE_IN_APP_ICON;
            (0, b.openUserSettings)(e, {
                analyticsLocations: D
            })
        }, [D]),
        G = (0, a.useCallback)(() => {
            (0, p.pX)(v.BVt.COLLECTIBLES_SHOP)
        }, []),
        w = (0, a.useCallback)(() => {
            (0, b.openUserSettings)(f.X.SOUNDBOARD_CATEGORY, {
                analyticsLocations: D
            })
        }, [D]),
        V = (0, A.A)({
            analyticsLocations: D
        }),
        H = (0, a.useCallback)(() => {
            (0, b.openUserSettings)(f.X.PROFILE_PANEL, {
                analyticsLocations: D
            }, () => (0, _.L)({
                analyticsLocations: D
            }))
        }, [D]),
        W = (0, R.A)(),
        F = (0, a.useMemo)(() => W.map(e => e?.id), [W]),
        Y = (0, a.useMemo)(() => [{
            id: N.SERVER_BOOSTS_CARD_ID,
            title: I.intl.formatToPlainString(I.t.pWySes, {
                boostCount: 2,
                percentageOff: 30
            }),
            description: I.intl.formatToPlainString(I.t.cWFUoT, {
                boostCount: 2,
                percentageOff: 30
            }),
            subscriptionRequired: !0,
            ctaText: I.intl.string(I.t.jVcuVY),
            onCtaClick: k,
            primaryAsset: (0, r.jsx)(s.CIt, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: N.PROFILES_CARD_ID,
            title: I.intl.string(I.t.xDRab3),
            description: I.intl.string(I.t.yn6fWA),
            ctaText: I.intl.string(I.t.jVcuVY),
            onCtaClick: t ? V : L,
            primaryAsset: (0, r.jsx)(s.R$P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "appearance"]
        }, {
            id: N.HD_VIDEO_CARD_ID,
            title: I.intl.string(I.t["/mQ5gg"]),
            description: I.intl.string(I.t["7WwAXh"]),
            primaryAsset: (0, r.jsx)(s.TMU, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: N.CLIENT_THEMES_CARD_ID,
            title: I.intl.string(I.t.acc6h6),
            description: I.intl.formatToPlainString(I.t.WQazjs, {
                themeCount: 20
            }),
            ctaText: I.intl.string(I.t.jVcuVY),
            onCtaClick: U,
            primaryAsset: O.A,
            categories: ["bestof", "appearance"]
        }, {
            id: N.MORE_EMOJIS_CARD_ID,
            title: I.intl.string(I.t.D8vIDT),
            description: I.intl.string(I.t.DRMecB),
            primaryAsset: (0, r.jsx)(s.nT5, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: N.LARGE_UPLOADS_CARD_ID,
            title: I.intl.string(I.t.nL1WZV),
            description: I.intl.formatToPlainString(I.t.k8LC1w, {
                maxSizeMb: 500
            }),
            primaryAsset: (0, r.jsx)(s.oYh, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: N.CUSTOM_APP_ICONS_CARD_ID,
            title: I.intl.string(I.t["GU+wqh"]),
            description: I.intl.string(I.t["1uPk1Z"]),
            ctaText: I.intl.string(I.t.jVcuVY),
            onCtaClick: B,
            primaryAsset: M.A,
            categories: ["appearance"]
        }, {
            id: N.ENTRANCE_SOUNDS_CARD_ID,
            title: I.intl.string(I.t.WJfCPi),
            description: I.intl.string(I.t.liQKJR),
            ctaText: I.intl.string(I.t.jVcuVY),
            onCtaClick: w,
            primaryAsset: P.A,
            categories: ["appearance"]
        }, {
            id: N.DISPLAY_NAME_STYLES_CARD_ID,
            title: I.intl.string(I.t.OLtTrt),
            description: I.intl.string(I.t["di/pXR"]),
            onCtaClick: t ? V : H,
            ctaText: I.intl.string(I.t.jVcuVY),
            primaryAsset: S.A,
            categories: ["appearance"]
        }, {
            id: N.CUSTOM_SOUNDS_CARD_ID,
            title: I.intl.string(I.t["Cu/oFd"]),
            description: I.intl.string(I.t.czj2aa),
            primaryAsset: (0, r.jsx)(s.WPL, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: N.SPECIAL_STICKERS_CARD_ID,
            title: I.intl.string(I.t.MQoVeb),
            description: I.intl.string(I.t.HGCLZX),
            primaryAsset: y.A,
            categories: ["upgrades"]
        }, {
            id: N.SUPER_REACTIONS_CARD_ID,
            title: I.intl.string(I.t.qERvAA),
            description: I.intl.string(I.t.WkUWzx),
            primaryAsset: (0, r.jsx)(s.Z8w, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: N.VIDEO_BACKGROUNDS_CARD_ID,
            title: I.intl.string(I.t.ssVDYQ),
            description: I.intl.string(I.t.aUSRMa),
            primaryAsset: (0, o.Mw)(e) ? T : j,
            categories: ["upgrades"]
        }, {
            id: N.EARLY_ACCESS_CARD_ID,
            title: I.intl.string(I.t["g/KRY6"]),
            description: I.intl.string(I.t.JzAmJc),
            primaryAsset: (0, r.jsx)(s.AxI, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: N.BADGE_CARD_ID,
            title: I.intl.string(I.t.Bn3CtB),
            description: I.intl.string(I.t.LmENwu),
            subscriptionRequired: !0,
            primaryAsset: null != i ? (0, r.jsx)("img", {
                src: i,
                alt: "",
                width: 160,
                draggable: "false"
            }) : (0, r.jsx)(s.vXC, {
                color: l.A.colors.ICON_MUTED,
                "aria-hidden": !0
            }),
            categories: ["vip"]
        }, {
            id: N.SPECIAL_MEMBER_PRICING_CARD_ID,
            title: I.intl.string(I.t["MTD+7w"]),
            description: I.intl.string(I.t.Bhs0s6),
            ctaText: I.intl.string(I.t.dBJVnZ),
            onCtaClick: G,
            primaryAsset: (0, r.jsx)(s.D8b, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: N.PERMADECOS_CARD_ID,
            title: I.intl.string(I.t.L14NZN),
            description: I.intl.string(I.t.eCZkAI),
            primaryAsset: (0, r.jsx)(s.u7P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }], [e, i, L, U, k, B, G, w, H, V, t]);
    return (0, a.useMemo)(() => Y.filter(e => null != e && !F.includes(e.id)), [Y, F])
}