/** chunk id: 227205 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => k
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    i = s.n(l),
    a = s(172218),
    o = s(696292),
    c = s(651162),
    d = s(311907),
    u = s(397927),
    _ = s(545986),
    g = s(318346),
    m = s(287809),
    h = s(954571),
    p = s(440938),
    f = s(993408),
    x = s(212407),
    C = s(521e3),
    E = s(938191),
    b = s(815280),
    A = s(60140),
    S = s(758836),
    v = s(652215),
    I = s(985018),
    L = s(419447);
let j = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: ""
    },
    k = e => {
        let {
            isLoading: t,
            handleTransition: s,
            category: l,
            heroBlock: k,
            tab: T,
            onVisibilityChange: O
        } = e, y = (0, a.K)(e => {
            O?.(e)
        }, .1, null != O), N = r.useRef(null), R = (0, E.yB)("HeroBlock"), B = (0, d.bG)([m.default], () => m.default.getCurrentUser()), M = (0, p.uM)(), P = r.useMemo(() => null != k ? k : null == l ? j : {
            rankedSkuIds: l.heroRanking ?? [],
            name: l.name,
            unpublishedAt: l.unpublishedAt,
            categorySkuId: l.skuId,
            summary: l.summary,
            type: c.g.HERO,
            categoryStoreListingId: l.storeListingId,
            bannerDisplayConfig: l.heroBannerDisplayConfig,
            logoDisplayConfig: l.heroLogoDisplayConfig,
            heroLogoUrl: l.heroLogoUrl,
            heroBannerUrl: l.heroBannerUrl,
            heroBannerAnimatedUrl: l.heroBannerAnimatedUrl
        }, [k, l]), {
            bannerDisplayConfig: D,
            logoDisplayConfig: H,
            heroLogo: w,
            heroBannerStatic: U,
            heroBannerAnimated: F,
            heroBannerRive: G
        } = (0, x.Kk)(P), V = D?.responsive ?? !1, K = D?.backgroundStyle, z = null != G, W = T === S.G2.ORBS, Y = null != l && l.isOrbsExclusive, $ = W ? I.intl.string(I.t["1CdL8d"]) : I.intl.string(I.t.xYKa1T), Z = () => {
            W ? ((0, g.Y)({
                pageType: v.liQ.SHOP_ORBS_TAB,
                sectionType: v.JJy.ORBS_SHOP_HERO_BLOCK,
                ctaObject: v.ZSU.CTA_TO_QUEST_HOME
            }), (0, _.navigateToQuestHome)({
                fromContent: o.u.ORBS_SHOP_HERO_CTA
            })) : (s({
                sourceButton: "shop latest category hero",
                categorySkuId: Y ? P.categorySkuId : void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: Y
            }), h.default.track(v.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: M?.sessionId,
                sku_id: P.categorySkuId,
                page_type: T,
                page_section: M?.pageSection,
                page_category: M?.pageCategory,
                cta_name: "shop latest category hero button"
            }))
        };
        return null != B && (t || P !== j) ? (0, n.jsxs)("div", {
            ref: y,
            className: L.os,
            children: [z ? (0, C.VA)({
                isCustomCursorEnabled: R,
                className: L.Xt,
                riveEventTargetRef: N
            }) : null, (0, n.jsx)("div", {
                className: i()(L.vK, {
                    [L.cN]: z,
                    [L.no]: V
                }),
                style: null != K ? {
                    background: K
                } : void 0,
                children: null != U && (0, n.jsx)(b.A, {
                    bannerStatic: U,
                    bannerAnimated: F,
                    bannerRive: G,
                    isResponsive: V,
                    eventTargetRef: N
                })
            }), (0, n.jsxs)("div", {
                className: L.xX,
                children: [z ? (0, n.jsx)("div", {
                    className: L.fy,
                    children: !t && (0, n.jsx)(u.Button, {
                        variant: "overlay-primary",
                        onClick: Z,
                        text: $
                    })
                }) : (0, n.jsxs)("div", {
                    className: i()(L.bC, {
                        [L.no]: V
                    }),
                    children: [t ? (0, n.jsx)("div", {
                        className: L.Hw
                    }) : (0, n.jsxs)("div", {
                        className: L.Hw,
                        children: [(0, f.HF)(P.unpublishedAt) && (0, n.jsx)(u.LpS, {
                            disableColor: !0,
                            text: I.intl.string(I.t["h/uBCR"]),
                            className: L.v0
                        }), (0, n.jsxs)("div", {
                            className: L.Wq,
                            children: [null != w && (0, n.jsx)("img", {
                                className: L.rm,
                                src: w,
                                alt: P.name,
                                style: H?.toDesktopStyles()
                            }), null != P.title && (0, n.jsx)(u.Heading, {
                                variant: "heading-xxl/bold",
                                className: L.DD,
                                color: "text-strong",
                                children: P.title
                            }), null != P.summary && "" !== P.summary && (0, n.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: W ? L.h4 : L.Tm,
                                style: null != P.bannerTextColor ? {
                                    color: P.bannerTextColor
                                } : void 0,
                                children: P.summary
                            })]
                        })]
                    }), !t && (0, n.jsx)("div", {
                        className: L.IS,
                        children: (0, n.jsx)(u.Button, {
                            variant: "overlay-primary",
                            onClick: Z,
                            text: $
                        })
                    })]
                }), (0, n.jsx)(A.A, {
                    heroBlockRecord: P,
                    tab: T,
                    isBlockLoading: t,
                    layout: T === S.G2.HOME ? "hscroll" : "feed"
                })]
            })]
        }) : null
    }