/** chunk id: 586445 params = (module,exports,require) **/
a.d(t, {
    V: () => u
});
var n = a(627968),
    r = a(64700),
    i = a(397927),
    s = a(954571),
    l = a(957565),
    c = a(758836),
    o = a(652215),
    d = a(985018);

function u(e) {
    let {
        skuId: t,
        tab: a
    } = e, u = r.useCallback(() => {
        s.default.track(o.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
            sku_id: t
        });
        let e = `${location.protocol}//${location.host}${o.BVt.COLLECTIBLES_SHOP}${(0,c.cw)(a)?`?tab=${a}`:""}#itemSkuId=${t}`;
        (0, l.C)(e, () => (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["L/PwZf"]), i.ToastType.SUCCESS)))
    }, [t, a]);
    return (0, n.jsx)(i.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: u,
        icon: i.qYV,
        variant: "overlay-secondary",
        size: "sm"
    })
}