/** chunk id: 124338 params = (module,exports,require) **/
l.d(t, {
    A: () => h
});
var r = l(311907),
    n = l(73153);
let i = {},
    o = {},
    a = {},
    s = {},
    d = new Set,
    c = {};
class u extends r.Ay.Store {
    static displayName = "StorefrontStore";
    getCollection(e) {
        return null != e ? i[e] : null
    }
    getProduct(e) {
        return null != e ? o[e] : null
    }
    getProductBySkuId(e) {
        let t = null != e ? a[e] : null;
        return t?.productId != null ? o[t.productId] : null
    }
    getSku(e) {
        return null != e ? a[e] : null
    }
    getSkuPrices(e) {
        return null != e ? s[e] : null
    }
    isFetching(e) {
        return null != e && d.has(e)
    }
    getApiError(e) {
        return null != e ? c[e] : null
    }
}
let h = new u(n.h, {
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH: e => {
        let {
            collectionId: t
        } = e, l = i[t];
        l?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                d.add(e)
            }), d.add(e.id)
        }), d.add(t)
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS: e => {
        let {
            collection: t
        } = e;
        t.products?.forEach(e => {
            e.skus.forEach(e => {
                a[e.id] = e, delete c[e.id], d.delete(e.id)
            }), o[e.id] = e, delete c[e.id], d.delete(e.id)
        }), i[t.id] = t, delete c[t.id], d.delete(t.id)
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE: e => {
        let {
            collectionId: t,
            apiError: l
        } = e, r = i[t];
        r?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                d.delete(e)
            }), d.delete(e.id)
        }), c[t] = l, d.delete(t)
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH: e => {
        let {
            productId: t
        } = e, l = o[t];
        l?.skuIds.forEach(e => {
            d.add(e)
        }), d.add(t)
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS: e => {
        let {
            product: t
        } = e;
        t.skus.forEach(e => {
            a[e.id] = e, delete c[e.id], d.delete(e.id)
        }), o[t.id] = t, d.delete(t.id), delete c[t.id]
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE: e => {
        let {
            productId: t,
            apiError: l
        } = e, r = o[t];
        r?.skuIds.forEach(e => {
            d.delete(e)
        }), c[t] = l, d.delete(t)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH: e => {
        let {
            skuId: t
        } = e, l = a[t], r = l?.productId != null ? o[l.productId] : null;
        r?.skuIds.forEach(e => {
            d.add(e)
        }), null != r && d.add(r.id), d.add(t)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_SUCCESS: e => {
        let {
            product: t
        } = e;
        t.skus.forEach(e => {
            a[e.id] = e, delete c[e.id], d.delete(e.id)
        }), o[t.id] = t, delete c[t.id], d.delete(t.id)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_FAILURE: e => {
        let {
            skuId: t,
            apiError: l
        } = e, r = a[t], n = r?.productId != null ? o[r.productId] : null;
        n?.skuIds.forEach(e => {
            d.delete(e)
        }), null != n && d.delete(n.id), c[t] = l, d.delete(t)
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: e => {
        let {
            skuIds: t
        } = e;
        t.forEach(e => {
            let t = a[e],
                l = t?.productId != null ? o[t.productId] : null;
            l?.skuIds.forEach(e => {
                d.add(e)
            }), null != l && d.add(l.id), d.add(e)
        })
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: e => {
        let {
            products: t
        } = e;
        t.forEach(e => {
            e.skus.forEach(e => {
                a[e.id] = e, delete c[e.id], d.delete(e.id)
            }), o[e.id] = e, delete c[e.id], d.delete(e.id)
        })
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: e => {
        let {
            skuIds: t,
            apiError: l
        } = e;
        t.forEach(e => {
            let t = a[e],
                r = t?.productId != null ? o[t.productId] : null;
            r?.skuIds.forEach(e => {
                d.delete(e)
            }), null != r && d.delete(r.id), c[e] = l, d.delete(e)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH: e => {
        let {
            skuIds: t
        } = e;
        t.forEach(e => {
            d.add(e)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH_SUCCESS: e => {
        let {
            skuPrices: t
        } = e;
        Object.entries(t).forEach(e => {
            let [t, l] = e;
            s[t] = l, delete c[t], d.delete(t)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH_FAILURE: e => {
        let {
            skuIds: t,
            apiError: l
        } = e;
        t.forEach(e => {
            d.delete(e), c[e] = l
        })
    },
    LOGOUT: e => {
        i = {}, o = {}, a = {}, s = {}, d = new Set, c = {}
    }
})