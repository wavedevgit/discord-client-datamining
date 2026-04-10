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
    c = n(582754),
    o = n(736653),
    d = n(793574),
    u = n(688810),
    _ = n(259065),
    m = n(206835),
    p = n(976860),
    g = n(591179),
    A = n(462463),
    x = n(780964),
    h = n(358776),
    f = n(858897),
    b = n(112848),
    N = n(149757),
    C = n(920050),
    R = n(189024),
    v = n(652215),
    E = n(355097),
    j = n(985018),
    I = n(64514),
    T = n(121818),
    y = n(419455),
    P = n(288604),
    S = n(163635),
    M = n(345362),
    O = n(509442),
    D = ((i = {}).BEST_OF_NITRO = "bestof", i.APPEARANCE_STYLE = "appearance", i.UPGRADES = "upgrades", i.VIP_EXTRAS = "vip", i);
let L = [{
    id: "bestof",
    label: () => j.intl.string(j.t.q1u7nQ)
}, {
    id: "appearance",
    label: () => j.intl.string(j.t.CUnZkZ)
}, {
    id: "upgrades",
    label: () => j.intl.string(j.t.KC5q8v)
}, {
    id: "vip",
    label: () => j.intl.string(j.t.DjEAcv)
}];

function U() {
    let e = (0, o.DP)(),
        t = (0, g.X)("useFavoritesPerkCards"),
        n = (0, b.Lh)(),
        i = (0, N.N)(n)?.standard ?? null,
        {
            analyticsLocations: D
        } = (0, u.Ay)(d.A.PREMIUM_MARKETING_PERK_CARD),
        L = (0, m.A)({
            scrollPosition: E._F.TRY_IT_OUT,
            analyticsLocations: D
        }),
        U = (0, a.useCallback)(() => {
            let e = (0, h.Ci)("openClientThemes");
            (0, f.openUserSettings)(e ? x.X.DISPLAY_THEME_CATEGORY : x.X.APPEARANCE_PANEL, {
                analyticsLocations: D
            })
        }, [D]),
        k = (0, a.useCallback)(() => {
            (0, f.openUserSettings)(x.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL, {
                analyticsLocations: D
            })
        }, [D]),
        B = (0, a.useCallback)(() => {
            let e = (0, h.Ci)("openCustomAppSettings") ? x.X.DISPLAY_IN_APP_ICON_CATEGORY : x.X.APPEARANCE_IN_APP_ICON;
            (0, f.openUserSettings)(e, {
                analyticsLocations: D
            })
        }, [D]),
        w = (0, a.useCallback)(() => {
            (0, p.pX)(v.BVt.COLLECTIBLES_SHOP)
        }, []),
        G = (0, a.useCallback)(() => {
            (0, f.openUserSettings)(x.X.SOUNDBOARD_CATEGORY, {
                analyticsLocations: D
            })
        }, [D]),
        H = (0, A.A)({
            analyticsLocations: D
        }),
        V = (0, a.useCallback)(() => {
            (0, f.openUserSettings)(x.X.PROFILE_PANEL, {
                analyticsLocations: D
            }, () => (0, _.L)({
                analyticsLocations: D
            }))
        }, [D]),
        F = (0, R.A)(),
        W = (0, a.useMemo)(() => F.map(e => e?.id), [F]),
        z = (0, a.useMemo)(() => [{
            id: C.SERVER_BOOSTS_CARD_ID,
            title: j.intl.formatToPlainString(j.t.pWySes, {
                boostCount: 2,
                percentageOff: 30
            }),
            description: j.intl.formatToPlainString(j.t.cWFUoT, {
                boostCount: 2,
                percentageOff: 30
            }),
            subscriptionRequired: !0,
            ctaText: j.intl.string(j.t.jVcuVY),
            onCtaClick: k,
            primaryAsset: (0, r.jsx)(s.CIt, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: C.PROFILES_CARD_ID,
            title: j.intl.string(j.t.xDRab3),
            description: j.intl.string(j.t.yn6fWA),
            ctaText: j.intl.string(j.t.jVcuVY),
            onCtaClick: t ? H : L,
            primaryAsset: (0, r.jsx)(s.R$P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "appearance"]
        }, {
            id: C.HD_VIDEO_CARD_ID,
            title: j.intl.string(j.t["/mQ5gg"]),
            description: j.intl.string(j.t["7WwAXh"]),
            primaryAsset: (0, r.jsx)(s.TMU, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: C.CLIENT_THEMES_CARD_ID,
            title: j.intl.string(j.t.acc6h6),
            description: j.intl.formatToPlainString(j.t.WQazjs, {
                themeCount: 20
            }),
            ctaText: j.intl.string(j.t.jVcuVY),
            onCtaClick: U,
            primaryAsset: O.A,
            categories: ["bestof", "appearance"]
        }, {
            id: C.MORE_EMOJIS_CARD_ID,
            title: j.intl.string(j.t.D8vIDT),
            description: j.intl.string(j.t.DRMecB),
            primaryAsset: (0, r.jsx)(s.nT5, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: C.LARGE_UPLOADS_CARD_ID,
            title: j.intl.string(j.t.nL1WZV),
            description: j.intl.formatToPlainString(j.t.k8LC1w, {
                maxSizeMb: 500
            }),
            primaryAsset: (0, r.jsx)(s.oYh, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["bestof", "upgrades"]
        }, {
            id: C.CUSTOM_APP_ICONS_CARD_ID,
            title: j.intl.string(j.t["GU+wqh"]),
            description: j.intl.string(j.t["1uPk1Z"]),
            ctaText: j.intl.string(j.t.jVcuVY),
            onCtaClick: B,
            primaryAsset: P.A,
            categories: ["appearance"]
        }, {
            id: C.ENTRANCE_SOUNDS_CARD_ID,
            title: j.intl.string(j.t.WJfCPi),
            description: j.intl.string(j.t.liQKJR),
            ctaText: j.intl.string(j.t.jVcuVY),
            onCtaClick: G,
            primaryAsset: S.A,
            categories: ["appearance"]
        }, {
            id: C.DISPLAY_NAME_STYLES_CARD_ID,
            title: j.intl.string(j.t.OLtTrt),
            description: j.intl.string(j.t["di/pXR"]),
            onCtaClick: t ? H : V,
            ctaText: j.intl.string(j.t.jVcuVY),
            primaryAsset: y.A,
            categories: ["appearance"]
        }, {
            id: C.CUSTOM_SOUNDS_CARD_ID,
            title: j.intl.string(j.t["Cu/oFd"]),
            description: j.intl.string(j.t.czj2aa),
            primaryAsset: (0, r.jsx)(s.WPL, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: C.SPECIAL_STICKERS_CARD_ID,
            title: j.intl.string(j.t.MQoVeb),
            description: j.intl.string(j.t.HGCLZX),
            primaryAsset: M.A,
            categories: ["upgrades"]
        }, {
            id: C.SUPER_REACTIONS_CARD_ID,
            title: j.intl.string(j.t.qERvAA),
            description: j.intl.string(j.t.WkUWzx),
            primaryAsset: (0, r.jsx)(s.Z8w, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["upgrades"]
        }, {
            id: C.VIDEO_BACKGROUNDS_CARD_ID,
            title: j.intl.string(j.t.ssVDYQ),
            description: j.intl.string(j.t.aUSRMa),
            primaryAsset: (0, c.Mw)(e) ? I : T,
            categories: ["upgrades"]
        }, {
            id: C.EARLY_ACCESS_CARD_ID,
            title: j.intl.string(j.t["g/KRY6"]),
            description: j.intl.string(j.t.JzAmJc),
            primaryAsset: (0, r.jsx)(s.AxI, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: C.BADGE_CARD_ID,
            title: j.intl.string(j.t.Bn3CtB),
            description: j.intl.string(j.t.LmENwu),
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
            id: C.SPECIAL_MEMBER_PRICING_CARD_ID,
            title: j.intl.string(j.t["MTD+7w"]),
            description: j.intl.string(j.t.Bhs0s6),
            ctaText: j.intl.string(j.t.dBJVnZ),
            onCtaClick: w,
            primaryAsset: (0, r.jsx)(s.D8b, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }, {
            id: C.PERMADECOS_CARD_ID,
            title: j.intl.string(j.t.L14NZN),
            description: j.intl.string(j.t.eCZkAI),
            primaryAsset: (0, r.jsx)(s.u7P, {
                alt: "",
                ariaHidden: !0
            }),
            categories: ["vip"]
        }], [e, i, L, U, k, B, w, G, V, H, t]);
    return (0, a.useMemo)(() => z.filter(e => null != e && !W.includes(e.id)), [z, W])
}