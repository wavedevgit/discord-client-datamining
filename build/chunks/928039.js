/** chunk id: 928039 params = (module,exports,require) **/
a.d(t, {
    A: () => i
});
var r = a(64700),
    n = a(884362),
    l = a(311907),
    s = a(775602);

function i(e, t, a) {
    let i = (0, l.bG)([s.A], () => s.A.keyboardModeEnabled),
        o = r.useCallback(e => {
            let a = document.querySelector(e),
                r = t.current;
            null != a && null != r && (a.focus(), r.scrollIntoViewNode({
                node: a,
                padding: 80
            }))
        }, [t]),
        d = r.useCallback(() => new Promise(e => {
            let a = t.current;
            if (null == a) return e();
            a.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        c = r.useCallback(() => new Promise(e => {
            let a = t.current;
            if (null == a) return e();
            a.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, n.Ay)({
        id: e,
        isEnabled: i,
        setFocus: o,
        scrollToStart: d,
        scrollToEnd: c,
        orientation: a?.orientation
    })
}