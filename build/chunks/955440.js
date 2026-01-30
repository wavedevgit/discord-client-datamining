/** chunk id: 955440, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => o
});
var l = n(311907),
    r = n(73825),
    i = n(97352),
    u = n(652215);
let o = (0, l.UT)(i.A, {
    getQueryId: u.fic.SUBSCRIPTION_PLAN,
    get: t => {
        let e = i.A.getForSKU(t);
        return 0 === e.length ? null : e
    },
    load: t => (0, r.ur)(t),
    getIsLoading: t => i.A.isFetchingForSKU(t)
})