/** chunk id: 32585 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var l = a(64700),
    r = a(311907),
    n = a(475743),
    s = a(828596),
    d = a(124338);

function o(e) {
    let {
        collectionId: t,
        includeUnpublishedProducts: a = !1,
        includeUnpublishedCollection: o = !1,
        includePricing: i = !1,
        ignoreCache: c = !1
    } = e, [x, u, h] = (0, r.yK)([d.A], () => [d.A.getCollection(t), d.A.isFetching(t), d.A.getApiError(t)]), m = (0, n.A)(a), b = (0, n.A)(o), p = (0, n.A)(i), g = (0, n.A)(c), f = !!t && !u && h?.status !== 404 && h?.status !== 429, j = null == x || a !== m || o !== b || i !== p || c !== g;
    return (0, l.useEffect)(() => {
        f && j && (0, s.vZ)({
            collectionId: t,
            includeUnpublishedProducts: a,
            includeUnpublishedCollection: o,
            includePricing: i,
            ignoreCache: c
        })
    }, [f, j, t, a, o, i, c]), {
        collection: x,
        isFetching: u,
        apiError: h
    }
}