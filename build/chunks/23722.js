/** chunk id: 23722 params = (module,exports,require) **/
l.d(n, {
    A: () => a
});
var t = l(64700),
    i = l(207803),
    s = l(485745);

function a(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, s.A)(),
        a = t.useRef(e);
    return t.useLayoutEffect(() => {
        a.current = e
    }), t.useCallback(function() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        n && l ? (0, i.VQ)() : a.current(...t)
    }, [n, l])
}