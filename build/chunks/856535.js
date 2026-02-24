/** chunk id: 856535, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
});
var l = r(64700),
    d = r(311907),
    c = r(49463),
    a = r(409013),
    n = r(194822);
let o = (e, t) => {
    let r = (0, d.bG)([c.A], () => c.A.hasLoadedExperiments),
        [o, u, s] = (0, d.yK)([n.A], () => [n.A.getLayout(e, t), n.A.isFetchingLayout(e, t), n.A.getFetchError(e, t)]),
        i = null == o && null != t && r && !u && null == s;
    return l.useEffect(() => {
        i && (0, a.v)({
            tenantId: e,
            layoutId: t
        }).catch(() => {})
    }, [i, e, t]), {
        layout: o,
        loading: u,
        error: s
    }
}