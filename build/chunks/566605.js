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
    u = n(369374),
    m = n(395332);

function g(e) {
    let {
        enabled: t
    } = u.A.useConfig({
        location: e.location
    }), n = (0, l.bG)([c.default], () => c.default.getCurrentUser()), g = (0, m.w$)({
        location: e.location
    }), f = i.useMemo(() => g?.filter(e => e.isEligibleForSuggestions()), [g]), x = i.useMemo(() => f?.map(e => e.applicationId) ?? [], [f]), p = (0, s.A)(x), {
        tokens: _,
        fetched: I
    } = (0, a.j)(x), h = (0, o.A)(n?.id), A = null == n || null == f || null == _ || !I;
    return i.useMemo(() => A ? {
        isLoading: A
    } : t ? {
        isLoading: A,
        suggestions: [],
        currentUser: n
    } : {
        isLoading: A,
        suggestions: f.map(e => {
            let t = p.find(t => t?.id === e.applicationId);
            return null == t || null == _.find(t => t.application.id === e.applicationId) || null != h.find(t => t instanceof r.R && t.applicationId === e.applicationId) ? null : {
                config: e,
                application: t,
                dismissibleContent: e.suggestedWidgetLinkedDc
            }
        }).filter(d.Vq),
        currentUser: n
    }, [t, A, f, n, p, _, h])
}