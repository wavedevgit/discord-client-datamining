/** Chunk was on 78528 **/
/** chunk id: 514661, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => s
}), t(896048);
var l = t(64700),
    i = t(933725),
    r = t(849841);

function s(e, n) {
    let [t, s] = l.useState(!1), a = l.useCallback(async () => {
        null != e && (s(!0), await (0, i.m)(e, !0), s(!1)), null == n || n()
    }, [e, n]), c = (0, r.A)(e);
    return {
        isAdopting: t,
        onAdoptTag: a,
        onEditProfile: l.useCallback(() => {
            null == n || n(), c()
        }, [c, n])
    }
}