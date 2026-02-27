/** chunk id: 151645, original params: e,t,l (module,exports,require) **/
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
        skuId: t,
        includePricing: l = !1,
        includeUnpublished: o = !1,
        ignoreCache: d = !1
    } = e, [c, u, h] = (0, a.yK)([s.A], () => [s.A.getProductForSku(t), s.A.isFetching(t), s.A.getApiError(t)]), m = (0, n.A)(l), x = (0, n.A)(o), p = (0, n.A)(d), b = !!t && !u && h?.status !== 404 && h?.status !== 429, g = null == c || l !== m || o !== x || d !== p;
    return (0, r.useEffect)(() => {
        b && g && (0, i.xM)({
            skuId: t,
            includePricing: l,
            includeUnpublished: o,
            ignoreCache: d
        })
    }, [b, g, t, l, o, d]), {
        product: c,
        isFetching: u,
        apiError: h
    }
}