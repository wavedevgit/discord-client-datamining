/** chunk id: 503852, original params: e,t,a (module,exports,require) **/
a.d(t, {
    Z: () => o,
    q: () => l
});
var r, n = a(64700),
    s = a(954571),
    i = a(652215),
    l = ((r = {}).DETAIL = "Boost Perk Shop Details", r.DEACTIVATE = "Boost Perk Shop Disable", r);

function o(e, t, a) {
    n.useEffect(() => {
        s.default.track(i.HAw.OPEN_MODAL, {
            type: a,
            sku_id: t.skuId,
            guild_id: e
        })
    }, [a, e, t.skuId])
}