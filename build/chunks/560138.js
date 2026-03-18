/** chunk id: 560138 params = (module,exports,require) **/
r.d(t, {
    A: () => _
});
var n = r(311907),
    a = r(73153);
let i = {
    fetched: !1,
    affinities: []
};
class o extends n.Ay.Store {
    get hasFetched() {
        return i.fetched
    }
    get affinities() {
        return i.affinities
    }
}
let _ = new o(a.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(e) {
        let {} = e;
        i.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
        let {
            res: t
        } = e;
        i.affinities = t
    },
    LOGOUT: function() {
        i.fetched = !1, i.affinities = []
    }
})