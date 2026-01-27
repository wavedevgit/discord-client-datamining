/** Chunk was on 86142 **/
/** chunk id: 565478, original params: e,t,n (module,exports,require) **/
n.d(t, {
    W: () => d
});
var r = n(64700),
    i = n(735438),
    s = n(417597),
    l = n(32120),
    a = n(686683),
    o = n(574454),
    c = n(871210);
let d = function(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        d = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        u = (0, s.bG)([o.A], () => o.A.validate(e), [e]),
        h = (0, s.bG)([o.A], () => o.A.isRateLimited()),
        p = (0, a.G)(),
        g = r.useMemo(() => (0, i.debounce)(e => l.A.attemptPomelo(e, n ? "registration" : "modal", n, d), p), [p, n, d]);
    return r.useEffect(() => {
        t && !h && null == u && "" !== e && g(e)
    }, [t, h, u, e, g]), r.useMemo(() => null != u ? (0, c.z2)(u) : void 0, [u])
}