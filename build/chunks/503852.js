/** Chunk was on 96914 **/
/** chunk id: 503852, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Z: () => i,
    q: () => c
});
var n, o = r(64700),
    a = r(954571),
    s = r(652215),
    c = ((n = {}).DETAIL = "Boost Perk Shop Details", n.DEACTIVATE = "Boost Perk Shop Disable", n);

function i(e, t, r) {
    o.useEffect(() => {
        a.default.track(s.HAw.OPEN_MODAL, {
            type: r,
            sku_id: t.skuId,
            guild_id: e
        })
    }, [r, e, t.skuId])
}