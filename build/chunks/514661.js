/** chunk id: 514661 params = (module,exports,require) **/
t.d(n, {
    A: () => i
});
var o = t(64700),
    r = t(933725),
    _ = t(849841);

function i(e, n) {
    let [t, i] = o.useState(!1), l = o.useCallback(async () => {
        null != e && (i(!0), await (0, r.m)(e, !0), i(!1)), n?.()
    }, [e, n]), a = (0, _.A)(e);
    return {
        isAdopting: t,
        onAdoptTag: l,
        onEditProfile: o.useCallback(() => {
            n?.(), a()
        }, [a, n])
    }
}