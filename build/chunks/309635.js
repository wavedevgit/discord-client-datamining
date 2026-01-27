/** Chunk was on 95481 **/
/** chunk id: 309635, original params: t,e,n (module,exports,require) **/
n.d(e, {
    W: () => a
});
var r = n(627968);
n(64700);
var i = n(397927);
let a = t => {
    let {
        initialSelectedEffect: e,
        analyticsLocations: a,
        guild: l
    } = t;
    (0, i.mMO)(async () => {
        let {
            default: t
        } = await n.e("92818").then(n.bind(n, 892873));
        return n => {
            var i, s;
            return (0, r.jsx)(t, (i = function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
                        return Object.getOwnPropertyDescriptor(n, t).enumerable
                    }))), r.forEach(function(e) {
                        var r;
                        r = n[e], e in t ? Object.defineProperty(t, e, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[e] = r
                    })
                }
                return t
            }({}, n), s = s = {
                guild: l,
                initialSelectedEffect: e,
                analyticsLocations: a
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : (function(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    n.push.apply(n, r)
                }
                return n
            })(Object(s)).forEach(function(t) {
                Object.defineProperty(i, t, Object.getOwnPropertyDescriptor(s, t))
            }), i))
        }
    }, {})
}