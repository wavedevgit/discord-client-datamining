/** chunk id: 212407 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Kk: () => l,
    MV: () => c,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => o,
    w$: () => p
});
var n = r(64700),
    i = r(488430),
    s = r(940622),
    a = r(559474);
let l = e => {
        let t = (0, s.mb)(a.RN.HERO_LOGO),
            r = (0, s.mb)(a.RN.HERO_BANNER_STATIC),
            i = (0, s.mb)(a.RN.HERO_BANNER_ANIMATED),
            l = (0, s.mb)(a.RN.HERO_BANNER_RIVE);
        return n.useMemo(() => {
            let n = null != r || null != i || null != l || null != t,
                s = null != r && null == i;
            return {
                bannerDisplayConfig: n ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: n ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: r ?? e.heroBannerUrl,
                heroBannerAnimated: s ? void 0 : i ?? e.heroBannerAnimatedUrl,
                heroBannerRive: l ?? e.heroRiveUrl
            }
        }, [t, r, i, l, e])
    },
    o = (e, t) => (0, s.mb)(a.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    c = e => {
        let t = (0, s.mb)(a.RN.CATALOG_BANNER_STATIC),
            r = (0, s.mb)(a.RN.CATALOG_BANNER_ANIMATED),
            n = (0, s.mb)(a.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: r ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: n ?? e.catalogBannerRiveUrl
        }
    },
    d = e => (0, s.mb)(a.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, s.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
            r = (0, s.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, s.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, s.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, s.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, s.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return n.useMemo(() => {
            if (e?.type === i.G.COACHMARK) return {};
            let n = e?.refTargetBackground?.asset,
                s = n?.resting,
                a = n?.hovered;
            return {
                buttonBGHoverDark: r ?? t ?? a?.dark,
                buttonBGHoverLight: l ?? t ?? a?.light,
                buttonBGRestingDark: c ?? o ?? s?.dark,
                buttonBGRestingLight: d ?? o ?? s?.light
            }
        }, [t, r, l, o, c, d, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })