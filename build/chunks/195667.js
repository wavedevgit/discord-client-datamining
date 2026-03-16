/** chunk id: 195667 params = (module,exports,require) **/
_.d(e, {
    r: () => n
});
var E = _(311907),
    A = _(899847),
    I = _(842144);

function n(t, e, _, n) {
    var S, T;
    let {
        comparator: C = (t, e) => t === e
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, i = E => _(I.A.getSettings(E)?.[t]?.[e]);
    return {
        getControlledSetting: i,
        updateControlledSetting: (S = i, T = (_, E) => null == _ ? Promise.resolve() : A.Ay.updateTeenSettings(_, t, t => {
            t[e] = n(E, t[e])
        }), function(t, e) {
            return "function" == typeof e ? T(t, e(S(t))) : T(t, e)
        }),
        useControlledSetting: t => (0, E.bG)([I.A], () => i(t), [t], C)
    }
}