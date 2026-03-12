/** chunk id: 492499 params = (module,exports,require) **/
n.d(t, {
    M: () => m
});
var i = n(64700),
    s = n(379197),
    l = n(488430),
    r = n(311907),
    a = n(457421),
    o = n(940622),
    d = n(559474),
    c = n(985018),
    u = n(795056),
    _ = n(996613);
let m = () => {
    let e = (0, o.mb)(d.RN.UPSELL_BANNER),
        t = (0, o.mb)(d.RN.UPSELL_BANNER_POPOUT),
        n = (0, r.bG)([a.A], () => a.A.getMarketingBySurface(s.R.EDIT_PROFILE_SETTINGS)),
        m = i.useMemo(() => null != n ? n : {
            asset: _,
            popoutAsset: u,
            title: c.intl.string(c.t.QZVVBh),
            body: c.intl.string(c.t.sajmAq),
            version: 0,
            revertTextColor: !1
        }, [n]);
    return i.useMemo(() => ({
        ...m,
        type: l.G.BANNER,
        asset: e ?? m.asset,
        popoutAsset: t ?? m.popoutAsset
    }), [e, t, m])
}