/** chunk id: 179262, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    A: () => o
});
var r = l(64700),
    a = l(311907),
    n = l(475743),
    i = l(602823),
    s = l(16667);
let o = e => {
    let {
        collectionId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollection: o = !1,
        includePricing: d = !1,
        ignoreCache: c = !1
    } = e, [u, h, m] = (0, a.yK)([s.A], () => [s.A.getCollection(t), s.A.isFetching(t), s.A.getApiError(t)]), x = (0, n.A)(l), p = (0, n.A)(o), b = (0, n.A)(d), g = (0, n.A)(c), f = !!t && !h && m?.status !== 404 && m?.status !== 429, v = null == u || l !== x || o !== p || d !== b || c !== g;
    return (0, r.useEffect)(() => {
        f && v && (0, i.yx)({
            collectionId: t,
            includeUnpublishedProducts: l,
            includeUnpublishedCollection: o,
            includePricing: d,
            ignoreCache: c
        })
    }, [f, v, t, l, o, d, c]), {
        collection: u,
        isFetching: h,
        apiError: m
    }
}