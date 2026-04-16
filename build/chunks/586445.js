/** chunk id: 586445 params = (module,exports,require) **/
n.d(t, {
    V: () => u
});
var a = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(954571),
    l = n(957565),
    c = n(758836),
    o = n(652215),
    d = n(985018);

function u(e) {
    let {
        skuId: t,
        tab: n,
        onTrackClick: u
    } = e, m = r.useCallback(() => {
        s.default.track(o.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
            sku_id: t
        }), u?.(c.sH.COPY_LINK);
        let e = `${location.protocol}//${location.host}${o.BVt.COLLECTIBLES_SHOP}${(0,c.cw)(n)?`?tab=${n}`:""}#itemSkuId=${t}`;
        (0, l.C)(e, () => (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["L/PwZf"]), i.ToastType.SUCCESS)))
    }, [t, n, u]);
    return (0, a.jsx)(i.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: m,
        icon: i.qYV,
        variant: "overlay-secondary",
        size: "sm"
    })
}