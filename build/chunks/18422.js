/** chunk id: 18422 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    a = n(607399),
    r = n(311907),
    l = n(197111),
    s = n(10088),
    o = n(961350),
    d = n(652215);
let c = a.Fr || a.v1;

function u(e) {
    let {
        children: t,
        deepLinkType: n,
        path: a,
        paramsBuilder: u,
        search: A
    } = e, _ = (0, r.bG)([o.default], () => o.default.getFingerprint() ?? o.default.getId()), h = (0, r.bG)([o.default], () => o.default.getInstallationForTracking()), m = (0, r.bG)([s.A], () => s.A.getState(a), [a]), g = i.useMemo(() => null == u ? {
        path: a,
        fingerprint: _,
        installationId: h,
        search: A
    } : u({
        path: a,
        fingerprint: _,
        search: A,
        installationId: h
    }), [a, u, _, h, A]);
    return i.useEffect(() => {
        c || null == m && l.A.openNativeAppModal(a, d.e$_.DEEP_LINK, {
            type: n,
            params: g
        })
    }, [m, a, g, n]), t
}