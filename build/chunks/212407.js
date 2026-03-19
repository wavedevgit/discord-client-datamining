/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => s,
    MV: () => c,
    U1: () => d,
    bv: () => u,
    qY: () => m,
    s4: () => o,
    w$: () => h
});
var r = n(64700),
    a = n(488430),
    i = n(940622),
    l = n(559474);
let s = e => {
        let t = (0, i.mb)(l.RN.HERO_LOGO),
            n = (0, i.mb)(l.RN.HERO_BANNER_STATIC),
            a = (0, i.mb)(l.RN.HERO_BANNER_ANIMATED),
            s = (0, i.mb)(l.RN.HERO_BANNER_RIVE);
        return r.useMemo(() => {
            let r = null != n || null != a || null != s || null != t,
                i = null != n && null == a;
            return {
                bannerDisplayConfig: r ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: i ? void 0 : a ?? e.heroBannerAnimatedUrl,
                heroBannerRive: s ?? e.heroRiveUrl
            }
        }, [t, n, a, s, e])
    },
    o = (e, t) => (0, i.mb)(l.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    c = e => {
        let t = (0, i.mb)(l.RN.CATALOG_BANNER_STATIC),
            n = (0, i.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            r = (0, i.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: r ?? e.catalogBannerRiveUrl
        }
    },
    d = e => (0, i.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, i.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, i.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, i.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, i.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, i.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, i.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, i.mb)(l.RN.COACHTIP_AVATAR);
        return r.useMemo(() => {
            let r = [t, n, s, o, c, d, u].some(e => null != e);
            if (e?.type === a.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let i = e?.refTargetBackground?.asset,
                l = i?.resting,
                m = i?.hovered;
            return {
                hasPreviewAssets: r,
                buttonBGHoverDark: n ?? t ?? m?.dark,
                buttonBGHoverLight: s ?? t ?? m?.light,
                buttonBGRestingDark: c ?? o ?? l?.dark,
                buttonBGRestingLight: d ?? o ?? l?.light,
                coachtipAvatar: u ?? (e?.type === a.G.COACHTIP ? e.avatar : void 0)
            }
        }, [t, n, s, o, c, d, u, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    h = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })