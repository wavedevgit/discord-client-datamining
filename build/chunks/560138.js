/** chunk id: 560138 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    l = n(73153);
let s = {
    fetched: !1,
    affinities: []
};
class a extends i.Ay.Store {
    get hasFetched() {
        return s.fetched
    }
    get affinities() {
        return s.affinities
    }
}
let r = new a(l.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(e) {
        let {} = e;
        s.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
        let {
            res: t
        } = e;
        s.affinities = t
    },
    LOGOUT: function() {
        s.fetched = !1, s.affinities = []
    }
})