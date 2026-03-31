/** chunk id: 560138 params = (module,exports,require) **/
t.d(r, {
    A: () => n
});
var a = t(311907),
    i = t(73153);
let o = {
    fetched: !1,
    affinities: []
};
class _ extends a.Ay.Store {
    get hasFetched() {
        return o.fetched
    }
    get affinities() {
        return o.affinities
    }
}
let n = new _(i.h, {
    BILLING_NITRO_AFFINITY_FETCHED: function(e) {
        let {} = e;
        o.fetched = !0
    },
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: function(e) {
        let {
            res: r
        } = e;
        o.affinities = r
    },
    LOGOUT: function() {
        o.fetched = !1, o.affinities = []
    }
})