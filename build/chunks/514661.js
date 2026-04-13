/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => i
});
var a = n(64700),
    r = n(933725),
    c = n(849841);

function i(e, t) {
    let [n, i] = a.useState(!1), s = a.useCallback(async () => {
        null != e && (i(!0), await (0, r.m)(e, !0), i(!1)), t?.()
    }, [e, t]), o = (0, c.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: a.useCallback(() => {
            t?.(), o()
        }, [o, t])
    }
}