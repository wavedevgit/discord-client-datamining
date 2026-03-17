/** chunk id: 684910 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var r = l(64700),
    n = l(311907),
    i = l(475743),
    o = l(828596),
    a = l(124338);

function s(e) {
    let {
        productId: t,
        includePricing: l = !1,
        ignoreCache: s = !1
    } = e, [d, c, u] = (0, n.yK)([a.A], () => [a.A.getProduct(t), a.A.isFetching(t), a.A.getApiError(t)]), h = (0, i.A)(l), m = (0, i.A)(s), p = !!t && !c && u?.status !== 404 && u?.status !== 429, _ = null == d || l !== h || s !== m;
    return (0, r.useEffect)(() => {
        p && _ && (0, o.M0)({
            productId: t,
            includePricing: l,
            ignoreCache: s
        })
    }, [p, _, t, l, s]), {
        product: d,
        isFetching: c,
        apiError: u
    }
}