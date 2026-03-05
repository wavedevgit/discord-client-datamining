/** chunk id: 426190, original params: t,e,i (module,exports,require) **/
i.d(e, {
    N: () => p,
    z: () => d
});
var s = i(64700),
    n = i(417597),
    l = i(966107),
    r = i(773669),
    a = i(695515),
    _ = i(438732);
let o = new Set(["US"]),
    u = new Set(["en-US", "es-ES"]),
    p = () => {
        let t = (0, _.A)(),
            e = (0, n.bG)([a.A], () => a.A.getUserCountry()),
            i = (0, n.bG)([r.default], () => r.default.locale);
        return s.useEffect(() => {
            null == e && (0, l.xf)()
        }, [e]), !t && null != e && o.has(e.alpha2) && u.has(i)
    },
    d = () => {
        let t = (0, _.A)(),
            e = p();
        return !t && !e
    }