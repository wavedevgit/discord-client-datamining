/** Chunk was on 28090 **/
/** chunk id: 282125, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(627968);
n(64700);
var l = n(192308);

function i(e) {
    (0, l.openModalLazy)(async () => {
        let {
            default: t
        } = await n.e("3250").then(n.bind(n, 737865));
        return n => (0, r.jsx)(t, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, e, n))
    })
}