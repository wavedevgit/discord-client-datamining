/** chunk id: 16667, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    A: () => c
});
var r = l(311907),
    a = l(73153);
let n = {},
    s = {},
    i = new Set,
    o = {};
class d extends r.Ay.Store {
    static displayName = "CollectiblesStore";
    getCollection(e) {
        return null != e ? n[e] : null
    }
    getProductForSku(e) {
        return null != e ? s[e] : null
    }
    isFetching(e) {
        return null != e && i.has(e)
    }
    getApiError(e) {
        return null != e ? o[e] : null
    }
}
let c = new d(a.h, {
    COLLECTIBLES_COLLECTION_FETCH: e => {
        let {
            collectionId: t
        } = e;
        i.add(t)
    },
    COLLECTIBLES_COLLECTION_FETCH_SUCCESS: e => {
        let {
            collection: t
        } = e;
        n[t.id] = t, t.products?.forEach(e => {
            e.skus.forEach(t => {
                s[t.id] = e, delete o[t.id], i.delete(t.id)
            })
        }), delete o[t.id], i.delete(t.id)
    },
    COLLECTIBLES_COLLECTION_FETCH_FAILURE: e => {
        let {
            collectionId: t,
            apiError: l
        } = e;
        o[t] = l, i.delete(t)
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH: e => {
        let {
            skuId: t
        } = e;
        i.add(t)
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_SUCCESS: e => {
        let {
            product: t
        } = e;
        t.skuIds.forEach(e => {
            s[e] = t, delete o[e], i.delete(e)
        })
    },
    COLLECTIBLES_PRODUCT_FOR_SKU_FETCH_FAILURE: e => {
        let {
            skuId: t,
            apiError: l
        } = e;
        o[t] = l, i.delete(t)
    },
    LOGOUT: e => {
        n = {}, s = {}, i = new Set, o = {}
    }
})