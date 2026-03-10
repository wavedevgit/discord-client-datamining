/** chunk id: 124338 params = (module,exports,require) **/
t.d(l, {
    A: () => h
});
var r = t(311907),
    n = t(73153);
let o = {},
    i = {},
    a = {},
    s = {},
    d = new Set,
    c = {};
class u extends r.Ay.Store {
    static displayName = "StorefrontStore";
    getCollection(e) {
        return null != e ? o[e] : null
    }
    getProduct(e) {
        return null != e ? i[e] : null
    }
    getProductBySkuId(e) {
        let l = null != e ? a[e] : null;
        return l?.productId != null ? i[l.productId] : null
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
            collectionId: l
        } = e, t = o[l];
        t?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                d.add(e)
            }), d.add(e.id)
        }), d.add(l)
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS: e => {
        let {
            collection: l
        } = e;
        l.products?.forEach(e => {
            e.skus.forEach(e => {
                a[e.id] = e, delete c[e.id], d.delete(e.id)
            }), i[e.id] = e, delete c[e.id], d.delete(e.id)
        }), o[l.id] = l, delete c[l.id], d.delete(l.id)
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE: e => {
        let {
            collectionId: l,
            apiError: t
        } = e, r = o[l];
        r?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                d.delete(e)
            }), d.delete(e.id)
        }), c[l] = t, d.delete(l)
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH: e => {
        let {
            productId: l
        } = e, t = i[l];
        t?.skuIds.forEach(e => {
            d.add(e)
        }), d.add(l)
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS: e => {
        let {
            product: l
        } = e;
        l.skus.forEach(e => {
            a[e.id] = e, delete c[e.id], d.delete(e.id)
        }), i[l.id] = l, d.delete(l.id), delete c[l.id]
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE: e => {
        let {
            productId: l,
            apiError: t
        } = e, r = i[l];
        r?.skuIds.forEach(e => {
            d.delete(e)
        }), c[l] = t, d.delete(l)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH: e => {
        let {
            skuId: l
        } = e, t = a[l], r = t?.productId != null ? i[t.productId] : null;
        r?.skuIds.forEach(e => {
            d.add(e)
        }), null != r && d.add(r.id), d.add(l)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_SUCCESS: e => {
        let {
            product: l
        } = e;
        l.skus.forEach(e => {
            a[e.id] = e, delete c[e.id], d.delete(e.id)
        }), i[l.id] = l, delete c[l.id], d.delete(l.id)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_FAILURE: e => {
        let {
            skuId: l,
            apiError: t
        } = e, r = a[l], n = r?.productId != null ? i[r.productId] : null;
        n?.skuIds.forEach(e => {
            d.delete(e)
        }), null != n && d.delete(n.id), c[l] = t, d.delete(l)
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: e => {
        let {
            skuIds: l
        } = e;
        l.forEach(e => {
            let l = a[e],
                t = l?.productId != null ? i[l.productId] : null;
            t?.skuIds.forEach(e => {
                d.add(e)
            }), null != t && d.add(t.id), d.add(e)
        })
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: e => {
        let {
            products: l
        } = e;
        l.forEach(e => {
            e.skus.forEach(e => {
                a[e.id] = e, delete c[e.id], d.delete(e.id)
            }), i[e.id] = e, delete c[e.id], d.delete(e.id)
        })
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: e => {
        let {
            skuIds: l,
            apiError: t
        } = e;
        l.forEach(e => {
            let l = a[e],
                r = l?.productId != null ? i[l.productId] : null;
            r?.skuIds.forEach(e => {
                d.delete(e)
            }), null != r && d.delete(r.id), c[e] = t, d.delete(e)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH: e => {
        let {
            skuIds: l
        } = e;
        l.forEach(e => {
            d.add(e)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH_SUCCESS: e => {
        let {
            skuPrices: l
        } = e;
        Object.entries(l).forEach(e => {
            let [l, t] = e;
            s[l] = t, delete c[l], d.delete(l)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH_FAILURE: e => {
        let {
            skuIds: l,
            apiError: t
        } = e;
        l.forEach(e => {
            d.delete(e), c[e] = t
        })
    },
    LOGOUT: e => {
        o = {}, i = {}, a = {}, s = {}, d = new Set, c = {}
    }
})