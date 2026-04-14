/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var a = n(64700),
    r = n(933725),
    i = n(849841);

function c(e, t) {
    let [n, c] = a.useState(!1), s = a.useCallback(async () => {
        null != e && (c(!0), await (0, r.m)(e, !0), c(!1)), t?.()
    }, [e, t]), o = (0, i.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: a.useCallback(() => {
            t?.(), o()
        }, [o, t])
    }
}