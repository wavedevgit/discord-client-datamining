/** chunk id: 856535 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(64700),
    n = t(311907),
    o = t(49463),
    i = t(409013),
    a = t(194822);
let s = (e, l) => {
    let t = (0, n.bG)([o.A], () => o.A.hasLoadedExperiments),
        [s, d, c] = (0, n.yK)([a.A], () => [a.A.getLayout(e, l), a.A.isFetchingLayout(e, l), a.A.getFetchError(e, l)]),
        u = null == s && null != l && t && !d && null == c;
    return r.useEffect(() => {
        u && (0, i.v)({
            tenantId: e,
            layoutId: l
        }).catch(() => {})
    }, [u, e, l]), {
        layout: s,
        loading: d,
        error: c
    }
}