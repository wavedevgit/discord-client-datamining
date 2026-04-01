/** chunk id: 566605 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(64700),
    a = n(311907),
    l = n(704824),
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
    }), n = (0, a.bG)([c.default], () => c.default.getCurrentUser()), g = (0, m.w$)({
        location: e.location
    }), p = i.useMemo(() => g?.filter(e => e.isEligibleForSuggestions()), [g]), x = i.useMemo(() => p?.map(e => e.applicationId) ?? [], [p]), f = (0, s.A)(x), {
        tokens: _,
        fetched: h
    } = (0, l.j)(x), A = (0, o.A)(n?.id), I = null == n || null == p || null == _ || !h;
    return i.useMemo(() => I ? {
        isLoading: I
    } : t ? {
        isLoading: I,
        suggestions: [],
        currentUser: n
    } : {
        isLoading: I,
        suggestions: p.map(e => {
            let t = f.find(t => t?.id === e.applicationId);
            return null == t || null == _.find(t => t.application.id === e.applicationId) || null != A.find(t => t instanceof r.R && t.applicationId === e.applicationId) ? null : {
                config: e,
                application: t,
                dismissibleContent: e.suggestedWidgetLinkedDc
            }
        }).filter(d.Vq),
        currentUser: n
    }, [t, I, p, n, f, _, A])
}