/** chunk id: 227205, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => k
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(172218),
    o = n(696292),
    c = n(651162),
    u = n(311907),
    d = n(397927),
    g = n(688810),
    f = n(545986),
    m = n(318346),
    p = n(287809),
    _ = n(954571),
    b = n(440938),
    h = n(993408),
    E = n(379177),
    v = n(212407),
    C = n(333034),
    A = n(521e3),
    S = n(938191),
    x = n(815280),
    O = n(60140),
    y = n(758836),
    j = n(652215),
    T = n(985018),
    L = n(201073);
let I = {
        rankedSkuIds: [],
        name: "",
        unpublishedAt: void 0,
        categorySkuId: void 0,
        summary: void 0,
        type: c.g.HERO,
        categoryStoreListingId: ""
    },
    k = e => {
        var t;
        let {
            isLoading: n,
            handleTransition: s,
            category: k,
            heroBlock: N,
            tab: R,
            onVisibilityChange: P
        } = e, B = (0, i.K)(e => {
            null == P || P(e)
        }, .1, null != P), w = l.useRef(null), D = (0, S.y)("HeroBlock"), M = (0, u.bG)([p.default], () => p.default.getCurrentUser()), H = (0, b.uM)(), G = l.useMemo(() => {
            var e;
            return null != N ? N : null == k ? I : {
                rankedSkuIds: null != (e = k.heroRanking) ? e : [],
                name: k.name,
                unpublishedAt: k.unpublishedAt,
                categorySkuId: k.skuId,
                summary: k.summary,
                type: c.g.HERO,
                categoryStoreListingId: k.storeListingId,
                bannerDisplayConfig: k.heroBannerDisplayConfig,
                logoDisplayConfig: k.heroLogoDisplayConfig,
                heroLogoUrl: k.heroLogoUrl,
                heroBannerUrl: k.heroBannerUrl,
                heroBannerAnimatedUrl: k.heroBannerAnimatedUrl
            }
        }, [N, k]), U = (0, E.rR)("HeroBlock") && G.categorySkuId === y.op, {
            bannerDisplayConfig: F,
            logoDisplayConfig: z,
            heroLogo: V,
            heroBannerStatic: K,
            heroBannerAnimated: W,
            heroBannerRive: Y
        } = (0, v.Kk)(G), q = null != (t = null == F ? void 0 : F.responsive) && t, Z = null == F ? void 0 : F.backgroundStyle, X = null != Y, J = R === y.G2.ORBS, Q = null != k && k.isOrbsExclusive, $ = J ? T.intl.string(T.t["1CdL8d"]) : T.intl.string(T.t.xYKa1T);
        J && U && ($ = T.intl.string(T.t.dVz4hi));
        let {
            analyticsLocations: ee
        } = (0, g.Ay)(), et = () => {
            J ? ((0, m.Y)({
                pageType: j.liQ.SHOP_ORBS_TAB,
                sectionType: j.JJy.ORBS_SHOP_HERO_BLOCK,
                ctaObject: j.ZSU.CTA_TO_QUEST_HOME
            }), U ? (0, C.A)({
                analyticsLocations: ee
            }) : (0, f.navigateToQuestHome)({
                fromContent: o.u.ORBS_SHOP_HERO_CTA
            })) : (s({
                sourceButton: "shop latest category hero",
                categorySkuId: Q ? G.categorySkuId : void 0,
                isInternalShopDeeplink: !0,
                isOrbsExclusive: Q
            }), _.default.track(j.HAw.COLLECTIBLES_SHOP_ELEMENT_CLICKED, {
                collectibles_shop_session_id: null == H ? void 0 : H.sessionId,
                sku_id: G.categorySkuId,
                page_type: R,
                page_section: null == H ? void 0 : H.pageSection,
                page_category: null == H ? void 0 : H.pageCategory,
                cta_name: "shop latest category hero button"
            }))
        };
        return null != M && (n || G !== I) ? (0, r.jsxs)("div", {
            ref: B,
            className: L.os,
            children: [X ? (0, A.VA)({
                isCustomCursorEnabled: D,
                className: L.Xt,
                riveEventTargetRef: w
            }) : null, (0, r.jsx)("div", {
                className: a()(L.vK, {
                    [L.cN]: X,
                    [L.no]: q
                }),
                style: null != Z ? {
                    background: Z
                } : void 0,
                children: null != K && (0, r.jsx)(x.A, {
                    bannerStatic: K,
                    bannerAnimated: W,
                    bannerRive: Y,
                    isResponsive: q,
                    eventTargetRef: w
                })
            }), (0, r.jsxs)("div", {
                className: L.xX,
                children: [X ? (0, r.jsx)("div", {
                    className: L.fy,
                    children: !n && (0, r.jsx)(d.Button, {
                        variant: "overlay-primary",
                        onClick: et,
                        text: $
                    })
                }) : (0, r.jsxs)("div", {
                    className: a()(L.bC, {
                        [L.no]: q
                    }),
                    children: [n ? (0, r.jsx)("div", {
                        className: L.Hw
                    }) : (0, r.jsxs)("div", {
                        className: L.Hw,
                        children: [(0, h.HF)(G.unpublishedAt) && (0, r.jsx)(d.LpS, {
                            disableColor: !0,
                            text: T.intl.string(T.t["h/uBCR"]),
                            className: L.v0
                        }), (0, r.jsxs)("div", {
                            className: L.Wq,
                            children: [null != V && (0, r.jsx)("img", {
                                className: L.rm,
                                src: V,
                                alt: G.name,
                                style: null == z ? void 0 : z.toDesktopStyles()
                            }), null != G.title && (0, r.jsx)(d.Heading, {
                                variant: "heading-xxl/bold",
                                className: L.DD,
                                color: "text-strong",
                                children: G.title
                            }), null != G.summary && "" !== G.summary && (0, r.jsx)(d.Text, {
                                variant: "text-md/normal",
                                className: J ? L.h4 : L.Tm,
                                style: null != G.bannerTextColor ? {
                                    color: G.bannerTextColor
                                } : void 0,
                                children: G.summary
                            })]
                        })]
                    }), !n && (0, r.jsx)("div", {
                        className: L.IS,
                        children: (0, r.jsx)(d.Button, {
                            variant: "overlay-primary",
                            onClick: et,
                            text: $
                        })
                    })]
                }), (0, r.jsx)(O.A, {
                    heroBlockRecord: G,
                    tab: R,
                    isBlockLoading: n,
                    layout: R === y.G2.HOME ? "hscroll" : U ? "row" : "feed"
                })]
            })]
        }) : null
    }