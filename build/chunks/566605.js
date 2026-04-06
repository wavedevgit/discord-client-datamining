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
    c = n(287809),
    d = n(403362),
    u = n(369374),
    g = n(395332);

function m(e) {
    let {
        enabled: t
    } = u.A.useConfig({
        location: e.location
    }), n = (0, l.bG)([c.default], () => c.default.getCurrentUser()), m = (0, g.w$)({
        location: e.location
    }), x = i.useMemo(() => m?.filter(e => e.isEligibleForSuggestions()), [m]), f = i.useMemo(() => x?.map(e => e.applicationId) ?? [], [x]), p = (0, s.A)(f), {
        tokens: h,
        fetched: _
    } = (0, a.j)(f), A = (0, o.A)(n?.id), I = null == n || null == x || null == h || !_;
    return i.useMemo(() => I ? {
        isLoading: I
    } : t ? {
        isLoading: I,
        suggestions: [],
        currentUser: n
    } : {
        isLoading: I,
        suggestions: x.map(e => {
            let t = p.find(t => t?.id === e.applicationId);
            return null == t || null == h.find(t => t.application.id === e.applicationId) || null != A.find(t => t instanceof r.R && t.applicationId === e.applicationId) ? null : {
                config: e,
                application: t,
                dismissibleContent: e.suggestedWidgetLinkedDc
            }
        }).filter(d.Vq),
        currentUser: n
    }, [t, I, x, n, p, h, A])
}