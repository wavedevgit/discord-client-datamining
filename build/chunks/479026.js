/** chunk id: 479026 params = (module,exports,require) **/
i.d(t, {
    e: () => c
});
var r = i(64700),
    l = i(793574),
    n = i(590180),
    s = i(315949),
    u = i(572595),
    o = i(57020),
    a = i(976860),
    d = i(901123);

function c(e) {
    let {
        sku: t,
        analyticsLocations: i,
        analyticsSource: c = l.A.USER_PROFILE_WISHLIST,
        giftRecipient: I,
        giftingOrigin: h
    } = e;
    return (0, s.A)(), r.useCallback(() => {
        let e = n.A.getProduct(t.id),
            r = n.A.getCategoryForProduct(t.id);
        null == e || null == r ? (0, a.pX)(`${d.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`) : (0, u.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, o.A)({
                product: e
            }),
            analyticsLocations: i ?? [],
            analyticsSource: c,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: I,
            giftingOrigin: h
        })
    }, [i, c, I, h, t.id])
}