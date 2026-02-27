/** chunk id: 602823, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    xM: () => u,
    yx: () => c
});
var r = l(73153),
    a = l(198982),
    n = l(371794),
    i = l(16667),
    s = l(265212),
    o = l(19945),
    d = l(652215);
async function c(e) {
    let {
        collectionId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollection: o = !1,
        includePricing: c = !1,
        ignoreCache: u = !1
    } = e;
    if (!t || i.A.isFetching(t)) return;
    let h = i.A.getApiError(t);
    if (h?.status !== 404 && h?.status !== 429) try {
        r.h.dispatch({
            type: "COLLECTIBLES_COLLECTION_FETCH",
            collectionId: t
        });
        let e = await (0, n.aP)({
            url: d.Rsh.COLLECTION_PUBLISHED_LISTINGS_SKU(t),
            query: {
                collection_id: t,
                include_unpublished_products: l,
                include_unpublished_collection: o,
                include_pricing: c,
                ignore_cache: u
            },
            rejectWithError: !0
        });
        r.h.dispatch({
            type: "COLLECTIBLES_COLLECTION_FETCH_SUCCESS",
            collection: s.A.fromServer(e.body)
        })
    } catch (l) {
        let e = new a.LG(l);
        throw r.h.dispatch({
            type: "COLLECTIBLES_COLLECTION_FETCH_FAILURE",
            collectionId: t,
            apiError: e
        }), e
    }
}
async function u(e) {
    let {
        skuId: t,
        includePricing: l = !1,
        includeUnpublished: s = !1,
        ignoreCache: c = !1
    } = e;
    if (!t || i.A.isFetching(t)) return;
    let u = i.A.getApiError(t);
    if (u?.status !== 404 && u?.status !== 429) try {
        r.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH",
            skuId: t
        });
        let e = await (0, n.aP)({
            url: d.Rsh.PRODUCT_FOR_SKU(t),
            query: {
                include_pricing: l,
                include_unpublished: s,
                ignore_cache: c
            },
            rejectWithError: !0
        });
        r.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS",
            product: o.A.fromServer(e.body)
        })
    } catch (l) {
        let e = new a.LG(l);
        throw r.h.dispatch({
            type: "COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE",
            skuId: t,
            apiError: e
        }), e
    }
}