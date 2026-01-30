/** chunk id: 178629, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => i
});
var r = n(64700),
    l = n(664336);

function i() {
    let e = r.useRef(new l.A),
        t = r.useCallback(t => {
            e.current.handleScroll(t)
        }, []);
    return {
        resetScrollPosition: r.useCallback(() => {
            e.current.scrollPosition.set(0)
        }, []),
        scrollPosition: e.current.scrollPosition,
        onScroll: t
    }
}