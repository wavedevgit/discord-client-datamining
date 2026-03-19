/** chunk id: 856535 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var r = l(64700),
    n = l(311907),
    i = l(49463),
    o = l(409013),
    a = l(972441);
let s = (e, t) => {
    let l = (0, n.bG)([i.A], () => i.A.hasLoadedExperiments),
        [s, d, c] = (0, n.yK)([a.A], () => [a.A.getLayout(e, t), a.A.isFetchingLayout(e, t), a.A.getFetchError(e, t)]),
        u = null == s && null != t && l && !d && null == c;
    return r.useEffect(() => {
        u && (0, o.v)({
            tenantId: e,
            layoutId: t
        }).catch(() => {})
    }, [u, e, t]), {
        layout: s,
        loading: d,
        error: c
    }
}