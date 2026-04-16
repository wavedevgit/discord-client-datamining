/** chunk id: 503852 params = (module,exports,require) **/
s.d(a, {
    Z: () => i,
    q: () => l
});
var r, t = s(64700),
    n = s(954571),
    o = s(652215),
    l = ((r = {}).DETAIL = "Boost Perk Shop Details", r.DEACTIVATE = "Boost Perk Shop Disable", r);

function i(e, a, s) {
    t.useEffect(() => {
        n.default.track(o.HAw.OPEN_MODAL, {
            type: s,
            sku_id: a.skuId,
            guild_id: e
        })
    }, [s, e, a.skuId])
}