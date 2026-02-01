/** chunk id: 928039, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(884362),
    l = n(311907),
    a = n(775602);

function o(e, t, n) {
    let o = (0, l.bG)([a.A], () => a.A.keyboardModeEnabled),
        s = r.useCallback(e => {
            let n = document.querySelector(e),
                r = t.current;
            null != n && null != r && (n.focus(), r.scrollIntoViewNode({
                node: n,
                padding: 80
            }))
        }, [t]),
        c = r.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        u = r.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, i.Ay)({
        id: e,
        isEnabled: o,
        setFocus: s,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: null == n ? void 0 : n.orientation
    })
}