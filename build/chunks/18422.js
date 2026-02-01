/** chunk id: 18422, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
}), n(747238);
var r = n(64700),
    i = n(607399),
    l = n(311907),
    a = n(197111),
    s = n(10088),
    o = n(961350),
    c = n(652215);
let u = i.Fr || i.v1;

function d(e) {
    let {
        children: t,
        deepLinkType: n,
        path: i,
        paramsBuilder: d,
        search: p
    } = e, h = (0, l.bG)([o.default], () => {
        var e;
        return null != (e = o.default.getFingerprint()) ? e : o.default.getId()
    }), g = (0, l.bG)([s.A], () => s.A.getState(i), [i]), m = r.useMemo(() => null == d ? {
        path: i,
        fingerprint: h,
        search: p
    } : d(i, h, p), [i, d, h, p]);
    return r.useEffect(() => {
        u || null == g && a.A.openNativeAppModal(i, c.e$_.DEEP_LINK, {
            type: n,
            params: m
        })
    }, [g, i, m, n]), t
}