/** chunk id: 928039 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var l = n(64700),
    a = n(884362),
    s = n(311907),
    i = n(775602);

function r(e, t, n) {
    let r = (0, s.bG)([i.A], () => i.A.keyboardModeEnabled),
        u = l.useCallback(e => {
            let n = document.querySelector(e),
                l = t.current;
            null != n && null != l && (n.focus(), l.scrollIntoViewNode({
                node: n,
                padding: 80
            }))
        }, [t]),
        o = l.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        c = l.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, a.Ay)({
        id: e,
        isEnabled: r,
        setFocus: u,
        scrollToStart: o,
        scrollToEnd: c,
        orientation: n?.orientation
    })
}