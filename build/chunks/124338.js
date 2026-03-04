/** chunk id: 124338, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => h
});
var r = t(311907),
    o = t(73153);
let n = {},
    a = {},
    i = {},
    d = {},
    s = new Set,
    c = {};
class u extends r.Ay.Store {
    static displayName = "StorefrontStore";
    getCollection(e) {
        return null != e ? n[e] : null
    }
    getProduct(e) {
        return null != e ? a[e] : null
    }
    getProductBySkuId(e) {
        let l = null != e ? i[e] : null;
        return l?.productId != null ? a[l.productId] : null
    }
    getSku(e) {
        return null != e ? i[e] : null
    }
    getSkuPrices(e) {
        return null != e ? d[e] : null
    }
    isFetching(e) {
        return null != e && s.has(e)
    }
    getApiError(e) {
        return null != e ? c[e] : null
    }
}
let h = new u(o.h, {
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH: e => {
        let {
            collectionId: l
        } = e, t = n[l];
        t?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                s.add(e)
            }), s.add(e.id)
        }), s.add(l)
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_SUCCESS: e => {
        let {
            collection: l
        } = e;
        l.products?.forEach(e => {
            e.skus.forEach(e => {
                i[e.id] = e, delete c[e.id], s.delete(e.id)
            }), a[e.id] = e, delete c[e.id], s.delete(e.id)
        }), n[l.id] = l, delete c[l.id], s.delete(l.id)
    },
    STOREFRONT_COLLECTION_WITH_PRODUCTS_FETCH_FAILURE: e => {
        let {
            collectionId: l,
            apiError: t
        } = e, r = n[l];
        r?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                s.delete(e)
            }), s.delete(e.id)
        }), c[l] = t, s.delete(l)
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH: e => {
        let {
            productId: l
        } = e, t = a[l];
        t?.skuIds.forEach(e => {
            s.add(e)
        }), s.add(l)
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_SUCCESS: e => {
        let {
            product: l
        } = e;
        l.skus.forEach(e => {
            i[e.id] = e, delete c[e.id], s.delete(e.id)
        }), a[l.id] = l, s.delete(l.id), delete c[l.id]
    },
    STOREFRONT_PRODUCT_WITH_SKUS_FETCH_FAILURE: e => {
        let {
            productId: l,
            apiError: t
        } = e, r = a[l];
        r?.skuIds.forEach(e => {
            s.delete(e)
        }), c[l] = t, s.delete(l)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH: e => {
        let {
            skuId: l
        } = e, t = i[l], r = t?.productId != null ? a[t.productId] : null;
        r?.skuIds.forEach(e => {
            s.add(e)
        }), null != r && s.add(r.id), s.add(l)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_SUCCESS: e => {
        let {
            product: l
        } = e;
        l.skus.forEach(e => {
            i[e.id] = e, delete c[e.id], s.delete(e.id)
        }), a[l.id] = l, delete c[l.id], s.delete(l.id)
    },
    STOREFRONT_PRODUCT_BY_SKU_ID_FETCH_FAILURE: e => {
        let {
            skuId: l,
            apiError: t
        } = e, r = i[l], o = r?.productId != null ? a[r.productId] : null;
        o?.skuIds.forEach(e => {
            s.delete(e)
        }), null != o && s.delete(o.id), c[l] = t, s.delete(l)
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH: e => {
        let {
            skuIds: l
        } = e;
        l.forEach(e => {
            let l = i[e],
                t = l?.productId != null ? a[l.productId] : null;
            t?.skuIds.forEach(e => {
                s.add(e)
            }), null != t && s.add(t.id), s.add(e)
        })
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_SUCCESS: e => {
        let {
            products: l
        } = e;
        l.forEach(e => {
            e.skus.forEach(e => {
                i[e.id] = e, delete c[e.id], s.delete(e.id)
            }), a[e.id] = e, delete c[e.id], s.delete(e.id)
        })
    },
    STOREFRONT_PRODUCTS_BY_SKU_IDS_FETCH_FAILURE: e => {
        let {
            skuIds: l,
            apiError: t
        } = e;
        l.forEach(e => {
            let l = i[e],
                r = l?.productId != null ? a[l.productId] : null;
            r?.skuIds.forEach(e => {
                s.delete(e)
            }), null != r && s.delete(r.id), c[e] = t, s.delete(e)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH: e => {
        let {
            skuIds: l
        } = e;
        l.forEach(e => {
            s.add(e)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH_SUCCESS: e => {
        let {
            skuPrices: l
        } = e;
        Object.entries(l).forEach(e => {
            let [l, t] = e;
            d[l] = t, delete c[l], s.delete(l)
        })
    },
    STOREFRONT_SKU_PRICES_FETCH_FAILURE: e => {
        let {
            skuIds: l,
            apiError: t
        } = e;
        l.forEach(e => {
            s.delete(e), c[e] = t
        })
    },
    LOGOUT: e => {
        n = {}, a = {}, i = {}, d = {}, s = new Set, c = {}
    }
})