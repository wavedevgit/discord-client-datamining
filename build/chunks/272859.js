/** chunk id: 272859 params = (module,exports,require) **/
l.d(e, {
    d: () => i
});
var n = l(311907),
    s = l(800342),
    r = l(328968),
    a = l(652215);
let i = (0, n.UT)(r.A, {
    getQueryId: a.fic.STORE_LISTING,
    get: t => null != t ? r.A.getForSKU(t) ?? null : null,
    load: t => null != t ? (0, s.QB)(t) : Promise.resolve(),
    getIsLoading: t => null != t && r.A.isFetchingForSKU(t)
})