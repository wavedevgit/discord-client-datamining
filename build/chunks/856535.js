/** chunk id: 856535, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(64700),
    o = t(311907),
    n = t(49463),
    i = t(409013),
    a = t(194822);
let d = (e, l) => {
    let t = (0, o.bG)([n.A], () => n.A.hasLoadedExperiments),
        [d, c, s] = (0, o.yK)([a.A], () => [a.A.getLayout(e, l), a.A.isFetchingLayout(e, l), a.A.getFetchError(e, l)]),
        u = null == d && null != l && t && !c && null == s;
    return r.useEffect(() => {
        u && (0, i.v)({
            tenantId: e,
            layoutId: l
        }).catch(() => {})
    }, [u, e, l]), {
        layout: d,
        loading: c,
        error: s
    }
}