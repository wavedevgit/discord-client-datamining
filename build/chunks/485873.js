/** chunk id: 485873, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
});
var n = r(627968);
r(64700);
var o = r(311907),
    i = r(397927),
    l = r(827343),
    a = r(430452),
    u = r(824744),
    c = r(985018);

function s(e) {
    let t = (0, o.bG)([a.A], () => (0, u.M)(a.A.getInputVolume()));
    return (0, n.jsx)(i.aK1, {
        id: "input",
        label: c.intl.string(c.t.OX2Bnr),
        control: (r, o) => {
            var a, s;
            return (0, n.jsx)(i.i42, (a = function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {},
                        n = Object.keys(r);
                    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable
                    }))), n.forEach(function(t) {
                        var n;
                        n = r[t], t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n
                    })
                }
                return e
            }({}, r), s = s = {
                ref: o,
                value: t,
                onChange: t => l.A.setInputVolume((0, u.w)(t), {
                    analyticsLocations: e
                }),
                "aria-label": c.intl.string(c.t.OX2Bnr)
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    r.push.apply(r, n)
                }
                return r
            })(Object(s)).forEach(function(e) {
                Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e))
            }), a))
        }
    })
}