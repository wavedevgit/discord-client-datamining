/** Chunk was on 12236 **/
/** chunk id: 132318, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var l = n(627968),
    r = n(64700),
    i = n(397927),
    a = n(46054),
    s = n(861662),
    o = n(967972);
let d = e => {
    let {
        node: {
            info: t
        }
    } = e, n = r.useMemo(() => {
        var e, t;
        return a.A.reactParserFor((e = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    l = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), l.forEach(function(t) {
                    var l;
                    l = n[t], t in e ? Object.defineProperty(e, t, {
                        value: l,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = l
                })
            }
            return e
        }({}, a.A.defaultRules), t = t = {
            link: s.B
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var l = Object.getOwnPropertySymbols(e);
                n.push.apply(n, l)
            }
            return n
        })(Object(t)).forEach(function(n) {
            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e))
    }, []);
    return null == t ? null : (0, l.jsx)(i.po8, {
        className: o.e,
        messageType: i.YCn.INFO,
        children: n(t)
    })
}