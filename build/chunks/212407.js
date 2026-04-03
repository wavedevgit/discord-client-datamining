/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => o,
    MV: () => d,
    U1: () => u,
    bv: () => m,
    qY: () => h,
    s4: () => c,
    w$: () => p
});
var r = n(64700),
    a = n(488430),
    i = n(719986),
    s = n(940622),
    l = n(559474);
let o = e => {
        let t = (0, s.mb)(l.RN.HERO_LOGO),
            n = (0, s.mb)(l.RN.HERO_BANNER_STATIC),
            a = (0, s.mb)(l.RN.HERO_BANNER_ANIMATED),
            o = (0, s.mb)(l.RN.HERO_BANNER_RIVE),
            c = (0, s.JE)(e => e.heroLogoMaxHeight),
            d = (0, s.JE)(e => e.heroResponsive);
        return r.useMemo(() => {
            let r, s = null != n || null != a || null != o || null != t,
                l = null != n && null == a;
            return r = s ? null != t && null != c ? i.M.fromServer({
                desktop_max_height: c
            }) : void 0 : e.logoDisplayConfig, {
                bannerDisplayConfig: s ? d ? i.M.fromServer({
                    responsive: !0
                }) : void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : a ?? e.heroBannerAnimatedUrl,
                heroBannerRive: o ?? e.heroRiveUrl
            }
        }, [t, n, a, o, e, c, d])
    },
    c = (e, t, n) => {
        let r = (0, s.mb)(l.RN.FEATURED_BLOCK);
        return (n ? r : null) ?? t?.assetUrl ?? e?.featuredBlockUrl
    },
    d = e => {
        let t = (0, s.mb)(l.RN.CATALOG_BANNER_STATIC),
            n = (0, s.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            r = (0, s.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: r ?? e.catalogBannerRiveUrl
        }
    },
    u = e => (0, s.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    m = e => {
        let t = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
            i = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return r.useMemo(() => {
            if (e?.type === a.G.COACHMARK) return {};
            let r = e?.refTargetBackground?.asset,
                s = r?.resting,
                l = r?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? l?.dark,
                buttonBGHoverLight: i ?? t ?? l?.light,
                buttonBGRestingDark: c ?? o ?? s?.dark,
                buttonBGRestingLight: d ?? o ?? s?.light
            }
        }, [t, n, i, o, c, d, e])
    },
    h = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })