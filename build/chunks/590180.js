/** chunk id: 590180, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a;
n.d(t, {
    A: () => K
}), n(896048);
var o, s = n(735438),
    l = n(311907),
    c = n(73153),
    u = n(49463),
    d = n(547065),
    f = n(773669),
    p = n(993408),
    _ = n(758836);

function h(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let m = new Map,
    g = new Map,
    E = new Map,
    y = new Map,
    b = [],
    O = m,
    v = g,
    A = E,
    I = [],
    S = y,
    T = b,
    C = null,
    N = !1,
    w = new Set,
    R = new Map,
    P = new Map,
    D = {},
    L = 0,
    x = e => {
        let {
            skuId: t
        } = e;
        (w = new Set(w)).add(t), (R = new Map(R)).delete(t), (P = new Map(P)).delete(t)
    },
    M = e => {
        let {
            skuId: t,
            error: n
        } = e;
        (w = new Set(w)).delete(t), (R = new Map(R)).set(t, n), (P = new Map(P)).set(t, Date.now())
    },
    j = e => {
        let {
            skuId: t,
            product: n
        } = e;
        v.set(t, n), (w = new Set(w)).delete(t), (R = new Map(R)).delete(t), (P = new Map(P)).delete(t)
    },
    k = e => {
        N = !0, r = void 0, a = void 0, D = e.options
    },
    U = e => {
        let {
            error: t
        } = e;
        O = m, v = g, T = b, N = !1, w = new Set, r = t, a = Date.now()
    },
    G = e => {
        let t = e.categories.categories;
        if (0 === t.length) O = m, v = g;
        else if (!(0, s.isEqual)([...O.values()], t) && !e.noOp) {
            let e = new Map(t.map(e => [e.skuId, e])),
                n = new Date;
            O.forEach((t, r) => {
                !e.has(r) && (null == t.unpublishedAt || t.unpublishedAt > n) && e.set(r, t)
            }), S = new Map([...(O = e).values()].map(e => [e.storeListingId, e])), v = new Map((0, p.P_)(O, !0).map(e => [e.skuId, e])), I = [...(A = new Map((0, p.P_)(O, !1).map(e => [e.storeListingId, e]))).values()]
        }
        V(t, v), i = Date.now(), N = !1, r = void 0, a = void 0
    },
    F = e => {
        if (0 === e.shopHome.categories.length) return;
        let t = new Map(e.shopHome.categories.map(e => [e.skuId, e]));
        S = new Map([...(O = new Map([...O, ...t])).values()].map(e => [e.storeListingId, e])), v = new Map((0, p.P_)(O, !0).map(e => [e.skuId, e]))
    },
    V = (e, t) => {
        if (0 === e.length) {
            T = b;
            return
        }
        switch (C) {
            case d.J.POPULAR:
                T = _.xG;
                break;
            case d.J.RECENT:
                T = (0, p.H1)(e, t);
                break;
            case d.J.NONE:
            default:
                T = b
        }
    },
    B = () => {
        O = m, v = g, T = b, i = void 0, N = !1, w = new Set, r = void 0, a = void 0, D = {}, L = 0
    },
    H = () => {
        if (!u.A.hasLoadedExperiments) return;
        let {
            giftRecommendationAlgorithm: e
        } = d.P.getCurrentConfig({
            location: "CollectiblesCategoryStore handleExperimentChange"
        }, {
            autoTrackExposure: !1
        });
        e !== C && (i = void 0), C = e
    },
    Y = e => {
        L = e.skipNumCategories
    };
class W extends(o = l.Ay.Store) {
    initialize() {
        this.syncWith([f.default], B), this.syncWith([u.A], H)
    }
    get isFetchingCategories() {
        return N
    }
    isFetchingProduct(e) {
        return null != e && w.has(e)
    }
    get error() {
        return r
    }
    get lastErrorTimestamp() {
        return a
    }
    get lastSuccessfulFetch() {
        return i
    }
    get lastFetchOptions() {
        return D
    }
    get categories() {
        return O
    }
    get products() {
        return v
    }
    get productsWithVariantsAsGroup() {
        return I
    }
    get recommendedGiftSkuIds() {
        return T
    }
    get skipNumCategories() {
        return L
    }
    getCategory(e) {
        return null != e ? O.get(e) : void 0
    }
    getProduct(e) {
        return null != e ? v.get(e) : void 0
    }
    getProductsBySkus(e) {
        return e.map(e => v.get(e)).filter(e => null != e)
    }
    getProductFetchError(e) {
        return null != e ? R.get(e) : void 0
    }
    getProductFetchErrorTimestamp(e) {
        return null != e ? P.get(e) : void 0
    }
    getProductByStoreListingId(e) {
        return null != e ? A.get(e) : void 0
    }
    getCategoryByStoreListingId(e) {
        return null != e ? S.get(e) : void 0
    }
    getCategoryForProduct(e) {
        let t = this.getProduct(e);
        return this.getCategory(null == t ? void 0 : t.categorySkuId)
    }
}
h(W, "displayName", "CollectiblesCategoryStore");
let K = new W(c.h, {
    COLLECTIBLES_CATEGORIES_FETCH: k,
    COLLECTIBLES_CATEGORIES_FETCH_SUCCESS: G,
    COLLECTIBLES_CATEGORIES_FETCH_FAILURE: U,
    COLLECTIBLES_PRODUCT_FETCH: x,
    COLLECTIBLES_PRODUCT_FETCH_SUCCESS: j,
    COLLECTIBLES_PRODUCT_FETCH_FAILURE: M,
    COLLECTIBLES_SHOP_HOME_FETCH_SUCCESS: F,
    COLLECTIBLES_SKIP_NUM_CATEGORIES: Y,
    LOGOUT: B
})