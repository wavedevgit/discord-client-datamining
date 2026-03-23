/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var i = n(64700),
    a = n(933725),
    r = n(849841);

function l(e, t) {
    let [n, l] = i.useState(!1), s = i.useCallback(async () => {
        null != e && (l(!0), await (0, a.m)(e, !0), l(!1)), t?.()
    }, [e, t]), o = (0, r.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: i.useCallback(() => {
            t?.(), o()
        }, [o, t])
    }
}