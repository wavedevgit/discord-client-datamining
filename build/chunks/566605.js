/** Chunk was on 38663 **/
/** chunk id: 566605, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(64700),
    l = n(311907),
    i = n(704824),
    a = n(429913),
    o = n(633075),
    s = n(667049),
    c = n(287809),
    u = n(403362),
    d = n(395332);

function f(e) {
    let t = (0, l.bG)([c.default], () => c.default.getCurrentUser()),
        n = (0, d.DB)({
            location: e.location
        }),
        f = r.useMemo(() => null == n ? void 0 : n.filter(e => e.isEligibleForSuggestions()), [n]),
        p = r.useMemo(() => {
            var e;
            return null != (e = null == f ? void 0 : f.map(e => e.applicationId)) ? e : []
        }, [f]),
        g = (0, a.A)(p),
        {
            tokens: m,
            fetched: b
        } = (0, i.j)(p),
        y = (0, s.A)(null == t ? void 0 : t.id),
        O = null == t || null == f || null == m || !b;
    return r.useMemo(() => O ? {
        isLoading: O
    } : {
        isLoading: O,
        suggestions: f.map(e => {
            let t = g.find(t => (null == t ? void 0 : t.id) === e.applicationId);
            return null == t || null == m.find(t => t.application.id === e.applicationId) || null != y.find(t => t instanceof o.R && t.applicationId === e.applicationId) ? null : {
                config: e,
                application: t,
                dismissibleContent: e.suggestedWidgetLinkedDc
            }
        }).filter(u.Vq),
        currentUser: t
    }, [O, f, t, g, m, y])
}