/** chunk id: 195667 params = (module,exports,require) **/
A.d(_, {
    r: () => t
});
var I = A(311907),
    T = A(899847),
    S = A(842144);

function t(E, _, A, t) {
    var e, C;
    let {
        comparator: O = (E, _) => E === _
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, R = I => A(S.A.getSettings(I)?.[E]?.[_]);
    return {
        getControlledSetting: R,
        updateControlledSetting: (e = R, C = (A, I) => null == A ? Promise.resolve() : T.Ay.updateTeenSettings(A, E, E => {
            E[_] = t(I, E[_])
        }), function(E, _) {
            return "function" == typeof _ ? C(E, _(e(E))) : C(E, _)
        }),
        useControlledSetting: E => (0, I.bG)([S.A], () => R(E), [E], O)
    }
}