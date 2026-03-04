/** chunk id: 828596, original params: e,l,t (module,exports,require) **/
t.d(l, {
    M0: () => u,
    vZ: () => c
});
var r = t(73153),
    o = t(198982);
t(384726);
var n = t(371794),
    a = t(124338),
    i = t(631467),
    d = t(507832),
    s = t(652215);
async function c(e) {
    let {
        collectionId: l,
        includeUnpublishedProducts: t = !1,
        includeUnpublishedCollection: d = !1,
        includePricing: c = !1,
        ignoreCache: u = !1
    } = e;
    if (!l || a.A.isFetching(l)) return;
    let h = a.A.getApiError(l);
    if (h?.status !== 404 && h?.status !== 429) try {
        r.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH",
            collectionId: l
        });
        let e = await (0, n.aP)({
            url: s.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(l),
            query: {
                collection_id: l,
                include_unpublished_products: t,
                include_unpublished_collection: d,
                include_pricing: c,
                ignore_cache: u
            },
            rejectWithError: !0
        });
        r.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS",
            collection: i.A.fromServer(e.body)
        })
    } catch (t) {
        let e = new o.LG(t);
        throw r.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE",
            collectionId: l,
            apiError: e
        }), e
    }
}
async function u(e) {
    let {
        productId: l,
        includePricing: t = !1,
        includeUnpublished: i = !1,
        ignoreCache: c = !1
    } = e;
    if (!l || a.A.isFetching(l)) return;
    let u = a.A.getApiError(l);
    if (u?.status !== 404 && u?.status !== 429) try {
        r.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH",
            productId: l
        });
        let e = await (0, n.aP)({
            url: s.Rsh.STOREFRONT_PRODUCT_WITH_SKUS(l),
            query: {
                include_pricing: t,
                include_unpublished: i,
                ignore_cache: c
            },
            rejectWithError: !0
        });
        r.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS",
            product: d.A.fromServer(e.body)
        })
    } catch (t) {
        let e = new o.LG(t);
        throw r.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE",
            productId: l,
            apiError: e
        }), e
    }
}