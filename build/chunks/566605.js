/** chunk id: 566605 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(64700),
    l = n(311907),
    a = n(704824),
    s = n(429913),
    r = n(633075),
    o = n(667049),
    c = n(287809),
    d = n(403362),
    u = n(395332);

function g(e) {
    let t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        n = (0, u.DB)({
            location: e.location
        }),
        g = i.useMemo(() => n?.filter(e => e.isEligibleForSuggestions()), [n]),
        m = i.useMemo(() => g?.map(e => e.applicationId) ?? [], [g]),
        x = (0, s.A)(m),
        {
            tokens: f,
            fetched: p
        } = (0, a.j)(m),
        h = (0, o.A)(t?.id),
        _ = null == t || null == g || null == f || !p;
    return i.useMemo(() => _ ? {
        isLoading: _
    } : {
        isLoading: _,
        suggestions: g.map(e => {
            let t = x.find(t => t?.id === e.applicationId);
            return null == t || null == f.find(t => t.application.id === e.applicationId) || null != h.find(t => t instanceof r.R && t.applicationId === e.applicationId) ? null : {
                config: e,
                application: t,
                dismissibleContent: e.suggestedWidgetLinkedDc
            }
        }).filter(d.Vq),
        currentUser: t
    }, [_, g, t, x, f, h])
}