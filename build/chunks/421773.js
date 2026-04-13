/** chunk id: 421773 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var a = n(64700),
    o = n(451988);

function r(e, t) {
    let [n, r] = a.useState(!1), i = a.useRef(new o.J_(t, () => r(!1))), l = a.useRef(new o.J_(e, () => r(!0))), c = a.useCallback(() => {
        i.current.cancel(), l.current.cancel()
    }, []);
    a.useEffect(() => c, [c]);
    let s = a.useCallback(() => {
        c(), i.current.delay()
    }, [c]);
    return {
        isHovered: n,
        setIsHovered: r,
        onMouseEnter: a.useCallback(() => {
            c(), l.current.delay()
        }, [c]),
        onMouseLeave: s,
        cancelTimers: c
    }
}