/** chunk id: 479026 params = (module,exports,require) **/
n.d(t, {
    e: () => u
});
var i = n(64700),
    l = n(793574),
    s = n(590180),
    a = n(315949),
    r = n(572595),
    o = n(57020),
    d = n(976860),
    c = n(901123);

function u(e) {
    let {
        sku: t,
        analyticsLocations: n,
        analyticsSource: u = l.A.USER_PROFILE_WISHLIST,
        giftRecipient: h,
        giftingOrigin: A
    } = e;
    return (0, a.A)(), i.useCallback(() => {
        let e = s.A.getProduct(t.id),
            i = s.A.getCategoryForProduct(t.id);
        null == e || null == i ? (0, d.pX)(`${c.BV.COLLECTIBLES_SHOP}#itemSkuId=${t.id}`) : (0, r.t)({
            product: e,
            category: i,
            shouldCheckoutWithOrbs: (0, o.A)({
                product: e
            }),
            analyticsLocations: n ?? [],
            analyticsSource: u,
            returnRef: void 0,
            tab: void 0,
            giftRecipient: h,
            giftingOrigin: A
        })
    }, [n, u, h, A, t.id])
}