/** chunk id: 426190, original params: e,t,n (module,exports,require) **/
n.d(t, {
    N: () => u,
    z: () => _
});
var i = n(64700),
    s = n(417597),
    a = n(966107),
    l = n(773669),
    r = n(695515),
    o = n(438732);
let c = new Set(["US"]),
    d = new Set(["en-US", "es-ES"]),
    u = () => {
        let e = (0, o.A)(),
            t = (0, s.bG)([r.A], () => r.A.getUserCountry()),
            n = (0, s.bG)([l.default], () => l.default.locale);
        return i.useEffect(() => {
            null == t && (0, a.xf)()
        }, [t]), !e && null != t && c.has(t.alpha2) && d.has(n)
    },
    _ = () => {
        let e = (0, o.A)(),
            t = u();
        return !e && !t
    }