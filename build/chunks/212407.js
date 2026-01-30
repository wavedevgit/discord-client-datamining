/** chunk id: 212407, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Kk: () => s,
    MV: () => c,
    U1: () => u,
    bv: () => d,
    qY: () => m,
    s4: () => o,
    w$: () => p
});
var r = n(64700),
    l = n(488430),
    i = n(940622),
    a = n(559474);
let s = e => {
        let t = (0, i.mb)(a.RN.HERO_LOGO),
            n = (0, i.mb)(a.RN.HERO_BANNER_STATIC),
            l = (0, i.mb)(a.RN.HERO_BANNER_ANIMATED),
            s = (0, i.mb)(a.RN.HERO_BANNER_RIVE);
        return r.useMemo(() => {
            let r = null != n || null != l || null != s || null != t,
                i = null != n && null == l;
            return {
                bannerDisplayConfig: r ? void 0 : e.bannerDisplayConfig,
                logoDisplayConfig: r ? void 0 : e.logoDisplayConfig,
                heroLogo: null != t ? t : e.heroLogoUrl,
                heroBannerStatic: null != n ? n : e.heroBannerUrl,
                heroBannerAnimated: i ? void 0 : null != l ? l : e.heroBannerAnimatedUrl,
                heroBannerRive: null != s ? s : e.heroRiveUrl
            }
        }, [t, n, l, s, e])
    },
    o = (e, t) => {
        var n;
        let r = (0, i.mb)(a.RN.FEATURED_BLOCK);
        return null != (n = null != r ? r : null == t ? void 0 : t.assetUrl) ? n : null == e ? void 0 : e.featuredBlockUrl
    },
    c = e => {
        let t = (0, i.mb)(a.RN.CATALOG_BANNER_STATIC),
            n = (0, i.mb)(a.RN.CATALOG_BANNER_ANIMATED),
            r = (0, i.mb)(a.RN.CATALOG_BANNER_RIVE);
        return {
            catalogBannerStatic: null != t ? t : e.catalogBannerUrl,
            catalogBannerAnimated: null != n ? n : e.catalogBannerAnimatedUrl,
            catalogBannerRive: null != r ? r : e.catalogBannerRiveUrl
        }
    },
    u = e => {
        let t = (0, i.mb)(a.RN.PDP_BACKGROUND);
        return null != t ? t : e.pdpBgUrl
    },
    d = e => {
        let t = (0, i.mb)(a.RN.SHOP_BUTTON_BG_HOVER),
            n = (0, i.mb)(a.RN.SHOP_BUTTON_BG_HOVER_DARK),
            s = (0, i.mb)(a.RN.SHOP_BUTTON_BG_HOVER_LIGHT),
            o = (0, i.mb)(a.RN.SHOP_BUTTON_BG_RESTING),
            c = (0, i.mb)(a.RN.SHOP_BUTTON_BG_RESTING_DARK),
            u = (0, i.mb)(a.RN.SHOP_BUTTON_BG_RESTING_LIGHT),
            d = (0, i.mb)(a.RN.COACHTIP_AVATAR);
        return r.useMemo(() => {
            var r, i, a, m, p;
            let f = [t, n, s, o, c, u, d].some(e => null != e);
            if ((null == e ? void 0 : e.type) === l.G.COACHMARK) return {
                hasPreviewAssets: !1
            };
            let x = null == e || null == (p = e.refTargetBackground) ? void 0 : p.asset,
                h = null == x ? void 0 : x.resting,
                v = null == x ? void 0 : x.hovered;
            return {
                hasPreviewAssets: f,
                buttonBGHoverDark: null != (r = null != n ? n : t) ? r : null == v ? void 0 : v.dark,
                buttonBGHoverLight: null != (i = null != s ? s : t) ? i : null == v ? void 0 : v.light,
                buttonBGRestingDark: null != (a = null != c ? c : o) ? a : null == h ? void 0 : h.dark,
                buttonBGRestingLight: null != (m = null != u ? u : o) ? m : null == h ? void 0 : h.light,
                coachtipAvatar: null != d ? d : null == e ? void 0 : e.avatar
            }
        }, [t, n, s, o, c, u, d, e])
    },
    m = e => ({
        bannerUrl: e.bannerUrl,
        bannerAnimatedUrl: e.bannerAnimatedUrl
    }),
    p = e => ({
        bannerURL: e.bannerURL,
        bannerAnimatedURL: e.bannerAnimatedURL
    })