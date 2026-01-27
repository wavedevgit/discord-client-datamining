/** Chunk was on 77870 **/
/** chunk id: 421773, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var r = n(64700),
    l = n(451988);

function i(e, t) {
    let [n, i] = r.useState(!1), s = r.useRef(new l.J_(t, () => i(!1))), a = r.useRef(new l.J_(e, () => i(!0))), o = r.useCallback(() => {
        s.current.cancel(), a.current.cancel()
    }, []);
    r.useEffect(() => o, [o]);
    let c = r.useCallback(() => {
        o(), s.current.delay()
    }, [o]);
    return {
        isHovered: n,
        setIsHovered: i,
        onMouseEnter: r.useCallback(() => {
            o(), a.current.delay()
        }, [o]),
        onMouseLeave: c,
        cancelTimers: o
    }
}