/** chunk id: 928039 params = (module,exports,require) **/
"use strict";
r.d(t, {
    A: () => i
});
var n = r(64700),
    l = r(884362),
    s = r(311907),
    a = r(775602);

function i(e, t, r) {
    let i = (0, s.bG)([a.A], () => a.A.keyboardModeEnabled),
        u = n.useCallback(e => {
            let r = document.querySelector(e),
                n = t.current;
            null != r && null != n && (r.focus(), n.scrollIntoViewNode({
                node: r,
                padding: 80
            }))
        }, [t]),
        c = n.useCallback(() => new Promise(e => {
            let r = t.current;
            if (null == r) return e();
            r.scrollTo({
                to: 0,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]),
        o = n.useCallback(() => new Promise(e => {
            let r = t.current;
            if (null == r) return e();
            r.scrollTo({
                to: Number.MAX_SAFE_INTEGER,
                callback: () => requestAnimationFrame(() => e())
            })
        }), [t]);
    return (0, l.Ay)({
        id: e,
        isEnabled: i,
        setFocus: u,
        scrollToStart: c,
        scrollToEnd: o,
        orientation: r?.orientation
    })
}