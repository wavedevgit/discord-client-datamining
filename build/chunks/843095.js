/** chunk id: 843095, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => i
});
var r = n(627968),
    l = n(397927);

function i(e) {
    return (0, l.mMO)(async () => {
        let {
            default: t
        } = await Promise.all([n.e("91284"), n.e("14691")]).then(n.bind(n, 314461));
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
        }({}, n, e))
    })
}