/** chunk id: 55391, original params: e,t,l (module,exports,require) **/
l.d(t, {
    A: () => o
});
var r = l(64700),
    a = l(311907),
    d = l(49463),
    c = l(409013),
    n = l(194822);
let o = (e, t, l) => {
    let o = (0, a.bG)([d.A], () => d.A.hasLoadedExperiments),
        [s, u, i] = (0, a.yK)([n.A], () => [n.A.getTemplateLayout(e, t), n.A.isFetchingTemplate(e, t), n.A.getTemplateFetchError(e, t)]),
        h = null == s && null != t && o && !u && null == i;
    return r.useEffect(() => {
        h && (0, c.J)({
            tenantId: e,
            templateId: t,
            requestParams: l
        }).catch(() => {})
    }, [h, e, t, l]), {
        layout: s,
        loading: u,
        error: i
    }
}