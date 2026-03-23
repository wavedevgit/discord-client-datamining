/** chunk id: 195667 params = (module,exports,require) **/
n.d(t, {
    r: () => u
});
var l = n(311907),
    r = n(899847),
    i = n(842144);

function u(e, t, n, u) {
    var d, s;
    let {
        comparator: a = (e, t) => e === t
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, o = l => n(i.A.getSettings(l)?.[e]?.[t]);
    return {
        getControlledSetting: o,
        updateControlledSetting: (d = o, s = (n, l) => null == n ? Promise.resolve() : r.Ay.updateTeenSettings(n, e, e => {
            e[t] = u(l, e[t])
        }), function(e, t) {
            return "function" == typeof t ? s(e, t(d(e))) : s(e, t)
        }),
        useControlledSetting: e => (0, l.bG)([i.A], () => o(e), [e], a)
    }
}