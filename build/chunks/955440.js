/** chunk id: 955440 params = (module,exports,require) **/
e.d(i, {
    A: () => r
});
var n = e(311907),
    l = e(73825),
    s = e(97352),
    a = e(652215);
let r = (0, n.UT)(s.A, {
    getQueryId: a.fic.SUBSCRIPTION_PLAN,
    get: t => {
        let i = s.A.getForSKU(t);
        return 0 === i.length ? null : i
    },
    load: t => (0, l.ur)(t).then(() => {}),
    getIsLoading: t => s.A.isFetchingForSKU(t)
})