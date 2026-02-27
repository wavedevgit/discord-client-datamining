/** chunk id: 16667, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    A: () => u
});
var r = l(311907),
    a = l(73153);
let n = {},
    i = {},
    s = {},
    o = new Set,
    d = {};
class c extends r.Ay.Store {
    static displayName = "CollectiblesStore";
    getCollection(e) {
        return null != e ? n[e] : null
    }
    getProduct(e) {
        return null != e ? i[e] : null
    }
    getProductForSku(e) {
        let t = null != e ? s[e] : null;
        return t?.productId != null ? i[t.productId] : null
    }
    getSku(e) {
        return null != e ? s[e] : null
    }
    isFetching(e) {
        return null != e && o.has(e)
    }
    getApiError(e) {
        return null != e ? d[e] : null
    }
}
let u = new c(a.h, {
    COLLECTIBLES_COLLECTION_FETCH: e => {
        let {
            collectionId: t
        } = e, l = n[t];
        l?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                o.add(e)
            }), o.add(e.id)
        }), o.add(t)
    },
    COLLECTIBLES_COLLECTION_FETCH_SUCCESS: e => {
        let {
            collection: t
        } = e;
        t.products?.forEach(e => {
            e.skus.forEach(e => {
                s[e.id] = e, delete d[e.id], o.delete(e.id)
            }), i[e.id] = e, delete d[e.id], o.delete(e.id)
        }), n[t.id] = t, delete d[t.id], o.delete(t.id)
    },
    COLLECTIBLES_COLLECTION_FETCH_FAILURE: e => {
        let {
            collectionId: t,
            apiError: l
        } = e, r = n[t];
        r?.products?.forEach(e => {
            e.skuIds.forEach(e => {
                o.delete(e)
            }), o.delete(e.id)
        }), d[t] = l, o.delete(t)
    },
    COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH: e => {
        let {
            productId: t
        } = e, l = i[t];
        l?.skuIds.forEach(e => {
            o.add(e)
        }), o.add(t)
    },
    COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH_SUCCESS: e => {
        let {
            product: t
        } = e;
        t.skus.forEach(e => {
            s[e.id] = e, delete d[e.id], o.delete(e.id)
        }), i[t.id] = t, o.delete(t.id), delete d[t.id]
    },
    COLLECTIBLES_PRODUCT_WITH_SKUS_FETCH_FAILURE: e => {
        let {
            productId: t,
            apiError: l
        } = e, r = i[t];
        r?.skuIds.forEach(e => {
            o.delete(e)
        }), d[t] = l, o.delete(t)
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH: e => {
        let {
            skuId: t
        } = e, l = s[t], r = l?.productId != null ? i[l.productId] : null;
        r?.skuIds.forEach(e => {
            o.add(e)
        }), null != r && o.add(r.id), o.add(t)
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS: e => {
        let {
            product: t
        } = e;
        t.skus.forEach(e => {
            s[e.id] = e, delete d[e.id], o.delete(e.id)
        }), i[t.id] = t, delete d[t.id], o.delete(t.id)
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE: e => {
        let {
            skuId: t,
            apiError: l
        } = e, r = s[t], a = r?.productId != null ? i[r.productId] : null;
        a?.skuIds.forEach(e => {
            o.delete(e)
        }), d[t] = l, o.delete(t)
    },
    LOGOUT: e => {
        n = {}, i = {}, s = {}, o = new Set, d = {}
    }
})