/** chunk id: 928039 params = (module,exports,require) **/
s.d(t, {
    A: () => r
});
var i = s(64700),
    a = s(884362),
    l = s(311907),
    n = s(775602);

function r(e, t, s) {
    let r = (0, l.bG)([n.A], () => n.A.keyboardModeEnabled),
        A = i.useCallback(e => {
            let s = document.querySelector(e),
                i = t.current;
            null != s && null != i && (s.focus(), i.scrollIntoViewNode({
                node: s,
                padding: 80
            }))
        }, [t]),
        u = i.useCallback(() => new Promise(e => {
            let s = t.current;
            if (null == s) return e();
            s.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        d = i.useCallback(() => new Promise(e => {
            let s = t.current;
            if (null == s) return e();
            s.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, a.Ay)({
        id: e,
        isEnabled: r,
        setFocus: A,
        scrollToStart: u,
        scrollToEnd: d,
        orientation: s?.orientation
    })
}