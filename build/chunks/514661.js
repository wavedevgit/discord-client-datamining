/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var a = n(64700),
    i = n(933725),
    r = n(849841);

function c(e, t) {
    let [n, c] = a.useState(!1), o = a.useCallback(async () => {
        null != e && (c(!0), await (0, i.m)(e, !0), c(!1)), t?.()
    }, [e, t]), _ = (0, r.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: a.useCallback(() => {
            t?.(), _()
        }, [_, t])
    }
}