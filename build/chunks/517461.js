/** chunk id: 517461, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    V: () => a
});
var i = n(64700),
    s = n(506774),
    l = n(964486);

function a(e, t) {
    let [n, a] = i.useState(() => {
        let n = s.w.get(e);
        return null != n ? n : t
    });
    return (0, l.Ay)(() => {
        null == s.w.get(e) && s.w.set(e, t)
    }), [n, i.useCallback(t => {
        a(t), s.w.set(e, t)
    }, [e])]
}