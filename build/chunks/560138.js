/** chunk id: 560138, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => u
});
var r = n(311907),
    i = n(73153);
let a = {
    fetched: !1,
    affinities: []
};

function o(e) {
    let {} = e;
    a.fetched = !0
}

function s(e) {
    let {
        res: t
    } = e;
    a.affinities = t
}

function l() {
    a.fetched = !1, a.affinities = []
}
class c extends r.Ay.Store {
    get hasFetched() {
        return a.fetched
    }
    get affinities() {
        return a.affinities
    }
}
let u = new c(i.h, {
    BILLING_NITRO_AFFINITY_FETCHED: o,
    BILLING_NITRO_AFFINITY_FETCH_SUCCEEDED: s,
    LOGOUT: l
})