/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var i = n(64700),
    a = n(933725),
    r = n(849841);

function s(e, t) {
    let [n, s] = i.useState(!1), l = i.useCallback(async () => {
        null != e && (s(!0), await (0, a.m)(e, !0), s(!1)), t?.()
    }, [e, t]), o = (0, r.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: l,
        onEditProfile: i.useCallback(() => {
            t?.(), o()
        }, [o, t])
    }
}