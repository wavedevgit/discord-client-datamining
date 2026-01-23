/** Chunk was on 91042 **/
/** chunk id: 972432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(827343),
    o = n(430452),
    d = n(287809),
    s = n(824744),
    u = n(723702),
    c = n(731854),
    A = n(985018);

function b(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        b = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        g = (0, i.bG)([o.A], () => o.A.getLocalVolume(e, n), [e, n]),
        f = e === (null == (t = d.default.getCurrentUser()) ? void 0 : t.id),
        m = n === c.x.STREAM;
    return f ? null : (0, l.jsx)(r.aK1, {
        id: "user-volume",
        label: m ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
        control: (t, i) => {
            var o, d;
            return (0, l.jsx)(r.i42, (o = function(e) {
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
            }({}, t), d = d = {
                ref: i,
                value: (0, s.M)(g),
                maxValue: u.isPlatformEmbedded ? 200 : 100,
                onChange: t => {
                    a.A.setLocalVolume(e, (0, s.w)(t), n), null == b || b(t)
                },
                "aria-label": m ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(d)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, l)
                }
                return n
            })(Object(d)).forEach(function(e) {
                Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(d, e))
            }), o))
        }
    })
}