/** chunk id: 972432, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var r = n(311907),
    l = n(397927),
    a = n(827343),
    s = n(430452),
    o = n(287809),
    d = n(824744),
    u = n(723702),
    c = n(731854),
    A = n(985018);

function f(e) {
    var t;
    let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : c.x.DEFAULT,
        f = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
        g = (0, r.bG)([s.A], () => s.A.getLocalVolume(e, n), [e, n]),
        b = e === (null == (t = o.default.getCurrentUser()) ? void 0 : t.id),
        p = n === c.x.STREAM;
    return b ? null : (0, i.jsx)(l.aK1, {
        id: "user-volume",
        label: p ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF),
        control: (t, r) => {
            var s, o;
            return (0, i.jsx)(l.i42, (s = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        i = Object.keys(n);
                    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }))), i.forEach(function(t) {
                        var i;
                        i = n[t], t in e ? Object.defineProperty(e, t, {
                            value: i,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = i
                    })
                }
                return e
            }({}, t), o = o = {
                ref: r,
                value: (0, d.M)(g),
                maxValue: u.isPlatformEmbedded ? 200 : 100,
                onChange: t => {
                    a.A.setLocalVolume(e, (0, d.w)(t), n), null == f || f(t)
                },
                "aria-label": p ? A.intl.string(A.t.t4JBnI) : A.intl.string(A.t.m7TNdF)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(s, Object.getOwnPropertyDescriptors(o)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, i)
                }
                return n
            })(Object(o)).forEach(function(e) {
                Object.defineProperty(s, e, Object.getOwnPropertyDescriptor(o, e))
            }), s))
        }
    })
}