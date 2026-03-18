/** chunk id: 560138 params = (module,exports,require) **/
e.d(i, {
    A: () => r
});
var n = e(311907),
    a = e(73153);
let s = {
    fetched: !1,
    affinities: []
};
class l extends n.Ay.Store {
    get hasFetched() {
        return s.fetched
    }
    get affinities() {
        return s.affinities
    }
}
let r = new l(a.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(t) {
        let {} = t;
        s.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(t) {
        let {
            res: i
        } = t;
        s.affinities = i
    },
    LOGOUT: function() {
        s.fetched = !1, s.affinities = []
    }
})