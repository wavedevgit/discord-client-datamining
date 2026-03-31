/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => l,
    MV: () => c,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => o,
    w$: () => p
});
var r = n(64700),
    a = n(488430),
    i = n(940622),
    s = n(559474);
let l = e => {
        let t = (0, i.mb)(s.RN.HERO_LOGO),
            n = (0, i.mb)(s.RN.HERO_BANNER_STATIC),
            a = (0, i.mb)(s.RN.HERO_BANNER_ANIMATED),
            l = (0, i.mb)(s.RN.HERO_BANNER_RIVE);
        return r.useMemo(() => {
            let r = null != n || null != a || null != l || null != t,
                i = null != n && null == a;
            return {
                bannerDisplayConfig: r ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: i ? void 0 : a ?? e.heroBannerAnimatedUrl,
                heroBannerRive: l ?? e.heroRiveUrl
            }
        }, [t, n, a, l, e])
    },
    o = (e, t) => (0, i.mb)(s.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    c = e => {
        let t = (0, i.mb)(s.RN.CATALOG_BANNER_STATIC),
            n = (0, i.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            r = (0, i.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: r ?? e.catalogBannerRiveUrl
        }
    },
    d = e => (0, i.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return r.useMemo(() => {
            if (e?.type === a.G.COACHMARK) return {};
            let r = e?.refTargetBackground?.asset,
                i = r?.resting,
                s = r?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? s?.dark,
                buttonBGHoverLight: l ?? t ?? s?.light,
                buttonBGRestingDark: c ?? o ?? i?.dark,
                buttonBGRestingLight: d ?? o ?? i?.light
            }
        }, [t, n, l, o, c, d, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })