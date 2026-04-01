/** chunk id: 499118 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(311907),
    a = n(73153),
    l = n(823448),
    r = n(351022);
let s = [];

function o() {
    s = []
}
class d extends i.Ay.Store {
    static displayName = "GlobalDiscoveryServersSearchLayoutStore";
    initialize() {
        this.waitFor(l.A, r.A)
    }
    getVisibleTabs() {
        return s
    }
}
let c = new d(a.h, {
    CONNECTION_OPEN: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_LAYOUT_RESET: o,
    GLOBAL_DISCOVERY_SERVERS_SEARCH_COUNT_SUCCESS: function(e) {
        let {
            query: t
        } = e, n = l.A.getCounts(t);
        if (null == n) return !1;
        s = n
    }
})