/** chunk id: 479026 params = (module,exports,require) **/
l.d(t, {
    e: () => d
});
var i = l(64700),
    n = l(793574),
    r = l(590180),
    a = l(315949),
    u = l(572595),
    s = l(57020),
    o = l(976860),
    c = l(901123);

function d(e) {
    let {
        sku: t,
        analyticsLocations: l,
        analyticsSource: d = n.A.USER_PROFILE_WISHLIST,
        giftRecipient: h,
        giftingOrigin: p
    } = e;
    return (0, a.A)(), i.useCallback(() => {
        let e = r.A.getProduct(t.id),
            i = r.A.getCategoryForProduct(t.id);
        null == e || null == i ? (0, o.pX)(`${c.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`) : (0, u.t)({
            product: e,
            category: i,
            shouldCheckoutWithOrbs: (0, s.A)({
                product: e
            }),
            analyticsLocations: l ?? [],
            analyticsSource: d,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: h,
            giftingOrigin: p
        })
    }, [l, d, h, p, t.id])
}