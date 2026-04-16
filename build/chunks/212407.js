/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => c,
    MV: () => d,
    U1: () => u,
    bv: () => m,
    qY: () => p,
    s4: () => o,
    w$: () => _
});
var a = n(64700),
    r = n(488430),
    i = n(719986),
    s = n(940622),
    l = n(559474);
let c = e => {
        let t = (0, s.mb)(l.RN.HERO_LOGO),
            n = (0, s.mb)(l.RN.HERO_BANNER_STATIC),
            r = (0, s.mb)(l.RN.HERO_BANNER_ANIMATED),
            c = (0, s.mb)(l.RN.HERO_BANNER_RIVE),
            o = (0, s.JE)(e => e.heroLogoMaxHeight),
            d = (0, s.JE)(e => e.heroResponsive);
        return a.useMemo(() => {
            let a, s = null != n || null != r || null != c || null != t,
                l = null != n && null == r;
            return a = s ? null != t && null != o ? i.M.fromServer({
                desktop_max_height: o
            }) : void 0 : e.logoDisplayConfig, {
                bannerDisplayConfig: s ? d ? i.M.fromServer({
                    responsive: !0
                }) : void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: a,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : r ?? e.heroBannerAnimatedUrl,
                heroBannerRive: c ?? e.heroRiveUrl
            }
        }, [t, n, r, c, e, o, d])
    },
    o = (e, t, n) => {
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
            c = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            o = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return a.useMemo(() => {
            if (e?.type === r.G.COACHMARK) return {};
            let a = e?.refTargetBackground?.asset,
                s = a?.resting,
                l = a?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? l?.dark,
                buttonBGHoverLight: i ?? t ?? l?.light,
                buttonBGRestingDark: o ?? c ?? s?.dark,
                buttonBGRestingLight: d ?? c ?? s?.light
            }
        }, [t, n, i, c, o, d, e])
    },
    p = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    _ = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })