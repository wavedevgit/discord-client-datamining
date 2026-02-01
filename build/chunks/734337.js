/** chunk id: 734337, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var r = n(627968);
n(64700);
var i = n(311907),
    a = n(397927),
    l = n(964404),
    o = n(121046),
    d = n(513963),
    c = n(951829),
    u = n(731854),
    s = n(985018);

function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.x.DEFAULT,
        [n, f, p] = (0, o.A)(e, t),
        b = (0, i.bG)([l.Ay], () => l.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return n ? (0, r.jsx)(a.sLh, {
        id: "self-video-hide",
        label: s.intl.string(s.t.MH8ESU),
        checked: !f,
        action: () => {
            if (b || f) return p(!f);
            (0, a.qfG)(e => {
                var t, n;
                return (0, r.jsx)(d.A, (t = function(e) {
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
                }({}, e), n = n = {
                    type: c.f.VIDEO,
                    onConfirm: () => p(!f)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                    var n = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n.push.apply(n, r)
                    }
                    return n
                })(Object(n)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                }), t))
            })
        }
    }) : null
}