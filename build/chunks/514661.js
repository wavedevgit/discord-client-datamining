/** chunk id: 514661, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => a
}), t(896048);
var r = t(64700),
    i = t(933725),
    o = t(849841);

function a(e, n) {
    let [t, a] = r.useState(!1), l = r.useCallback(async () => {
        null != e && (a(!0), await (0, i.m)(e, !0), a(!1)), null == n || n()
    }, [e, n]), s = (0, o.A)(e);
    return {
        isAdopting: t,
        onAdoptTag: l,
        onEditProfile: r.useCallback(() => {
            null == n || n(), s()
        }, [s, n])
    }
}