/** chunk id: 586445 params = (module,exports,require) **/
n.d(t, {
    V: () => u
});
var r = n(627968),
    a = n(64700),
    i = n(397927),
    l = n(954571),
    s = n(957565),
    o = n(758836),
    c = n(652215),
    d = n(985018);

function u(e) {
    let {
        skuId: t,
        tab: n
    } = e, u = a.useCallback(() => {
        l.default.track(c.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
            sku_id: t
        });
        let e = `${location.protocol}//${location.host}${c.BVt.COLLECTIBLES_SHOP}${(0,o.cw)(n)?`?tab=${n}`:""}#itemSkuId=${t}`;
        (0, s.C)(e, () => (0, i.showToast)((0, i.createToast)(d.intl.string(d.t["L/PwZf"]), i.ToastType.SUCCESS)))
    }, [t, n]);
    return (0, r.jsx)(i.K0, {
        "aria-label": d.intl.string(d.t.WqhZss),
        onClick: u,
        icon: i.qYV,
        variant: "overlay-secondary",
        size: "sm"
    })
}