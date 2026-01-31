/** chunk id: 928039, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => u
});
var r = n(64700),
    l = n(884362),
    a = n(311907),
    i = n(775602);

function u(t, e, n) {
    let u = (0, a.bG)([i.A], () => i.A.keyboardModeEnabled),
        o = r.useCallback(t => {
            let n = document.querySelector(t),
                r = e.current;
            null != n && null != r && (n.focus(), r.scrollIntoViewNode({
                node: n,
                padding: 80
            }))
        }, [e]),
        s = r.useCallback(() => new Promise(t => {
            let n = e.current;
            if (null == n) return t();
            n.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => t())
            })
        }), [e]),
        c = r.useCallback(() => new Promise(t => {
            let n = e.current;
            if (null == n) return t();
            n.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => t())
            })
        }), [e]);
    return (0, l.Ay)({
        id: t,
        isEnabled: u,
        setFocus: o,
        scrollToStart: s,
        scrollToEnd: c,
        orientation: null == n ? void 0 : n.orientation
    })
}