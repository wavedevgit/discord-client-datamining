/** chunk id: 734337, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => f
}), r(896048);
var n = r(627968);
r(64700);
var o = r(311907),
    i = r(397927),
    l = r(964404),
    a = r(121046),
    c = r(513963),
    u = r(951829),
    s = r(731854),
    b = r(985018);

function f(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : s.x.DEFAULT,
        [r, f, p] = (0, a.A)(e, t),
        y = (0, o.bG)([l.Ay], () => l.Ay.disableHideSelfStreamAndVideoConfirmationAlert);
    return r ? (0, n.jsx)(i.sLh, {
        id: "self-video-hide",
        label: b.intl.string(b.t.MH8ESU),
        checked: !f,
        action: () => {
            if (y || f) return p(!f);
            (0, i.qfG)(e => {
                var t, r;
                return (0, n.jsx)(c.A, (t = function(e) {
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
                }({}, e), r = r = {
                    type: u.f.VIDEO,
                    onConfirm: () => p(!f)
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
                    var r = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var n = Object.getOwnPropertySymbols(e);
                        r.push.apply(r, n)
                    }
                    return r
                })(Object(r)).forEach(function(e) {
                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                }), t))
            })
        }
    }) : null
}