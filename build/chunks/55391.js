/** chunk id: 55391, original params: e,l,t (module,exports,require) **/
t.d(l, {
    A: () => d
});
var r = t(64700),
    o = t(311907),
    n = t(49463),
    i = t(409013),
    a = t(194822);
let d = (e, l, t) => {
    let d = (0, o.bG)([n.A], () => n.A.hasLoadedExperiments),
        [c, s, u] = (0, o.yK)([a.A], () => [a.A.getTemplateLayout(e, l), a.A.isFetchingTemplate(e, l), a.A.getTemplateFetchError(e, l)]),
        h = null == c && null != l && d && !s && null == u;
    return r.useEffect(() => {
        h && (0, i.J)({
            tenantId: e,
            templateId: l,
            requestParams: t
        }).catch(() => {})
    }, [h, e, l, t]), {
        layout: c,
        loading: s,
        error: u
    }
}