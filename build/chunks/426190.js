/** chunk id: 426190, original params: e,t,r (module,exports,require) **/
r.d(t, {
    N: () => u,
    z: () => _
}), r(896048);
var n = r(64700),
    i = r(417597),
    s = r(966107),
    o = r(773669),
    l = r(695515),
    a = r(438732);
let c = new Set(["US"]),
    p = new Set(["en-US", "es-ES"]),
    u = () => {
        let e = (0, a.A)(),
            t = (0, i.bG)([l.A], () => l.A.getUserCountry()),
            r = (0, i.bG)([o.default], () => o.default.locale);
        return n.useEffect(() => {
            null == t && (0, s.xf)()
        }, [t]), !e && null != t && c.has(t.alpha2) && p.has(r)
    },
    _ = () => {
        let e = (0, a.A)(),
            t = u();
        return !e && !t
    }