/** chunk id: 23722 params = (module,exports,require) **/
n.d(l, {
    A: () => a
});
var t = n(64700),
    i = n(207803),
    s = n(485745);

function a(e) {
    let l = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = (0, s.A)(),
        a = t.useRef(e);
    return t.useLayoutEffect(() => {
        a.current = e
    }), t.useCallback(function() {
        for (var e = arguments.length, t = Array(e), s = 0; s < e; s++) t[s] = arguments[s];
        l && n ? (0, i.VQ)() : a.current(...t)
    }, [l, n])
}