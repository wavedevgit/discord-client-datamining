/** chunk id: 514661 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var i = n(64700),
    r = n(933725),
    a = n(849841);

function l(e, t) {
    let [n, l] = i.useState(!1), o = i.useCallback(async () => {
        null != e && (l(!0), await (0, r.m)(e, !0), l(!1)), t?.()
    }, [e, t]), s = (0, a.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: o,
        onEditProfile: i.useCallback(() => {
            t?.(), s()
        }, [s, t])
    }
}