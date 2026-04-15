/** chunk id: 18422 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    l = n(607399),
    a = n(311907),
    r = n(197111),
    s = n(10088),
    o = n(961350),
    d = n(652215);
let c = l.Fr || l.v1;

function u(e) {
    let {
        children: t,
        deepLinkType: n,
        path: l,
        paramsBuilder: u,
        search: A
    } = e, h = (0, a.bG)([o.default], () => o.default.getFingerprint() ?? o.default.getId()), _ = (0, a.bG)([o.default], () => o.default.getInstallationForTracking()), m = (0, a.bG)([s.A], () => s.A.getState(l), [l]), g = i.useMemo(() => null == u ? {
        path: l,
        fingerprint: h,
        installationId: _,
        search: A
    } : u({
        path: l,
        fingerprint: h,
        search: A,
        installationId: _
    }), [l, u, h, _, A]);
    return i.useEffect(() => {
        c || null == m && r.A.openNativeAppModal(l, d.e$_.DEEP_LINK, {
            type: n,
            params: g
        })
    }, [m, l, g, n]), t
}