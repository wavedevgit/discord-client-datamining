/** chunk id: 560138 params = (module,exports,require) **/
t.d(n, {
    A: () => r
});
var i = t(311907),
    a = t(73153);
let l = {
    fetched: !1,
    affinities: []
};
class s extends i.Ay.Store {
    get hasFetched() {
        return l.fetched
    }
    get affinities() {
        return l.affinities
    }
}
let r = new s(a.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(e) {
        let {} = e;
        l.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
        let {
            res: n
        } = e;
        l.affinities = n
    },
    LOGOUT: function() {
        l.fetched = !1, l.affinities = []
    }
})