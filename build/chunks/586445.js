/** chunk id: 586445 params = (module,exports,require) **/
a.d(t, {
    V: () => u
});
var n = a(627968),
    r = a(64700),
    i = a(397927),
    s = a(954571),
    l = a(957565),
    o = a(758836),
    c = a(652215),
    d = a(985018);

function u(e) {
    let {
        skuId: t,
        tab: a,
        onTrackClick: u
    } = e, m = r.useCallback(() => {
        s.default.track(c.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
            sku_id: t
        }), u?.(o.sH.COPY_LINK);
        let e = `${location.protocol}//${location.host}${c.BVt.COLLECTIBLES_SHOP}${(0,o.cw)(a)?`?tab=${a}`:""}#itemSkuId=${t}`;
        (0, l.C)(e, () => (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["L/PwZf"]), i.ToastType.SUCCESS)))
    }, [t, a, u]);
    return (0, n.jsx)(i.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: m,
        icon: i.qYV,
        variant: "overlay-secondary",
        size: "sm"
    })
}