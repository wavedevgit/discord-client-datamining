/** chunk id: 560138 params = (module,exports,require) **/
t.d(n, {
    A: () => r
});
var i = t(311907),
    a = t(73153);
let s = {
    fetched: !1,
    affinities: []
};
class l extends i.Ay.Store {
    get hasFetched() {
        return s.fetched
    }
    get affinities() {
        return s.affinities
    }
}
let r = new l(a.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(e) {
        let {} = e;
        s.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
        let {
            res: n
        } = e;
        s.affinities = n
    },
    LOGOUT: function() {
        s.fetched = !1, s.affinities = []
    }
})