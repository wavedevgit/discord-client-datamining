/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(64700),
    r = n(933725),
    a = n(849841);

function o(e, t) {
    let [n, o] = i.useState(!1), s = i.useCallback(async () => {
        null != e && (o(!0), await (0, r.m)(e, !0), o(!1)), t?.()
    }, [e, t]), l = (0, a.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: i.useCallback(() => {
            t?.(), l()
        }, [l, t])
    }
}