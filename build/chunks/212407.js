/** chunk id: 212407 params = (module,exports,require) **/
a.d(t, {
    Kk: () => o,
    MV: () => d,
    U1: () => u,
    bv: () => m,
    qY: () => p,
    s4: () => c,
    w$: () => _
});
var n = a(64700),
    r = a(488430),
    i = a(719986),
    s = a(940622),
    l = a(559474);
let o = e => {
        let t = (0, s.mb)(l.RN.HERO_LOGO),
            a = (0, s.mb)(l.RN.HERO_BANNER_STATIC),
            r = (0, s.mb)(l.RN.HERO_BANNER_ANIMATED),
            o = (0, s.mb)(l.RN.HERO_BANNER_RIVE),
            c = (0, s.JE)(e => e.heroLogoMaxHeight),
            d = (0, s.JE)(e => e.heroResponsive);
        return n.useMemo(() => {
            let n, s = null != a || null != r || null != o || null != t,
                l = null != a && null == r;
            return n = s ? null != t && null != c ? i.M.fromServer({
                desktop_max_height: c
            }) : void 0 : e.logoDisplayConfig, {
                bannerDisplayConfig: s ? d ? i.M.fromServer({
                    responsive: !0
                }) : void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: n,
                heroLogo: t ?? e.heroLogoUrl,
                heroBannerStatic: a ?? e.heroBannerUrl,
                heroBannerAnimated: l ? void 0 : r ?? e.heroBannerAnimatedUrl,
                heroBannerRive: o ?? e.heroRiveUrl
            }
        }, [t, a, r, o, e, c, d])
    },
    c = (e, t, a) => {
        let n = (0, s.mb)(l.RN.FEATURED_BLOCK);
        return (a ? n : null) ?? t?.assetUrl ?? e?.featuredBlockUrl
    },
    d = e => {
        let t = (0, s.mb)(l.RN.CATALOG_BANNER_STATIC),
            a = (0, s.mb)(l.RN.CATALOG_BANNER_ANIMATED),
            n = (0, s.mb)(l.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: t ?? e.catalogBannerUrl,
            catalogBannerAnimated: a ?? e.catalogBannerAnimatedUrl,
            catalogBannerRive: n ?? e.catalogBannerRiveUrl
        }
    },
    u = e => (0, s.mb)(l.RN.PDP_BACKGROUND) ?? e.pdpBgUrl,
    m = e => {
        let t = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER),
            a = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER_DARK),
            i = (0, s.mb)(l.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_DARK),
            d = (0, s.mb)(l.RN.SHOP_BUTTON_BG_RESTING_LIGHT);
        return n.useMemo(() => {
            if (e?.type === r.G.COACHMARK) return {};
            let n = e?.refTargetBackground?.asset,
                s = n?.resting,
                l = n?.hovered;
            return {
                buttonBGHoverDark: a ?? t ?? l?.dark,
                buttonBGHoverLight: i ?? t ?? l?.light,
                buttonBGRestingDark: c ?? o ?? s?.dark,
                buttonBGRestingLight: d ?? o ?? s?.light
            }
        }, [t, a, i, o, c, d, e])
    },
    p = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    _ = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })