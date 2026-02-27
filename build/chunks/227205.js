/** chunk id: 227205, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
});
var s = n(627968),
    l = n(64700),
    r = n(503698),
    a = n.n(r),
    i = n(172218),
    o = n(696292),
    c = n(651162),
    d = n(311907),
    u = n(397927),
    g = n(545986),
    _ = n(318346),
    m = n(287809),
    h = n(954571),
    p = n(440938),
    f = n(993408),
    x = n(212407),
    E = n(521e3),
    C = n(938191),
    A = n(815280),
    b = n(60140),
    S = n(758836),
    v = n(652215),
    L = n(985018),
    I = n(201073);
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
            handleTransition: n,
            category: r,
            heroBlock: k,
            tab: T,
            onVisibilityChange: O
        } = e, N = (0, i.K)(e => {
            O?.(e)
        }, .1, null != O), y = l.useRef(null), R = (0, C.yB)("HeroBlock"), B = (0, d.bG)([m.default], () => m.default.getCurrentUser()), M = (0, p.uM)(), P = l.useMemo(() => null != k ? k : null == r ? j : {
            rankedSkuIds: r.heroRanking ?? [],
            name: r.name,
            unpublishedAt: r.unpublishedAt,
            categorySkuId: r.skuId,
            summary: r.summary,
            type: c.g.HERO,
            categoryStoreListingId: r.storeListingId,
            bannerDisplayConfig: r.heroBannerDisplayConfig,
            logoDisplayConfig: r.heroLogoDisplayConfig,
            heroLogoUrl: r.heroLogoUrl,
            heroBannerUrl: r.heroBannerUrl,
            heroBannerAnimatedUrl: r.heroBannerAnimatedUrl
        }, [k, r]), {
            bannerDisplayConfig: D,
            logoDisplayConfig: H,
            heroLogo: w,
            heroBannerStatic: U,
            heroBannerAnimated: G,
            heroBannerRive: F
        } = (0, x.Kk)(P), V = D?.responsive ?? !1, K = D?.backgroundStyle, W = null != F, z = T === S.G2.ORBS, Y = null != r && r.isOrbsExclusive, $ = z ? L.intl.string(L.t["1CdL8d"]) : L.intl.string(L.t.xYKa1T), Z = () => {
            z ? ((0, _.Y)({
                pageType: v.liQ.SHOP_ORBS_TAB,
                sectionType: v.JJy.ORBS_SHOP_HERO_BLOCK,
                ctaObject: v.ZSU.CTA_TO_QUEST_HOME
            }), (0, g.navigateToQuestHome)({
                fromContent: o.u.ORBS_SHOP_HERO_CTA
            })) : (n({
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
        return null != B && (t || P !== j) ? (0, s.jsxs)("div", {
            ref: N,
            className: I.os,
            children: [W ? (0, E.VA)({
                isCustomCursorEnabled: R,
                className: I.Xt,
                riveEventTargetRef: y
            }) : null, (0, s.jsx)("div", {
                className: a()(I.vK, {
                    [I.cN]: W,
                    [I.no]: V
                }),
                style: null != K ? {
                    background: K
                } : void 0,
                children: null != U && (0, s.jsx)(A.A, {
                    bannerStatic: U,
                    bannerAnimated: G,
                    bannerRive: F,
                    isResponsive: V,
                    eventTargetRef: y
                })
            }), (0, s.jsxs)("div", {
                className: I.xX,
                children: [W ? (0, s.jsx)("div", {
                    className: I.fy,
                    children: !t && (0, s.jsx)(u.Button, {
                        variant: "overlay-primary",
                        onClick: Z,
                        text: $
                    })
                }) : (0, s.jsxs)("div", {
                    className: a()(I.bC, {
                        [I.no]: V
                    }),
                    children: [t ? (0, s.jsx)("div", {
                        className: I.Hw
                    }) : (0, s.jsxs)("div", {
                        className: I.Hw,
                        children: [(0, f.HF)(P.unpublishedAt) && (0, s.jsx)(u.LpS, {
                            disableColor: !0,
                            text: L.intl.string(L.t["h/uBCR"]),
                            className: I.v0
                        }), (0, s.jsxs)("div", {
                            className: I.Wq,
                            children: [null != w && (0, s.jsx)("img", {
                                className: I.rm,
                                src: w,
                                alt: P.name,
                                style: H?.toDesktopStyles()
                            }), null != P.title && (0, s.jsx)(u.Heading, {
                                variant: "heading-xxl/bold",
                                className: I.DD,
                                color: "text-strong",
                                children: P.title
                            }), null != P.summary && "" !== P.summary && (0, s.jsx)(u.Text, {
                                variant: "text-md/normal",
                                className: z ? I.h4 : I.Tm,
                                style: null != P.bannerTextColor ? {
                                    color: P.bannerTextColor
                                } : void 0,
                                children: P.summary
                            })]
                        })]
                    }), !t && (0, s.jsx)("div", {
                        className: I.IS,
                        children: (0, s.jsx)(u.Button, {
                            variant: "overlay-primary",
                            onClick: Z,
                            text: $
                        })
                    })]
                }), (0, s.jsx)(b.A, {
                    heroBlockRecord: P,
                    tab: T,
                    isBlockLoading: t,
                    layout: T === S.G2.HOME ? "hscroll" : "feed"
                })]
            })]
        }) : null
    }