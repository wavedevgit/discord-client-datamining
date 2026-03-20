/** chunk id: 778992 params = (module,exports,require) **/
n.d(t, {
    X: () => a
});
var r = n(64700);

function a(e) {
    let {
        slideCount: t,
        intervalMs: n = 3e3
    } = e, [a, i] = (0, r.useState)(0), [l, s] = (0, r.useState)(!1), c = (0, r.useCallback)(e => {
        l || e < 0 || e >= t || (s(!0), setTimeout(() => {
            i(e), s(!1)
        }, 300))
    }, [l, t, 300]);
    return (0, r.useEffect)(() => {
        if (t <= 1) return;
        let e = setInterval(() => {
            c((a + 1) % t)
        }, n);
        return () => clearInterval(e)
    }, [t, n, a, c]), {
        activeSlide: a,
        isTransitioning: l
    }
}