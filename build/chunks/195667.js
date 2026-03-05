/** chunk id: 195667, original params: E,_,I (module,exports,require) **/
I.d(_, {
    r: () => C
});
var S = I(311907),
    A = I(899847),
    T = I(842144);

function C(E, _, I, C) {
    var O, t;
    let {
        comparator: e = (E, _) => E === _
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, R = S => I(T.A.getSettings(S)?.[E]?.[_]);
    return {
        getControlledSetting: R,
        updateControlledSetting: (O = R, t = (I, S) => null == I ? Promise.resolve() : A.Ay.updateTeenSettings(I, E, E => {
            E[_] = C(S, E[_])
        }), function(E, _) {
            return "function" == typeof _ ? t(E, _(O(E))) : t(E, _)
        }),
        useControlledSetting: E => (0, S.bG)([T.A], () => R(E), [E], e)
    }
}