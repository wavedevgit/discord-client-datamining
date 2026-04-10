/** chunk id: 18422 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    r = n(607399),
    a = n(311907),
    l = n(197111),
    s = n(10088),
    o = n(961350),
    d = n(652215);
let c = r.Fr || r.v1;

function u(e) {
    let {
        children: t,
        deepLinkType: n,
        path: r,
        paramsBuilder: u,
        search: A
    } = e, h = (0, a.bG)([o.default], () => o.default.getFingerprint() ?? o.default.getId()), _ = (0, a.bG)([o.default], () => o.default.getInstallationForTracking()), m = (0, a.bG)([s.A], () => s.A.getState(r), [r]), g = i.useMemo(() => null == u ? {
        path: r,
        fingerprint: h,
        installationId: _,
        search: A
    } : u({
        path: r,
        fingerprint: h,
        search: A,
        installationId: _
    }), [r, u, h, _, A]);
    return i.useEffect(() => {
        c || null == m && l.A.openNativeAppModal(r, d.e$_.DEEP_LINK, {
            type: n,
            params: g
        })
    }, [m, r, g, n]), t
}