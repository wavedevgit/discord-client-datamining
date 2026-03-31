/** chunk id: 86889 params = (module,exports,require) **/
l.d(e, {
    D: () => c
});
var n = l(627968),
    s = l(64700),
    r = l(217905),
    a = l(688810),
    i = l(954571),
    o = l(652215);

function c(t) {
    let {
        appId: e,
        skuId: l,
        ...c
    } = t, {
        analyticsLocations: d
    } = (0, a.Ay)();
    return s.useEffect(() => {
        i.default.track(o.HAw.VIEW_PREMIUM_APP_EXPANDED_PRODUCT_CARD, {
            application_id: e,
            sku_id: l,
            location_stack: d
        })
    }, [d, e, l]), (0, n.jsx)(r.F, {
        ...c
    })
}