/** chunk id: 514661 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var o = t(64700),
    r = t(933725),
    i = t(849841);

function _(e, n) {
    let [t, _] = o.useState(!1), l = o.useCallback(async () => {
        null != e && (_(!0), await (0, r.m)(e, !0), _(!1)), n?.()
    }, [e, n]), a = (0, i.A)(e);
    return {
        isAdopting: t,
        onAdoptTag: l,
        onEditProfile: o.useCallback(() => {
            n?.(), a()
        }, [a, n])
    }
}