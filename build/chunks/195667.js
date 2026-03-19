/** chunk id: 195667 params = (module,exports,require) **/
n.d(e, {
    r: () => u
});
var i = n(311907),
    l = n(899847),
    r = n(842144);

function u(t, e, n, u) {
    var d, s;
    let {
        comparator: a = (t, e) => t === e
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, o = i => n(r.A.getSettings(i)?.[t]?.[e]);
    return {
        getControlledSetting: o,
        updateControlledSetting: (d = o, s = (n, i) => null == n ? Promise.resolve() : l.Ay.updateTeenSettings(n, t, t => {
            t[e] = u(i, t[e])
        }), function(t, e) {
            return "function" == typeof e ? s(t, e(d(t))) : s(t, e)
        }),
        useControlledSetting: t => (0, i.bG)([r.A], () => o(t), [t], a)
    }
}