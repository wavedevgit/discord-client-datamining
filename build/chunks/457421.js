/** Chunk was on web.js **/
/** chunk id: 457421, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => p
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
let s = {},
    l = "NOT_FETCHED",
    c = () => {
        l = "FETCHING"
    },
    u = e => {
        s = e.marketings.marketingsBySurfaces, l = "FETCHED"
    },
    d = () => {
        s = {}, l = "NOT_FETCHED"
    };
class f extends(r = i.Ay.Store) {
    getMarketingBySurface(e) {
        return s[e]
    }
    get fetchState() {
        return l
    }
}
o(f, "displayName", "CollectiblesMarketingsStore");
let p = new f(a.h, {
    COLLECTIBLES_MARKETING_FETCH: c,
    COLLECTIBLES_MARKETING_FETCH_SUCCESS: u,
    LOGOUT: d
})