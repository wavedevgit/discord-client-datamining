/** chunk id: 856535, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => o
});
var r = l(64700),
    a = l(311907),
    d = l(49463),
    c = l(409013),
    n = l(194822);
let o = (e, t) => {
    let l = (0, a.bG)([d.A], () => d.A.hasLoadedExperiments),
        [o, s, u] = (0, a.yK)([n.A], () => [n.A.getLayout(e, t), n.A.isFetchingLayout(e, t), n.A.getFetchError(e, t)]),
        i = null == o && null != t && l && !s && null == u;
    return r.useEffect(() => {
        i && (0, c.v)({
            tenantId: e,
            layoutId: t
        }).catch(() => {})
    }, [i, e, t]), {
        layout: o,
        loading: s,
        error: u
    }
}