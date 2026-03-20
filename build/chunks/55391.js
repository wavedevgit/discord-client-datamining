/** chunk id: 55391 params = (module,exports,require) **/
r.d(t, {
    A: () => i
});
var l = r(64700),
    n = r(311907),
    a = r(49463),
    s = r(409013),
    c = r(972441);
let i = (e, t, r) => {
    let i = (0, n.bG)([a.A], () => a.A.hasLoadedExperiments),
        [d, o, u] = (0, n.yK)([c.A], () => [c.A.getTemplateLayout(e, t, r), c.A.isFetchingTemplate(e, t, r), c.A.getTemplateFetchError(e, t, r)]),
        m = null == d && null != t && i && !o && null == u;
    return l.useEffect(() => {
        m && (0, s.J)({
            tenantId: e,
            templateId: t,
            requestParams: r
        }).catch(() => {})
    }, [m, e, t, r]), {
        layout: d,
        loading: o,
        error: u
    }
}