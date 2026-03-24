/** chunk id: 856535 params = (module,exports,require) **/
r.d(t, {
    A: () => i
});
var l = r(64700),
    n = r(311907),
    a = r(49463),
    s = r(409013),
    c = r(194822);
let i = (e, t) => {
    let r = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [i, d, o] = (0, n.yK)([c.A], () => [c.A.getLayout(e, t), c.A.isFetchingLayout(e, t), c.A.getFetchError(e, t)]),
        u = null == i && null != t && r && !d && null == o;
    return l.useEffect(() => {
        u && (0, s.v)({
            tenantId: e,
            layoutId: t
        }).catch(() => {})
    }, [u, e, t]), {
        layout: i,
        loading: d,
        error: o
    }
}