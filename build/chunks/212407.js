/** chunk id: 212407, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Kk: () => l,
    MV: () => o,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => c,
    w$: () => p
});
var a = n(64700),
    r = n(488430),
    i = n(940622),
    s = n(559474);
let l = e => {
        let t = (0, i.mb)(s.RN.HERO_LOGO),
            n = (0, i.mb)(s.RN.HERO_BANNER_STATIC),
            r = (0, i.mb)(s.RN.HERO_BANNER_ANIMATED),
            l = (0, i.mb)(s.RN.HERO_BANNER_RIVE);
        return a.useMemo(() => {
            let a = null != n || null != r || null != l || null != t,
                i = null != n && null == r;
            return {
                bannerDisplayConfig: a ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: a ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: i ? void 0 : r ?? e.heroBannerAnimatedUrl,
                heroBannerRive: l ?? e.heroRiveUrl
            }
        }, [t, n, r, l, e])
    },
    c = (e, t) => (0, i.mb)(s.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    o = e => {
        let t = (0, i.mb)(s.RN.CATALOG_BANNER_STATIC),
            n = (0, i.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            a = (0, i.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: a ?? e.catalogBannerRiveUrl
        }
    },
    d = e => (0, i.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            c = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, i.mb)(s.RN.COACHTIP_AVATAR);
        return a.useMemo(() => {
            let a = [t, n, l, c, o, d, u].some(e => null != e);
            if (e?.type === r.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let i = e?.refTargetBackground?.asset,
                s = i?.resting,
                m = i?.hovered;
            return {
                hasPreviewAssets: a,
                buttonBGHoverDark: n ?? t ?? m?.dark,
                buttonBGHoverLight: l ?? t ?? m?.light,
                buttonBGRestingDark: o ?? c ?? s?.dark,
                buttonBGRestingLight: d ?? c ?? s?.light,
                coachtipAvatar: u ?? e?.avatar
            }
        }, [t, n, l, c, o, d, u, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })