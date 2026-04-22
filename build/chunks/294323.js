/** chunk id: 294323 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(64700),
    l = n(311907),
    s = n(587895),
    a = n(429913),
    r = n(201718),
    o = n(339580),
    c = n(207803),
    d = n(633075),
    u = n(622543),
    h = n(576622),
    m = n(385113),
    A = n(369374),
    g = n(188951);

function p(e, t, n) {
    var p, _, f, E;
    let C, x, {
            enabled: S
        } = A.A.useConfig({
            location: n ?? "use_user_application_widget_data"
        }),
        I = function(e) {
            let {
                data: t,
                isLoading: n
            } = (0, c.FY)();
            return null == e ? [!1, null] : [n, t?.find(t => t.applicationId === e) ?? null]
        }(S ? null : t),
        T = (p = S ? t : null, (0, g.A)(null != p ? [p] : []), (0, l.yK)([m.A], () => {
            if (null == p) return [!1, null];
            let e = m.A.getConfig(p) ?? null,
                t = m.A.getFetchState(p);
            return [(t === m.e.NOT_FETCHED || t === m.e.FETCHING) && null == e, e]
        }, [p])),
        [v, N] = S ? T : I,
        [y, b] = (_ = null != N ? t : null, C = (0, a.h)(_), [(0, l.bG)([s.A], () => null != _ && s.A.isFetchingApplication(_), [_]) && null == C, C ?? null]),
        j = null != N && null != b,
        [R, M] = (f = j ? e : null, E = j ? t : null, x = (0, l.bG)([o.A], () => null != f && o.A.getFetchState(f) === o.e.NOT_FETCHED, [f]), i.useEffect(() => {
            x && null != f && r.A.fetchUserApplicationIdentitiesWithProfiles(f)
        }, [x, f]), (0, l.yK)([o.A], () => {
            if (null == f || null == E) return [!1, null];
            let e = o.A.getUserIdentityByApplication(f, E) ?? null;
            return [(o.A.isFetchingUser(f) || o.A.getFetchState(f) === o.e.NOT_FETCHED) && null == e, e]
        }, [f, E])),
        [L, D] = function(e) {
            let [t, n] = (0, l.yK)([u.A], () => null != e ? [u.A.isFetchingProfile(e), u.A.getUserProfile(e) ?? null] : [!1, null], [e]), s = null != e && !t && null == n;
            return i.useEffect(() => {
                s && null != e && (0, h.A)(e)
            }, [s, e]), [(t || s) && null == n, n]
        }(j ? e : null),
        O = v || y || R || L;
    return i.useMemo(() => ({
        isV2: S,
        isLoading: O,
        application: b,
        applicationWidgetConfig: N,
        userApplicationIdentity: M,
        profileApplicationWidget: D?.widgets?.find(e => null != t && e instanceof d.R && e.applicationId === t) ?? null
    }), [b, t, N, M, O, S, D])
}