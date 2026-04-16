/** chunk id: 966619 params = (module,exports,require) **/
n.d(t, {
    R: () => l
});
var a = n(64700),
    r = n(954571),
    i = n(440938),
    s = n(652215);

function l(e) {
    let {
        skuId: t,
        productSkuIds: n,
        analyticsLocations: l
    } = e, {
        cardId: o,
        sessionId: c
    } = (0, i.uM)() ?? {};
    return a.useCallback(e => {
        r.default.track(s.HAw.SHOP_PRODUCT_DETAIL_PAGE_CLICKED, {
            sku_id: t,
            cta: e,
            shop_session_id: c,
            card_id: o,
            product_sku_ids: n,
            location_stack: l
        })
    }, [t, l, o, n, c])
}