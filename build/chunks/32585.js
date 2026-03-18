/** chunk id: 32585 params = (module,exports,require) **/
a.d(t, {
    A: () => d
});
var l = a(64700),
    r = a(311907),
    n = a(475743),
    s = a(828596),
    o = a(124338);

function d(e) {
    let {
        collectionId: t,
        includeUnpublishedProducts: a = !1,
        includeUnpublishedCollection: d = !1,
        includePricing: i = !1,
        ignoreCache: c = !1
    } = e, [u, x, h] = (0, r.yK)([o.A], () => [o.A.getCollection(t), o.A.isFetching(t), o.A.getApiError(t)]), m = (0, n.A)(a), b = (0, n.A)(d), p = (0, n.A)(i), g = (0, n.A)(c), f = !!t && !x && h?.status !== 404 && h?.status !== 429, j = null == u || a !== m || d !== b || i !== p || c !== g;
    return (0, l.useEffect)(() => {
        f && j && (0, s.vZ)({
            collectionId: t,
            includeUnpublishedProducts: a,
            includeUnpublishedCollection: d,
            includePricing: i,
            ignoreCache: c
        })
    }, [f, j, t, a, d, i, c]), {
        collection: u,
        isFetching: x,
        apiError: h
    }
}