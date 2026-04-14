/** chunk id: 560138 params = (module,exports,require) **/
t.d(n, {
    A: () => l
});
var a = t(311907),
    i = t(73153);
let s = {
    fetched: !1,
    affinities: []
};
class r extends a.Ay.Store {
    get hasFetched() {
        return s.fetched
    }
    get affinities() {
        return s.affinities
    }
}
let l = new r(i.h, {
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