/** chunk id: 479026 params = (module,exports,require) **/
n.d(t, {
    e: () => d
});
var r = n(64700),
    i = n(793574),
    l = n(590180),
    o = n(315949),
    u = n(572595),
    a = n(57020),
    s = n(976860),
    c = n(901123);

function d(e) {
    let {
        sku: t,
        analyticsLocations: n,
        analyticsSource: d = i.A.USER_PROFILE_WISHLIST,
        giftRecipient: C,
        giftingOrigin: p
    } = e;
    return (0, o.A)(), r.useCallback(() => {
        let e = l.A.getProduct(t.id),
            r = l.A.getCategoryForProduct(t.id);
        null == e || null == r ? (0, s.pX)(`${c.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`) : (0, u.t)({
            product: e,
            category: r,
            shouldCheckoutWithOrbs: (0, a.A)({
                product: e
            }),
            analyticsLocations: n ?? [],
            analyticsSource: d,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: C,
            giftingOrigin: p
        })
    }, [n, d, C, p, t.id])
}