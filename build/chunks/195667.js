/** chunk id: 195667, original params: e,t,n (module,exports,require) **/
n.d(t, {
    r: () => l
});
var i = n(311907),
    s = n(899847),
    a = n(842144);

function l(e, t, n, l) {
    var r, o;
    let {
        comparator: c = (e, t) => e === t
    } = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {}, d = i => n(a.A.getSettings(i)?.[e]?.[t]);
    return {
        getControlledSetting: d,
        updateControlledSetting: (r = d, o = (n, i) => null == n ? Promise.resolve() : s.Ay.updateTeenSettings(n, e, e => {
            e[t] = l(i, e[t])
        }), function(e, t) {
            return "function" == typeof t ? o(e, t(r(e))) : o(e, t)
        }),
        useControlledSetting: e => (0, i.bG)([a.A], () => d(e), [e], c)
    }
}