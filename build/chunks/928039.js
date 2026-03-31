/** chunk id: 928039 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    s = n(884362),
    r = n(311907),
    l = n(775602);

function a(e, t, n) {
    let a = (0, r.bG)([l.A], () => l.A.keyboardModeEnabled),
        d = i.useCallback(e => {
            let n = document.querySelector(e),
                i = t.current;
            null != n && null != i && (n.focus(), i.scrollIntoViewNode({
                node: n,
                padding: 80
            }))
        }, [t]),
        o = i.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        h = i.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, s.Ay)({
        id: e,
        isEnabled: a,
        setFocus: d,
        scrollToStart: o,
        scrollToEnd: h,
        orientation: n?.orientation
    })
}