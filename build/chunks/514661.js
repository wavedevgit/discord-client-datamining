/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var a = n(64700),
    r = n(933725),
    i = n(849841);

function o(e, t) {
    let [n, o] = a.useState(!1), s = a.useCallback(async () => {
        null != e && (o(!0), await (0, r.m)(e, !0), o(!1)), t?.()
    }, [e, t]), c = (0, i.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: a.useCallback(() => {
            t?.(), c()
        }, [c, t])
    }
}