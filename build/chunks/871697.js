/** Chunk was on 78528 **/
/** chunk id: 871697, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r, l = n(311907),
    i = n(73153);

function s(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let a = {};
class o extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        null != e && Object.keys(e).forEach(t => {
            "number" == typeof e[t] && (a[t] = e[t])
        })
    }
    getState() {
        return a
    }
    hasViewed(e) {
        return null != a[e]
    }
}
s(o, "displayName", "ViewHistoryStore"), s(o, "persistKey", "ViewHistoryStore");
let c = new o(i.h, {
    VIEW_HISTORY_MARK_VIEW: function(e) {
        let {
            key: t
        } = e;
        a[t] = Date.now()
    }
})