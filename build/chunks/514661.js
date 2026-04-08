/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var a = n(64700),
    i = n(933725),
    r = n(849841);

function o(e, t) {
    let [n, o] = a.useState(!1), c = a.useCallback(async () => {
        null != e && (o(!0), await (0, i.m)(e, !0), o(!1)), t?.()
    }, [e, t]), s = (0, r.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: c,
        onEditProfile: a.useCallback(() => {
            t?.(), s()
        }, [s, t])
    }
}