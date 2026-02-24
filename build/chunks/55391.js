/** chunk id: 55391, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
});
var l = r(64700),
    d = r(311907),
    c = r(49463),
    a = r(409013),
    n = r(972441);
let o = (e, t, r) => {
    let o = (0, d.bG)([c.A], () => c.A.hasLoadedExperiments),
        [u, s, i] = (0, d.yK)([n.A], () => [n.A.getTemplateLayout(e, t), n.A.isFetchingTemplate(e, t), n.A.getTemplateFetchError(e, t)]),
        h = null == u && null != t && o && !s && null == i;
    return l.useEffect(() => {
        h && (0, a.J)({
            tenantId: e,
            templateId: t,
            requestParams: r
        }).catch(() => {})
    }, [h, e, t, r]), {
        layout: u,
        loading: s,
        error: i
    }
}