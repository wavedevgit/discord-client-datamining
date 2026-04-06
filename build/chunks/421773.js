/** chunk id: 421773 params = (module,exports,require) **/
a.d(t, {
    A: () => o
});
var n = a(64700),
    r = a(451988);

function o(e, t) {
    let [a, o] = n.useState(!1), i = n.useRef(new r.J_(t, () => o(!1))), c = n.useRef(new r.J_(e, () => o(!0))), l = n.useCallback(() => {
        i.current.cancel(), c.current.cancel()
    }, []);
    n.useEffect(() => l, [l]);
    let s = n.useCallback(() => {
        l(), i.current.delay()
    }, [l]);
    return {
        isHovered: a,
        setIsHovered: o,
        onMouseEnter: n.useCallback(() => {
            l(), c.current.delay()
        }, [l]),
        onMouseLeave: s,
        cancelTimers: l
    }
}