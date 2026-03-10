/** chunk id: 684910 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(64700),
    n = t(311907),
    o = t(475743),
    i = t(828596),
    a = t(124338);

function s(e) {
    let {
        productId: l,
        includePricing: t = !1,
        ignoreCache: s = !1
    } = e, [d, c, u] = (0, n.yK)([a.A], () => [a.A.getProduct(l), a.A.isFetching(l), a.A.getApiError(l)]), h = (0, o.A)(t), m = (0, o.A)(s), p = !!l && !c && u?.status !== 404 && u?.status !== 429, _ = null == d || t !== h || s !== m;
    return (0, r.useEffect)(() => {
        p && _ && (0, i.M0)({
            productId: l,
            includePricing: t,
            ignoreCache: s
        })
    }, [p, _, l, t, s]), {
        product: d,
        isFetching: c,
        apiError: u
    }
}