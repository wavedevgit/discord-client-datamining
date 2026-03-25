/** chunk id: 560138 params = (module,exports,require) **/
i.d(e, {
    A: () => s
});
var n = i(311907),
    r = i(73153);
let a = {
    fetched: !1,
    affinities: []
};
class l extends n.Ay.Store {
    get hasFetched() {
        return a.fetched
    }
    get affinities() {
        return a.affinities
    }
}
let s = new l(r.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(t) {
        let {} = t;
        a.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(t) {
        let {
            res: e
        } = t;
        a.affinities = e
    },
    LOGOUT: function() {
        a.fetched = !1, a.affinities = []
    }
})