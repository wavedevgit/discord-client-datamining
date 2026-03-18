/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => s,
    MV: () => o,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => c,
    w$: () => h
});
var r = n(64700),
    i = n(488430),
    a = n(940622),
    l = n(559474);
let s = e => {
        let t = (0, a.mb)(l.RN.HERO_LOGO),
            n = (0, a.mb)(l.RN.HERO_BANNER_STATIC),
            i = (0, a.mb)(l.RN.HERO_BANNER_ANIMATED),
            s = (0, a.mb)(l.RN.HERO_BANNER_RIVE);
        return r.useMemo(() => {
            let r = null != n || null != i || null != s || null != t,
                a = null != n && null == i;
            return {
                bannerDisplayConfig: r ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: a ? void 0 : i ?? e.heroBannerAnimatedUrl,
                heroBannerRive: s ?? e.heroRiveUrl
            }
        }, [t, n, i, s, e])
    },
    c = (e, t) => (0, a.mb)(l.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    o = e => {
        let t = (0, a.mb)(l.RN.CATALOG_BANNER_STATIC),
            n = (0, a.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            r = (0, a.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: r ?? e.catalogBannerRiveUrl
        }
    },
    d = e => (0, a.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, a.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            c = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, a.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, a.mb)(l.RN.COACHTIP_AVATAR);
        return r.useMemo(() => {
            let r = [t, n, s, c, o, d, u].some(e => null != e);
            if (e?.type === i.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let a = e?.refTargetBackground?.asset,
                l = a?.resting,
                m = a?.hovered;
            return {
                hasPreviewAssets: r,
                buttonBGHoverDark: n ?? t ?? m?.dark,
                buttonBGHoverLight: s ?? t ?? m?.light,
                buttonBGRestingDark: o ?? c ?? l?.dark,
                buttonBGRestingLight: d ?? c ?? l?.light,
                coachtipAvatar: u ?? e?.avatar
            }
        }, [t, n, s, c, o, d, u, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    h = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })