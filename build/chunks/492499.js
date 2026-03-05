/** chunk id: 492499, original params: e,t,n (module,exports,require) **/
n.d(t, {
    M: () => g
});
var i = n(64700),
    s = n(379197),
    l = n(488430),
    a = n(311907),
    r = n(457421),
    o = n(940622),
    d = n(559474),
    c = n(985018),
    u = n(795056),
    _ = n(996613);
let g = () => {
    let e = (0, o.mb)(d.RN.UPSELL_BANNER),
        t = (0, o.mb)(d.RN.UPSELL_BANNER_POPOUT),
        n = (0, a.bG)([r.A], () => r.A.getMarketingBySurface(s.R.EDIT_PROFILE_SETTINGS)),
        g = i.useMemo(() => null != n ? n : {
            asset: _,
            popoutAsset: u,
            title: c.intl.string(c.t.QZVVBh),
            body: c.intl.string(c.t.sajmAq),
            version: 0,
            revertTextColor: !1
        }, [n]);
    return i.useMemo(() => ({
        ...g,
        type: l.G.BANNER,
        asset: e ?? g.asset,
        popoutAsset: t ?? g.popoutAsset
    }), [e, t, g])
}