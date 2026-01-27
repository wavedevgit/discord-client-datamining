/** Chunk was on 76850 **/
/** chunk id: 426190, original params: e,t,r (module,exports,require) **/
r.d(t, {
    N: () => p,
    z: () => _
}), r(896048);
var n = r(64700),
    i = r(417597),
    o = r(966107),
    s = r(773669),
    l = r(695515),
    a = r(438732);
let c = new Set(["US"]),
    u = new Set(["en-US", "es-ES"]),
    p = () => {
        let e = (0, a.A)(),
            t = (0, i.bG)([l.A], () => l.A.getUserCountry()),
            r = (0, i.bG)([s.default], () => s.default.locale);
        return n.useEffect(() => {
            null == t && (0, o.xf)()
        }, [t]), !e && null != t && c.has(t.alpha2) && u.has(r)
    },
    _ = () => {
        let e = (0, a.A)(),
            t = p();
        return !e && !t
    }