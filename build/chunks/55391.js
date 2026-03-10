/** chunk id: 55391 params = (module,exports,require) **/
t.d(l, {
    A: () => s
});
var r = t(64700),
    n = t(311907),
    o = t(49463),
    i = t(409013),
    a = t(194822);
let s = (e, l, t) => {
    let s = (0, n.bG)([o.A], () => o.A.hasLoadedExperiments),
        [d, c, u] = (0, n.yK)([a.A], () => [a.A.getTemplateLayout(e, l, t), a.A.isFetchingTemplate(e, l, t), a.A.getTemplateFetchError(e, l, t)]),
        h = null == d && null != l && s && !c && null == u;
    return r.useEffect(() => {
        h && (0, i.J)({
            tenantId: e,
            templateId: l,
            requestParams: t
        }).catch(() => {})
    }, [h, e, l, t]), {
        layout: d,
        loading: c,
        error: u
    }
}