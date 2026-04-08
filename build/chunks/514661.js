/** chunk id: 514661 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(64700),
    i = n(933725),
    l = n(849841);

function s(e, t) {
    let [n, s] = a.useState(!1), r = a.useCallback(async () => {
        null != e && (s(!0), await (0, i.m)(e, !0), s(!1)), t?.()
    }, [e, t]), o = (0, l.A)(e);
    return {
        isAdopting: n,
        onAdoptTag: r,
        onEditProfile: a.useCallback(() => {
            t?.(), o()
        }, [o, t])
    }
}