/** chunk id: 856535, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(64700),
    o = t(311907),
    n = t(49463),
    a = t(409013),
    i = t(194822);
let d = (e, l) => {
    let t = (0, o.bG)([n.A], () => n.A.hasLoadedExperiments),
        [d, s, c] = (0, o.yK)([i.A], () => [i.A.getLayout(e, l), i.A.isFetchingLayout(e, l), i.A.getFetchError(e, l)]),
        u = null == d && null != l && t && !s && null == c;
    return r.useEffect(() => {
        u && (0, a.v)({
            tenantId: e,
            layoutId: l
        }).catch(() => {})
    }, [u, e, l]), {
        layout: d,
        loading: s,
        error: c
    }
}