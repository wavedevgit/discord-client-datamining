/** chunk id: 178629 params = (module,exports,require) **/
a.d(t, {
    G: () => l
});
var n = a(64700),
    i = a(664336);

function l() {
    let e = n.useRef(new i.A),
        t = n.useCallback(t => {
            e.current.handleScroll(t)
        }, []);
    return {
        resetScrollPosition: n.useCallback(() => {
            e.current.scrollPosition.set(0)
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t
    }
}