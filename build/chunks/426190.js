/** chunk id: 426190 params = (module,exports,require) **/
_.d(t, {
    N: () => c,
    z: () => n
});
var o = _(64700),
    r = _(417597),
    a = _(966107),
    s = _(773669),
    i = _(695515),
    l = _(438732);
let p = new Set(["US"]),
    b = new Set(["en-US", "es-ES"]),
    c = () => {
        let e = (0, l.A)(),
            t = (0, r.bG)([i.A], () => i.A.getUserCountry()),
            _ = (0, r.bG)([s.default], () => s.default.locale);
        return o.useEffect(() => {
            null == t && (0, a.xf)()
        }, [t]), !e && null != t && p.has(t.alpha2) && b.has(_)
    },
    n = () => {
        let e = (0, l.A)(),
            t = c();
        return !e && !t
    }