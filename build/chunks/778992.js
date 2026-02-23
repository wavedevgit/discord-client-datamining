/** chunk id: 778992, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => r
});
var a = n(64700);

function r(e) {
    let {
        slideCount: t,
        intervalMs: n = 3e3
    } = e, [r, i] = (0, a.useState)(0), [s, l] = (0, a.useState)(!1), c = (0, a.useCallback)(e => {
        s || e < 0 || e >= t || (l(!0), setTimeout(() => {
            i(e), l(!1)
        }, 300))
    }, [s, t, 300]);
    return (0, a.useEffect)(() => {
        if (t <= 1) return;
        let e = setInterval(() => {
            c((r + 1) % t)
        }, n);
        return () => clearInterval(e)
    }, [t, n, r, c]), {
        activeSlide: r,
        isTransitioning: s
    }
}