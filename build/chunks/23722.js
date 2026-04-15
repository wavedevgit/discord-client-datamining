/** chunk id: 23722 params = (module,exports,require) **/
l.d(n, {
    A: () => a
});
var i = l(64700),
    t = l(207803),
    s = l(485745);

function a(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, s.A)(),
        a = i.useRef(e);
    return i.useLayoutEffect(() => {
        a.current = e
    }), i.useCallback(function() {
        for (var e = arguments.length, i = Array(e), s = 0; s < e; s++) i[s] = arguments[s];
        n && l ? (0, t.VQ)() : a.current(...i)
    }, [n, l])
}