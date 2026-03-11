/** chunk id: 195667 params = (module,exports,require) **/
I.d(_, {
    r: () => C
});
var A = I(311907),
    S = I(899847),
    T = I(842144);

function C(E, _, I, C) {
    var t, O;
    let {
        comparator: e = (E, _) => E === _
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, R = A => I(T.A.getSettings(A)?.[E]?.[_]);
    return {
        getControlledSetting: R,
        updateControlledSetting: (t = R, O = (I, A) => null == I ? Promise.resolve() : S.Ay.updateTeenSettings(I, E, E => {
            E[_] = C(A, E[_])
        }), function(E, _) {
            return "function" == typeof _ ? O(E, _(t(E))) : O(E, _)
        }),
        useControlledSetting: E => (0, A.bG)([T.A], () => R(E), [E], e)
    }
}