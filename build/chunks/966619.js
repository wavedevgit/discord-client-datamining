/** chunk id: 966619 params = (module,exports,require) **/
a.d(t, {
    R: () => l
});
var n = a(64700),
    r = a(954571),
    i = a(440938),
    s = a(652215);

function l(e) {
    let {
        skuId: t,
        productSkuIds: a,
        analyticsLocations: l
    } = e, {
        cardId: o,
        sessionId: c
    } = (0, i.uM)() ?? {};
    return n.useCallback(e => {
        r.default.track(s.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
            sku_id: t,
            cta: e,
            shop_session_id: c,
            card_id: o,
            product_sku_ids: a,
            location_stack: l
        })
    }, [t, l, o, a, c])
}