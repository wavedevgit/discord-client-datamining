/** chunk id: 426190, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => u,
    z: () => _
}), n(896048);
var r = n(64700),
    i = n(417597),
    l = n(966107),
    s = n(773669),
    a = n(695515),
    o = n(438732);
let c = new Set(["US"]),
    d = new Set(["en-US", "es-ES"]),
    u = () => {
        let e = (0, o.A)(),
            t = (0, i.bG)([a.A], () => a.A.getUserCountry()),
            n = (0, i.bG)([s.default], () => s.default.locale);
        return r.useEffect(() => {
            null == t && (0, l.xf)()
        }, [t]), !e && null != t && c.has(t.alpha2) && d.has(n)
    },
    _ = () => {
        let e = (0, o.A)(),
            t = u();
        return !e && !t
    }