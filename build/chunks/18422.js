/** chunk id: 18422 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    a = n(607399),
    l = n(311907),
    r = n(197111),
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
    } = e, h = (0, l.bG)([o.default], () => o.default.getFingerprint() ?? o.default.getId()), _ = (0, l.bG)([s.A], () => s.A.getState(a), [a]), m = i.useMemo(() => null == u ? {
        path: a,
        fingerprint: h,
        search: A
    } : u(a, h, A), [a, u, h, A]);
    return i.useEffect(() => {
        c || null == _ && r.A.openNativeAppModal(a, d.e$_.DEEP_LINK, {
            type: n,
            params: m
        })
    }, [_, a, m, n]), t
}