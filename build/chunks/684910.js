/** chunk id: 684910, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(64700),
    o = t(311907),
    n = t(475743),
    i = t(828596),
    a = t(124338);

function d(e) {
    let {
        productId: l,
        includePricing: t = !1,
        includeUnpublished: d = !1,
        ignoreCache: c = !1
    } = e, [s, u, h] = (0, o.yK)([a.A], () => [a.A.getProduct(l), a.A.isFetching(l), a.A.getApiError(l)]), p = (0, n.A)(t), m = (0, n.A)(d), _ = (0, n.A)(c), b = !!l && !u && h?.status !== 404 && h?.status !== 429, S = null == s || t !== p || d !== m || c !== _;
    return (0, r.useEffect)(() => {
        b && S && (0, i.M0)({
            productId: l,
            includePricing: t,
            includeUnpublished: d,
            ignoreCache: c
        })
    }, [b, S, l, t, d, c]), {
        product: s,
        isFetching: u,
        apiError: h
    }
}