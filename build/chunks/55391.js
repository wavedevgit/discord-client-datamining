/** chunk id: 55391 params = (module,exports,require) **/
l.d(t, {
    A: () => s
});
var r = l(64700),
    n = l(311907),
    i = l(49463),
    o = l(409013),
    a = l(194822);
let s = (e, t, l) => {
    let s = (0, n.bG)([i.A], () => i.A.hasLoadedExperiments),
        [d, c, u] = (0, n.yK)([a.A], () => [a.A.getTemplateLayout(e, t, l), a.A.isFetchingTemplate(e, t, l), a.A.getTemplateFetchError(e, t, l)]),
        h = null == d && null != t && s && !c && null == u;
    return r.useEffect(() => {
        h && (0, o.J)({
            tenantId: e,
            templateId: t,
            requestParams: l
        }).catch(() => {})
    }, [h, e, t, l]), {
        layout: d,
        loading: c,
        error: u
    }
}