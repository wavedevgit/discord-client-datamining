/** chunk id: 566605 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(64700),
    l = n(311907),
    a = n(704824),
    s = n(429913),
    r = n(633075),
    o = n(667049),
    d = n(287809),
    c = n(403362),
    u = n(395332);

function m(e) {
    let t = (0, l.bG)([d.default], () => d.default.getCurrentUser()),
        n = (0, u.DB)({
            location: e.location
        }),
        m = i.useMemo(() => n?.filter(e => e.isEligibleForSuggestions()), [n]),
        g = i.useMemo(() => m?.map(e => e.applicationId) ?? [], [m]),
        x = (0, s.A)(g),
        {
            tokens: f,
            fetched: p
        } = (0, a.j)(g),
        h = (0, o.A)(t?.id),
        _ = null == t || null == m || null == f || !p;
    return i.useMemo(() => _ ? {
        isLoading: _
    } : {
        isLoading: _,
        suggestions: m.map(e => {
            let t = x.find(t => t?.id === e.applicationId);
            return null == t || null == f.find(t => t.application.id === e.applicationId) || null != h.find(t => t instanceof r.R && t.applicationId === e.applicationId) ? null : {
                config: e,
                application: t,
                dismissibleContent: e.suggestedWidgetLinkedDc
            }
        }).filter(c.Vq),
        currentUser: t
    }, [_, m, t, x, f, h])
}