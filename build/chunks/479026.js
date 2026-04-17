/** chunk id: 479026 params = (module,exports,require) **/
i.d(t, {
    e: () => d
});
var n = i(64700),
    r = i(793574),
    l = i(590180),
    o = i(315949),
    u = i(572595),
    s = i(57020),
    a = i(976860),
    c = i(901123);

function d(e) {
    let {
        sku: t,
        analyticsLocations: i,
        analyticsSource: d = r.A.USER_PROFILE_WISHLIST,
        giftRecipient: C,
        giftingOrigin: p
    } = e;
    return (0, o.A)(), n.useCallback(() => {
        let e = l.A.getProduct(t.id),
            n = l.A.getCategoryForProduct(t.id);
        null == e || null == n ? (0, a.pX)(`${c.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`) : (0, u.t)({
            product: e,
            category: n,
            shouldCheckoutWithOrbs: (0, s.A)({
                product: e
            }),
            analyticsLocations: i ?? [],
            analyticsSource: d,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: C,
            giftingOrigin: p
        })
    }, [i, d, C, p, t.id])
}