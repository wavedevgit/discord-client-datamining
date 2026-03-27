/** chunk id: 212407 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Kk: () => l,
    MV: () => o,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => c,
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
    c = (e, t) => (0, s.mb)(a.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    o = e => {
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
            c = (0, s.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, s.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, s.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, s.mb)(a.RN.COACHTIP_AVATAR);
        return n.useMemo(() => {
            let n = [t, r, l, c, o, d, u].some(e => null != e);
            if (e?.type === i.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let s = e?.refTargetBackground?.asset,
                a = s?.resting,
                m = s?.hovered;
            return {
                hasPreviewAssets: n,
                buttonBGHoverDark: r ?? t ?? m?.dark,
                buttonBGHoverLight: l ?? t ?? m?.light,
                buttonBGRestingDark: o ?? c ?? a?.dark,
                buttonBGRestingLight: d ?? c ?? a?.light,
                coachtipAvatar: u ?? (e?.type === i.G.COACHTIP ? e.avatar : void 0)
            }
        }, [t, r, l, c, o, d, u, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })