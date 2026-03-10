/** chunk id: 928039 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var a = n(64700),
    i = n(884362),
    r = n(311907),
    c = n(775602);

function o(e, t, n) {
    let o = (0, r.bG)([c.A], () => c.A.keyboardModeEnabled),
        s = a.useCallback(e => {
            let n = document.querySelector(e),
                a = t.current;
            null != n && null != a && (n.focus(), a.scrollIntoViewNode({
                node: n,
                padding: 80
            }))
        }, [t]),
        l = a.useCallback(() => new Promise(e => {
            let n = t.current;
            if (null == n) return e();
            n.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        _ = a.useCallback(() => new Promise(e => {
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
        scrollToStart: l,
        scrollToEnd: _,
        orientation: n?.orientation
    })
}