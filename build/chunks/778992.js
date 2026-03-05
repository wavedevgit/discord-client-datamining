/** chunk id: 778992 params = (module,exports,require) **/
a.d(t, {
    X: () => r
});
var n = a(64700);

function r(e) {
    let {
        slideCount: t,
        intervalMs: a = 3e3
    } = e, [r, i] = (0, n.useState)(0), [s, l] = (0, n.useState)(!1), c = (0, n.useCallback)(e => {
        s || e < 0 || e >= t || (l(!0), setTimeout(() => {
            i(e), l(!1)
        }, 300))
    }, [s, t, 300]);
    return (0, n.useEffect)(() => {
        if (t <= 1) return;
        let e = setInterval(() => {
            c((r + 1) % t)
        }, a);
        return () => clearInterval(e)
    }, [t, a, r, c]), {
        activeSlide: r,
        isTransitioning: s
    }
}