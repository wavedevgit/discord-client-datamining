/** chunk id: 928039 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => i
});
var a = s(64700),
    r = s(884362),
    n = s(311907),
    l = s(775602);

function i(e, t, s) {
    let i = (0, n.bG)([l.A], () => l.A.keyboardModeEnabled),
        u = a.useCallback(e => {
            let s = document.querySelector(e),
                a = t.current;
            null != s && null != a && (s.focus(), a.scrollIntoViewNode({
                node: s,
                padding: 80
            }))
        }, [t]),
        c = a.useCallback(() => new Promise(e => {
            let s = t.current;
            if (null == s) return e();
            s.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        d = a.useCallback(() => new Promise(e => {
            let s = t.current;
            if (null == s) return e();
            s.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, r.Ay)({
        id: e,
        isEnabled: i,
        setFocus: u,
        scrollToStart: c,
        scrollToEnd: d,
        orientation: s?.orientation
    })
}