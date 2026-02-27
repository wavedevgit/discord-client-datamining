/** chunk id: 928039, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var a = n(64700),
    r = n(884362),
    i = n(311907),
    s = n(775602);

function l(e, t, n) {
    let l = (0, i.bG)([s.A], () => s.A.keyboardModeEnabled),
        o = a.useCallback(e => {
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
    return (0, r.Ay)({
        id: e,
        isEnabled: l,
        setFocus: o,
        scrollToStart: c,
        scrollToEnd: u,
        orientation: n?.orientation
    })
}