/** chunk id: 426190 params = (module,exports,require) **/
n.d(t, {
    N: () => u,
    z: () => m
});
var i = n(64700),
    s = n(417597),
    l = n(966107),
    r = n(773669),
    a = n(695515),
    o = n(438732);
let d = new Set(["US"]),
    c = new Set(["en-US", "es-ES"]),
    u = () => {
        let e = (0, o.A)(),
            t = (0, s.bG)([a.A], () => a.A.getUserCountry()),
            n = (0, s.bG)([r.default], () => r.default.locale);
        return i.useEffect(() => {
            null == t && (0, l.xf)()
        }, [t]), !e && null != t && d.has(t.alpha2) && c.has(n)
    },
    m = () => {
        let e = (0, o.A)(),
            t = u();
        return !e && !t
    }