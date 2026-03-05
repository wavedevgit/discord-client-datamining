/** chunk id: 514661, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => r
});
var i = t(64700),
    _ = t(933725),
    a = t(849841);

function r(e, n) {
    let [t, r] = i.useState(!1), o = i.useCallback(async () => {
        null != e && (r(!0), await (0, _.m)(e, !0), r(!1)), n?.()
    }, [e, n]), l = (0, a.A)(e);
    return {
        isAdopting: t,
        onAdoptTag: o,
        onEditProfile: i.useCallback(() => {
            n?.(), l()
        }, [l, n])
    }
}