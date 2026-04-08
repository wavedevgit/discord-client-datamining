/** chunk id: 421773 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var n = a(64700),
    r = a(451988);

function o(e, t) {
    let [a, o] = n.useState(!1), i = n.useRef(new r.J_(t, () => o(!1))), l = n.useRef(new r.J_(e, () => o(!0))), c = n.useCallback(() => {
        i.current.cancel(), l.current.cancel()
    }, []);
    n.useEffect(() => c, [c]);
    let s = n.useCallback(() => {
        c(), i.current.delay()
    }, [c]);
    return {
        isHovered: a,
        setIsHovered: o,
        onMouseEnter: n.useCallback(() => {
            c(), l.current.delay()
        }, [c]),
        onMouseLeave: s,
        cancelTimers: c
    }
}