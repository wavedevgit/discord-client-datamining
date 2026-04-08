/** chunk id: 870308 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(64700),
    a = n(379197),
    i = n(488430),
    l = n(311907),
    o = n(554146),
    s = n(397927),
    _ = n(932001),
    u = n(457421),
    d = n(212407),
    c = n(158216),
    A = n(49999);
let g = 21552 == n.j ? () => {
    let e = (0, l.bG)([u.A], () => u.A.getMarketingBySurface(a.R.DESKTOP_SHOP_BUTTON)),
        t = !(0, s.ueM)(),
        [n, g] = (0, _.RF)(t ? o.M.COLLECTIBLES_SHOP_ENTRY_MARKETING : null, e?.version ?? 0, void 0, !0),
        p = (0, d.bv)(e),
        b = null != n ? ((e, t) => {
            if (t?.type === i.G.COACHMARK) {
                let e = t.refTargetBackground;
                return {
                    type: c.FF.COACHMARK,
                    title: () => t.title,
                    body: () => t.body,
                    assetDark: t.assetDark,
                    assetLight: t.assetLight,
                    badgeIcon: t.badgeIcon,
                    badgeText: t.badgeText,
                    entrypointBackgroundStyle: e?.style,
                    entryPointBackgroundAssets: {
                        srcDarkHovered: e?.asset?.hovered?.dark,
                        srcLightHovered: e?.asset?.hovered?.light
                    }
                }
            }
            return t?.type === i.G.TAB_TOOLTIP ? {
                type: c.FF.TAB_TOOLTIP,
                title: () => t.title,
                body: () => t.body,
                asset: t.asset,
                badgeIcon: t.badgeIcon,
                badgeText: t.badgeText,
                entrypointBackgroundStyle: t.refTargetBackground?.style,
                entryPointBackgroundAssets: {
                    srcDark: e.buttonBGRestingDark,
                    srcLight: e.buttonBGRestingLight,
                    srcDarkHovered: e.buttonBGHoverDark,
                    srcLightHovered: e.buttonBGHoverLight
                },
                hoverGradient: t.hoverGradient
            } : null
        })(p, e) : null,
        m = r.useCallback(() => {
            null != b && g(A.i.AUTO)
        }, [b, g]);
    return {
        shopButtonDisplayOptions: b,
        dismissShopButtonDC: m
    }
} : null