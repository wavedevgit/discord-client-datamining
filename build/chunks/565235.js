/** chunk id: 565235, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(64700),
    o = t(311907),
    n = t(475743),
    a = t(602823),
    i = t(16667);
let d = e => {
    let {
        productId: l,
        includePricing: t = !1,
        includeUnpublished: d = !1,
        ignoreCache: s = !1
    } = e, [c, u, h] = (0, o.yK)([i.A], () => [i.A.getProduct(l), i.A.isFetching(l), i.A.getApiError(l)]), p = (0, n.A)(t), m = (0, n.A)(d), b = (0, n.A)(s), _ = !!l && !u && h?.status !== 404 && h?.status !== 429, C = null == c || t !== p || d !== m || s !== b;
    return (0, r.useEffect)(() => {
        _ && C && (0, a.RV)({
            productId: l,
            includePricing: t,
            includeUnpublished: d,
            ignoreCache: s
        })
    }, [_, C, l, t, d, s]), {
        product: c,
        isFetching: u,
        apiError: h
    }
}