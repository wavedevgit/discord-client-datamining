/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => o,
    MV: () => d,
    U1: () => u,
    bv: () => m,
    qY: () => p,
    s4: () => c,
    w$: () => _
});
var a = n(64700),
    r = n(488430),
    i = n(719986),
    s = n(940622),
    l = n(559474);
let o = e => {
        let t = (0, s.mb)(l.RN.HERO_LOGO),
            n = (0, s.mb)(l.RN.HERO_BANNER_STATIC),
            r = (0, s.mb)(l.RN.HERO_BANNER_ANIMATED),
            o = (0, s.mb)(l.RN.HERO_BANNER_RIVE),
            c = (0, s.JE)(e => e.heroLogoMaxHeight),
            d = (0, s.JE)(e => e.heroResponsive);
        return a.useMemo(() => {
            let a, s = null != n || null != r || null != o || null != t,
                l = null != n && null == r;
            return a = s ? null != t && null != c ? i.M.fromServer({
                desktop_max_height: c
            }) : void 0 : e.logoDisplayConfig, {
                bannerDisplayConfig: s ? d ? i.M.fromServer({
                    responsive: !0
                }) : void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: a,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : r ?? e.heroBannerAnimatedUrl,
                heroBannerRive: o ?? e.heroRiveUrl
            }
        }, [t, n, r, o, e, c, d])
    },
    c = (e, t, n) => {
        let a = (0, s.mb)(l.RN.FEATURED_BLOCK);
        return (n ? a : null) ?? t?.assetUrl ?? e?.featuredBlockUrl
    },
    d = e => {
        let t = (0, s.mb)(l.RN.CATALOG_BANNER_STATIC),
            n = (0, s.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            a = (0, s.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: a ?? e.catalogBannerRiveUrl
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
        return a.useMemo(() => {
            if (e?.type === r.G.COACHMARK) return {};
            let a = e?.refTargetBackground?.asset,
                s = a?.resting,
                l = a?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? l?.dark,
                buttonBGHoverLight: i ?? t ?? l?.light,
                buttonBGRestingDark: c ?? o ?? s?.dark,
                buttonBGRestingLight: d ?? o ?? s?.light
            }
        }, [t, n, i, o, c, d, e])
    },
    p = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    _ = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })