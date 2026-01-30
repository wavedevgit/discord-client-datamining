/** chunk id: 272859, original params: t,e,r (module,exports,require) **/
r.d(e, {
    d: () => a
});
var n = r(311907),
    l = r(800342),
    s = r(328968),
    i = r(652215);
let a = (0, n.UT)(s.A, {
    getQueryId: i.fic.STORE_LISTING,
    get: t => {
        var e;
        return null != t && null != (e = s.A.getForSKU(t)) ? e : null
    },
    load: t => null != t ? (0, l.QB)(t) : Promise.resolve(),
    getIsLoading: t => null != t && s.A.isFetchingForSKU(t)
})