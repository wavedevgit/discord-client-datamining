/** chunk id: 828596 params = (module,exports,require) **/
t.d(l, {
    M0: () => m,
    vZ: () => h
});
var r = t(574381),
    n = t(73153),
    o = t(198982);
t(384726);
var i = t(773669),
    a = t(371794),
    s = t(124338),
    d = t(631467),
    c = t(507832),
    u = t(652215);
async function h(e) {
    let {
        collectionId: l,
        includeUnpublishedProducts: t = !1,
        includeUnpublishedCollection: c = !1,
        includePricing: h = !1,
        ignoreCache: m = !1
    } = e;
    if (!l || s.A.isFetching(l)) return;
    let p = s.A.getApiError(l);
    if (p?.status !== 404 && p?.status !== 429) try {
        n.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH",
            collectionId: l
        });
        let e = await (0, a.aP)({
            url: u.Rsh.STOREFRONT_COLLECTION_WITH_PRODUCTS(l),
            query: {
                locale: i.default.locale,
                collection_id: l,
                include_unpublished_products: t,
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
    } catch (t) {
        let e = new o.LG(t);
        throw n.h.dispatch({
            type: "STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE",
            collectionId: l,
            apiError: e
        }), e
    }
}
async function m(e) {
    let {
        productId: l,
        includePricing: t = !1,
        ignoreCache: d = !1
    } = e;
    if (!l || s.A.isFetching(l)) return;
    let h = s.A.getApiError(l);
    if (h?.status !== 404 && h?.status !== 429) try {
        n.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH",
            productId: l
        });
        let e = await (0, a.aP)({
            url: u.Rsh.STOREFRONT_PRODUCT_WITH_SKUS(l),
            query: {
                locale: i.default.locale,
                include_pricing: t,
                ignore_cache: d,
                include_google_sku_ids: (0, r.m0)()
            },
            rejectWithError: !0
        });
        n.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS",
            product: c.A.fromServer(e.body)
        })
    } catch (t) {
        let e = new o.LG(t);
        throw n.h.dispatch({
            type: "STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE",
            productId: l,
            apiError: e
        }), e
    }
}