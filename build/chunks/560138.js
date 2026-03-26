/** chunk id: 560138 params = (module,exports,require) **/
r.d(t, {
    A: () => _
});
var a = r(311907),
    i = r(73153);
let n = {
    fetched: !1,
    affinities: []
};
class o extends a.Ay.Store {
    get hasFetched() {
        return n.fetched
    }
    get affinities() {
        return n.affinities
    }
}
let _ = new o(i.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(e) {
        let {} = e;
        n.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
        let {
            res: t
        } = e;
        n.affinities = t
    },
    LOGOUT: function() {
        n.fetched = !1, n.affinities = []
    }
})