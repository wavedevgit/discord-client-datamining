/** chunk id: 195667 params = (module,exports,require) **/
E.d(t, {
    r: () => S
});
var e = E(311907),
    A = E(899847),
    I = E(842144);

function S(_, t, E, S) {
    var T, n;
    let {
        comparator: C = (_, t) => _ === t
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, R = e => E(I.A.getSettings(e)?.[_]?.[t]);
    return {
        getControlledSetting: R,
        updateControlledSetting: (T = R, n = (E, e) => null == E ? Promise.resolve() : A.Ay.updateTeenSettings(E, _, _ => {
            _[t] = S(e, _[t])
        }), function(_, t) {
            return "function" == typeof t ? n(_, t(T(_))) : n(_, t)
        }),
        useControlledSetting: _ => (0, e.bG)([I.A], () => R(_), [_], C)
    }
}