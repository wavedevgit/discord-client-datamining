/** Chunk was on 97262 **/
/** chunk id: 358367, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => a
});
var n = i(627968);
i(64700);
var l = i(688810);

function a(e, t) {
    return function(i) {
        let {
            analyticsLocations: a
        } = (0, l.Ay)(t);
        return (0, n.jsx)(l.f5, {
            value: a,
            children: (0, n.jsx)(e, function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(i);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(i, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = i[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, i))
        })
    }
}