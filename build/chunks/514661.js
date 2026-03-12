/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var a = n(64700),
    i = n(933725),
    r = n(849841);

function s(e, t) {
    let [n, s] = a.useState(!1), l = a.useCallback(async () => {
        null != e && (s(!0), await (0, i.m)(e, !0), s(!1)), t?.()
    }, [e, t]), o = (0, r.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: a.useCallback(() => {
            t?.(), o()
        }, [o, t])
    }
}