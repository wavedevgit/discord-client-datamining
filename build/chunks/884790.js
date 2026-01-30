/** chunk id: 884790, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(834409),
    u = n(903093),
    o = n(610136),
    c = n(71393),
    d = n(652215),
    s = n(985018);

function b(e, t) {
    let b = t === d.BRT.POPOUT,
        f = (0, i.bG)([c.A], () => c.A.getGuild(e), [e]),
        O = (0, i.bG)([o.A], () => null != f ? o.A.getGuildIncident(f.id) : null);
    return b ? null : (0, r.jsx)(l.Drp, {
        id: "nav-security-actions",
        label: s.intl.string(s.t.UgXhdn),
        action: () => {
            let t = {
                source: a.Eo.MESSAGE,
                alertType: (0, u.$5)(O)
            };
            (0, l.mMO)(async () => {
                let {
                    default: i
                } = await n.e("65614").then(n.bind(n, 671576));
                return n => {
                    var l, a;
                    return (0, r.jsx)(i, (l = function(e) {
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
                    }({}, n), a = a = {
                        guildId: e,
                        analyticsData: t
                    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var r = Object.getOwnPropertySymbols(e);
                            n.push.apply(n, r)
                        }
                        return n
                    })(Object(a)).forEach(function(e) {
                        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(a, e))
                    }), l))
                }
            })
        }
    })
}