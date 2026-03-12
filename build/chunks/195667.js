/** chunk id: 195667 params = (module,exports,require) **/
A.d(t, {
    r: () => T
});
var E = A(311907),
    e = A(899847),
    C = A(842144);

function T(_, t, A, T) {
    var I, S;
    let {
        comparator: n = (_, t) => _ === t
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, R = E => A(C.A.getSettings(E)?.[_]?.[t]);
    return {
        getControlledSetting: R,
        updateControlledSetting: (I = R, S = (A, E) => null == A ? Promise.resolve() : e.Ay.updateTeenSettings(A, _, _ => {
            _[t] = T(E, _[t])
        }), function(_, t) {
            return "function" == typeof t ? S(_, t(I(_))) : S(_, t)
        }),
        useControlledSetting: _ => (0, E.bG)([C.A], () => R(_), [_], n)
    }
}