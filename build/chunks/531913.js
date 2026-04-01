/** chunk id: 531913 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(64700),
    l = n(485584),
    a = n(311907),
    s = n(201718),
    r = n(339580),
    o = n(773669),
    d = n(188951);
let c = [],
    u = [];

function g(e, t) {
    (0, s.P)(e);
    let n = (0, a.bG)([r.A], () => r.A.getUserIdentityByApplication(e, t)),
        g = (0, a.bG)([o.default], () => o.default.locale),
        m = i.useMemo(() => [t], [t]),
        [x] = (0, d.A)(m),
        p = i.useMemo(() => (0, l.VG)(n?.profile ?? void 0), [n?.profile]),
        f = (0, a.bG)([r.A], () => r.A.getFetchState(e) !== r.e.FETCHED);
    return {
        data: p,
        locale: g,
        surfaceConfigs: x?.surfaces ?? {},
        applicationAssets: c,
        localizedStrings: u,
        isLoading: f,
        hasIdentity: null != n
    }
}