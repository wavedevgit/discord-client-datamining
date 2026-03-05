/** chunk id: 928039, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var a = n(64700),
    l = n(884362),
    r = n(311907),
    s = n(775602);

function o(e, t, n) {
    let o = (0, r.bG)([s.A], () => s.A.keyboardModeEnabled),
        i = a.useCallback(e => {
            let n = document.querySelector(e),
                a = t.current;
            null != n && null != a && (n.focus(), a.scrollIntoViewNode({
                node: n,
                padding: 80
            }))
        }, [t]),
        c = a.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        u = a.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, l.Ay)({
        id: e,
        isEnabled: o,
        setFocus: i,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: n?.orientation
    })
}