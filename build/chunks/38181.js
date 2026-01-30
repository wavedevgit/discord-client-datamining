/** chunk id: 38181, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = [],
    l = null;

function c(e) {
    let {
        categories: t
    } = e;
    s = t, l = Date.now()
}
class u extends(r = i.Ay.Store) {
    getLastFetchTimeMs() {
        return l
    }
    getCategories() {
        return s
    }
    getCategory(e) {
        return s.find(t => t.id === e)
    }
}
o(u, "displayName", "ApplicationDirectoryCategoriesStore");
let d = new u(a.h, {
    APPLICATION_DIRECTORY_FETCH_CATEGORIES_SUCCESS: c
})