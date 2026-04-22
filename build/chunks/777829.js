/** chunk id: 777829 params = (module,exports,require) **/
r.d(e, {
    f: () => o
});
var n = r(64700),
    i = r(954571),
    l = r(440938),
    s = r(298072),
    a = r(623373),
    u = r(652215);

function o(t) {
    let {
        product: e,
        analyticsLocations: r
    } = t, {
        cardId: o,
        sessionId: c,
        tilePosition: d
    } = (0, l.uM)() ?? {}, k = (0, s.Q)(e);
    return n.useCallback((t, n) => {
        i.default.track(u.HAw.SHOP_CARD_CLICKED, {
            sku_id: (0, a.B1)(e) ? e.variants[n ?? k]?.skuId ?? e.skuId : e.skuId,
            cta: t,
            shop_session_id: c,
            card_id: o,
            product_sku_ids: (0, a.v8)(e),
            location_stack: r,
            position_in_section: d
        })
    }, [e, k, c, o, r, d])
}