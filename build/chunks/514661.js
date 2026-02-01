/** chunk id: 514661, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
}), n(896048);
var a = n(64700),
    l = n(933725),
    r = n(849841);

function i(e, t) {
    let [n, i] = a.useState(!1), s = a.useCallback(async () => {
        null != e && (i(!0), await (0, l.m)(e, !0), i(!1)), null == t || t()
    }, [e, t]), o = (0, r.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: s,
        onEditProfile: a.useCallback(() => {
            null == t || t(), o()
        }, [o, t])
    }
}