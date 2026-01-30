/** chunk id: 388331, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
}), n(896048);
var r = n(627968);
n(64700);
var i = n(179771),
    l = n(397927),
    a = n(827343),
    s = n(401843),
    o = n(793574),
    c = n(15285),
    u = n(905552),
    d = n(442353),
    p = n(616356),
    h = n(430452),
    g = n(157257),
    f = n(723702),
    m = n(629471),
    A = n(693806),
    _ = n(613057),
    b = n(652215);
let E = {
    [b.e$_.TOGGLE_VIDEO]: {
        scope: {
            [_.sm.ALL]: [i.F.RPC, i.F.RPC_VIDEO_WRITE]
        },
        handler() {
            let e = h.A.isVideoEnabled();
            null != (0, A.A)() && (e ? a.A.setVideoEnabled(!1) : (0, d.A)(() => a.A.setVideoEnabled(!0), b.BRT.APP))
        }
    },
    [b.e$_.TOGGLE_SCREENSHARE]: {
        scope: {
            [_.sm.ALL]: [i.F.RPC, i.F.RPC_SCREENSHARE_WRITE]
        },
        validation: e => (0, m.A)(e).optional().keys({
            pid: e.number().optional().min(0)
        }),
        handler(e) {
            let {
                args: {
                    pid: t
                }
            } = e, i = p.A.getCurrentUserActiveStream(), a = p.A.getStreamerActiveStreamMetadata(), d = (0, u.A)(c.Ay, g.A), h = (0, A.A)();
            null != h && (null != t && null != a && a.pid !== t && (0, f.isWindows)() ? (0, s.XI)(h.guild_id, h.id, {
                pid: t
            }) : null != i ? (0, s.nO)(!1) : null != t && (0, f.isWindows)() ? (0, s.XI)(h.guild_id, h.id, {
                pid: t
            }) : null != d ? (0, s.XI)(h.guild_id, h.id, {
                pid: d.pid
            }) : (0, l.mMO)(async () => {
                let {
                    default: e
                } = await n.e("96811").then(n.bind(n, 648230));
                return t => {
                    var n, i;
                    return (0, r.jsx)(e, (n = function(e) {
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
                    }({}, t), i = i = {
                        analyticsLocations: [o.A.RPC]
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(i)).forEach(function(e) {
                        Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e))
                    }), n))
                }
            }))
        }
    }
}