/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(933725),
    a = n(849841);

function o(e, t) {
    let [n, o] = r.useState(!1), s = r.useCallback(async () => {
        null != e && (o(!0), await (0, i.m)(e, !0), o(!1)), t?.()
    }, [e, t]), l = (0, a.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: r.useCallback(() => {
            t?.(), l()
        }, [l, t])
    }
}