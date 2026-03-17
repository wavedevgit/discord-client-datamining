/** chunk id: 928039 params = (module,exports,require) **/
a.d(t, {
    A: () => i
});
var s = a(64700),
    l = a(884362),
    n = a(311907),
    r = a(775602);

function i(e, t, a) {
    let i = (0, n.bG)([r.A], () => r.A.keyboardModeEnabled),
        A = s.useCallback(e => {
            let a = document.querySelector(e),
                s = t.current;
            null != a && null != s && (a.focus(), s.scrollIntoViewNode({
                node: a,
                padding: 80
            }))
        }, [t]),
        d = s.useCallback(() => new Promise(e => {
            let a = t.current;
            if (null == a) return e();
            a.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        o = s.useCallback(() => new Promise(e => {
            let a = t.current;
            if (null == a) return e();
            a.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, l.Ay)({
        id: e,
        isEnabled: i,
        setFocus: A,
        scrollToStart: d,
        scrollToEnd: o,
        orientation: a?.orientation
    })
}