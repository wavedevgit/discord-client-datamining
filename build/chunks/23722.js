/** chunk id: 23722 params = (module,exports,require) **/
l.d(t, {
    A: () => a
});
var n = l(64700),
    i = l(207803),
    s = l(485745);

function a(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, s.A)(),
        a = n.useRef(e);
    return n.useLayoutEffect(() => {
        a.current = e
    }), n.useCallback(function() {
        for (var e = arguments.length, n = Array(e), s = 0; s < e; s++) n[s] = arguments[s];
        t && l ? (0, i.VQ)() : a.current(...n)
    }, [t, l])
}