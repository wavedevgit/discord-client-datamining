/** chunk id: 212407, original params: e,t,a (module,exports,require) **/
a.d(t, {
    Kk: () => l,
    MV: () => o,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => c,
    w$: () => p
});
var n = a(64700),
    r = a(488430),
    i = a(940622),
    s = a(559474);
let l = e => {
        let t = (0, i.mb)(s.RN.HERO_LOGO),
            a = (0, i.mb)(s.RN.HERO_BANNER_STATIC),
            r = (0, i.mb)(s.RN.HERO_BANNER_ANIMATED),
            l = (0, i.mb)(s.RN.HERO_BANNER_RIVE);
        return n.useMemo(() => {
            let n = null != a || null != r || null != l || null != t,
                i = null != a && null == r;
            return {
                bannerDisplayConfig: n ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: n ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: a ?? e.heroBannerUrl,
                heroBannerAnimated: i ? void 0 : r ?? e.heroBannerAnimatedUrl,
                heroBannerRive: l ?? e.heroRiveUrl
            }
        }, [t, a, r, l, e])
    },
    c = (e, t) => (0, i.mb)(s.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    o = e => {
        let t = (0, i.mb)(s.RN.CATALOG_BANNER_STATIC),
            a = (0, i.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            n = (0, i.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: a ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: n ?? e.catalogBannerRiveUrl
        }
    },
    d = e => (0, i.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            a = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            l = (0, i.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            c = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, i.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, i.mb)(s.RN.COACHTIP_AVATAR);
        return n.useMemo(() => {
            let n = [t, a, l, c, o, d, u].some(e => null != e);
            if (e?.type === r.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let i = e?.refTargetBackground?.asset,
                s = i?.resting,
                m = i?.hovered;
            return {
                hasPreviewAssets: n,
                buttonBGHoverDark: a ?? t ?? m?.dark,
                buttonBGHoverLight: l ?? t ?? m?.light,
                buttonBGRestingDark: o ?? c ?? s?.dark,
                buttonBGRestingLight: d ?? c ?? s?.light,
                coachtipAvatar: u ?? e?.avatar
            }
        }, [t, a, l, c, o, d, u, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })