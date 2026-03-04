/** chunk id: 479026, original params: e,t,l (module,exports,require) **/
l.d(t, {
    e: () => c
});
var r = l(64700),
    n = l(793574),
    i = l(590180),
    a = l(315949),
    s = l(572595),
    u = l(57020),
    o = l(976860),
    d = l(901123);

function c(e) {
    let {
        sku: t,
        analyticsLocations: l,
        analyticsSource: c = n.A.USER_PROFILE_WISHLIST
    } = e;
    return (0, a.A)(), r.useCallback(() => {
        let e = i.A.getProduct(t.id),
            r = i.A.getCategoryForProduct(t.id);
        null == e || null == r ? (0, o.pX)(`${d.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`) : (0, s.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, u.A)({
                product: e
            }),
            analyticsLocations: l ?? [],
            analyticsSource: c,
            returnRef: void 0,
            tab: void 0
        })
    }, [l, c, t.id])
}