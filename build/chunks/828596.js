/** chunk id: 828596 params = (module,exports,require) **/
l.d(t, {
    M0: () => m,
    vZ: () => h
});
var r = l(574381),
    n = l(73153),
    i = l(198982);
l(384726);
var o = l(773669),
    a = l(371794),
    s = l(124338),
    d = l(631467),
    c = l(507832),
    u = l(652215);
async function h(e) {
    let {
        collectionId: t,
        includeUnpublishedProducts: l = !1,
        includeUnpublishedCollection: c = !1,
        includePricing: h = !1,
        ignoreCache: m = !1
    } = e;
    if (!t || s.A.isFetching(t)) return;
    let p = s.A.getApiError(t);
    if (p?.status !== 404 && p?.status !== 429) try {
        n.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH",
            collectionId: t
        });
        let e = await (0, a.aP)({
            url: u.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(t),
            query: {
                locale: o.default.locale,
                collection_id: t,
                include_unpublished_products: l,
                include_unpublished_collection: c,
                include_pricing: h,
                ignore_cache: m,
                include_google_sku_ids: (0, r.m0)()
            },
            rejectWithError: !0
        });
        n.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS",
            collection: d.A.fromServer(e.body)
        })
    } catch (l) {
        let e = new i.LG(l);
        throw n.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE",
            collectionId: t,
            apiError: e
        }), e
    }
}
async function m(e) {
    let {
        productId: t,
        includePricing: l = !1,
        ignoreCache: d = !1
    } = e;
    if (!t || s.A.isFetching(t)) return;
    let h = s.A.getApiError(t);
    if (h?.status !== 404 && h?.status !== 429) try {
        n.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH",
            productId: t
        });
        let e = await (0, a.aP)({
            url: u.Rsh.STOREFRONT_PRODUCT_WITH_SKUS(t),
            query: {
                locale: o.default.locale,
                include_pricing: l,
                ignore_cache: d,
                include_google_sku_ids: (0, r.m0)()
            },
            rejectWithError: !0
        });
        n.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS",
            product: c.A.fromServer(e.body)
        })
    } catch (l) {
        let e = new i.LG(l);
        throw n.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE",
            productId: t,
            apiError: e
        }), e
    }
}