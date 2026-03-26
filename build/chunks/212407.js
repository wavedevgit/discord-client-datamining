/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => s,
    MV: () => d,
    U1: () => c,
    bv: () => u,
    qY: () => A,
    s4: () => o,
    w$: () => h
});
var i = n(64700),
    a = n(488430),
    l = n(940622),
    r = n(559474);
let s = e => {
        let t = (0, l.mb)(r.RN.HERO_LOGO),
            n = (0, l.mb)(r.RN.HERO_BANNER_STATIC),
            a = (0, l.mb)(r.RN.HERO_BANNER_ANIMATED),
            s = (0, l.mb)(r.RN.HERO_BANNER_RIVE);
        return i.useMemo(() => {
            let i = null != n || null != a || null != s || null != t,
                l = null != n && null == a;
            return {
                bannerDisplayConfig: i ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: i ? void 0 : e.logoDisplayConfig,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : a ?? e.heroBannerAnimatedUrl,
                heroBannerRive: s ?? e.heroRiveUrl
            }
        }, [t, n, a, s, e])
    },
    o = (e, t) => (0, l.mb)(r.RN.FEATURED_BLOCK) ?? t?.assetUrl ?? e?.featuredBlockUrl,
    d = e => {
        let t = (0, l.mb)(r.RN.CATALOG_BANNER_STATIC),
            n = (0, l.mb)(r.RN.CATALOG_BANNER_ANIMATED),
            i = (0, l.mb)(r.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl
        }
    },
    c = e => (0, l.mb)(r.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    u = e => {
        let t = (0, l.mb)(r.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, l.mb)(r.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, l.mb)(r.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, l.mb)(r.RN.SHOP_BUTTON_BG_RESTING),
            d = (0, l.mb)(r.RN.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, l.mb)(r.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            u = (0, l.mb)(r.RN.COACHTIP_AVATAR);
        return i.useMemo(() => {
            let i = [t, n, s, o, d, c, u].some(e => null != e);
            if (e?.type === a.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let l = e?.refTargetBackground?.asset,
                r = l?.resting,
                A = l?.hovered;
            return {
                hasPreviewAssets: i,
                buttonBGHoverDark: n ?? t ?? A?.dark,
                buttonBGHoverLight: s ?? t ?? A?.light,
                buttonBGRestingDark: d ?? o ?? r?.dark,
                buttonBGRestingLight: c ?? o ?? r?.light,
                coachtipAvatar: u ?? (e?.type === a.G.COACHTIP ? e.avatar : void 0)
            }
        }, [t, n, s, o, d, c, u, e])
    },
    A = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    h = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })