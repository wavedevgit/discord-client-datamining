/** chunk id: 778992, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => l
}), n(896048);
var r = n(64700);

function l(e) {
    let {
        slideCount: t,
        intervalMs: n = 3e3
    } = e, [l, i] = (0, r.useState)(0), [a, s] = (0, r.useState)(!1), o = (0, r.useCallback)(e => {
        a || e < 0 || e >= t || (s(!0), setTimeout(() => {
            i(e), s(!1)
        }, 300))
    }, [a, t, 300]);
    return (0, r.useEffect)(() => {
        if (t <= 1) return;
        let e = setInterval(() => {
            o((l + 1) % t)
        }, n);
        return () => clearInterval(e)
    }, [t, n, l, o]), {
        activeSlide: l,
        isTransitioning: a
    }
}