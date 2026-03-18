/** chunk id: 195667 params = (module,exports,require) **/
e.d(_, {
    r: () => T
});
var E = e(311907),
    A = e(899847),
    I = e(842144);

function T(t, _, e, T) {
    var S, n;
    let {
        comparator: C = (t, _) => t === _
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, R = E => e(I.A.getSettings(E)?.[t]?.[_]);
    return {
        getControlledSetting: R,
        updateControlledSetting: (S = R, n = (e, E) => null == e ? Promise.resolve() : A.Ay.updateTeenSettings(e, t, t => {
            t[_] = T(E, t[_])
        }), function(t, _) {
            return "function" == typeof _ ? n(t, _(S(t))) : n(t, _)
        }),
        useControlledSetting: t => (0, E.bG)([I.A], () => R(t), [t], C)
    }
}