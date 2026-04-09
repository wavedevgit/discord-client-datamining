/** chunk id: 212407 params = (module,exports,require) **/
n.d(t, {
    Kk: () => o,
    MV: () => c,
    U1: () => u,
    bv: () => A,
    qY: () => _,
    s4: () => d,
    w$: () => h
});
var i = n(64700),
    a = n(488430),
    r = n(719986),
    l = n(940622),
    s = n(559474);
let o = e => {
        let t = (0, l.mb)(s.RN.HERO_LOGO),
            n = (0, l.mb)(s.RN.HERO_BANNER_STATIC),
            a = (0, l.mb)(s.RN.HERO_BANNER_ANIMATED),
            o = (0, l.mb)(s.RN.HERO_BANNER_RIVE),
            d = (0, l.JE)(e => e.heroLogoMaxHeight),
            c = (0, l.JE)(e => e.heroResponsive);
        return i.useMemo(() => {
            let i, l = null != n || null != a || null != o || null != t,
                s = null != n && null == a;
            return i = l ? null != t && null != d ? r.M.fromServer({
                desktop_max_height: d
            }) : void 0 : e.logoDisplayConfig, {
                bannerDisplayConfig: l ? c ? r.M.fromServer({
                    responsive: !0
                }) : void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: i,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: n ?? e.heroBannerUrl,
                heroBannerAnimated: s ? void 0 : a ?? e.heroBannerAnimatedUrl,
                heroBannerRive: o ?? e.heroRiveUrl
            }
        }, [t, n, a, o, e, d, c])
    },
    d = (e, t, n) => {
        let i = (0, l.mb)(s.RN.FEATURED_BLOCK);
        return (n ? i : null) ?? t?.assetUrl ?? e?.featuredBlockUrl
    },
    c = e => {
        let t = (0, l.mb)(s.RN.CATALOG_BANNER_STATIC),
            n = (0, l.mb)(s.RN.CATALOG_BANNER_ANIMATED),
            i = (0, l.mb)(s.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: n ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: i ?? e.catalogBannerRiveUrl
        }
    },
    u = e => (0, l.mb)(s.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    A = e => {
        let t = (0, l.mb)(s.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, l.mb)(s.RN.SHOP_BUTTON_BG_HOVER_DARK),
            r = (0, l.mb)(s.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, l.mb)(s.RN.SHOP_BUTTON_BG_RESTING),
            d = (0, l.mb)(s.RN.SHOP_BUTTON_BG_RESTING_DARK),
            c = (0, l.mb)(s.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return i.useMemo(() => {
            if (e?.type === a.G.COACHMARK) return {};
            let i = e?.refTargetBackground?.asset,
                l = i?.resting,
                s = i?.hovered;
            return {
                buttonBGHoverDark: n ?? t ?? s?.dark,
                buttonBGHoverLight: r ?? t ?? s?.light,
                buttonBGRestingDark: d ?? o ?? l?.dark,
                buttonBGRestingLight: c ?? o ?? l?.light
            }
        }, [t, n, r, o, d, c, e])
    },
    _ = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    h = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })