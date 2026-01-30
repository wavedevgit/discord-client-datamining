/** chunk id: 586445, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => d
});
var r = n(627968),
    l = n(64700),
    i = n(397927),
    a = n(954571),
    s = n(957565),
    o = n(758836),
    c = n(652215),
    u = n(985018);

function d(e) {
    let {
        skuId: t,
        tab: n
    } = e, d = l.useCallback(() => {
        a.default.track(c.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, {
            sku_id: t
        });
        let e = "".concat(location.protocol, "//").concat(location.host).concat(c.BVt.COLLECTIBLES_SHOP).concat((0, o.cw)(n) ? "?tab=".concat(n) : "", "#itemSkuId=").concat(t);
        (0, s.C)(e, () => (0, i.showToast)((0, i.createToast)(u.intl.string(u.t["L/PwZf"]), i.ToastType.SUCCESS)))
    }, [t, n]);
    return (0, r.jsx)(i.K0, {
        "aria-label": u.intl.string(u.t.WqhZss),
        onClick: d,
        icon: i.qYV,
        variant: "overlay-secondary",
        size: "sm"
    })
}