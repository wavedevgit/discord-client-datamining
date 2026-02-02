/** chunk id: 757942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048);
var r = n(627968);
n(64700);
var i = n(735438),
    l = n.n(i),
    s = n(397927),
    a = n(310953),
    o = n(366811),
    c = n(808728),
    d = n(967198),
    u = n(711014),
    _ = n(645959),
    p = n(203982),
    m = n(265422),
    g = n(652215),
    A = n(790782);

function f(e, t) {
    return [{
        resourceId: e,
        type: A.P.GUILD_EVENT
    }, ...e === g.ME ? _.A.getPrivateChannelIds() : (0, a.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let b = l().throttle(function(e, t) {
    var i, l, a;
    let _, A, b, {
            channelPredicate: h = () => !0,
            guildPredicate: E = () => !0,
            guildFeaturePredicate: O = () => !1,
            ensureChatIsVisible: x = () => !1,
            withVoiceChannels: C = !1
        } = t,
        S = null != (i = o.A.getState().guildId) ? i : g.ME,
        T = o.A.getState().channelId,
        I = (a = S, A = (_ = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(a), e > 0 ? _.slice(A).concat(_.slice(0, A), a) : (_.splice(A, 0, a), _.slice(A + 1).concat(_.slice(0, A + 1)))),
        N = e > 0 ? 0 : I.length - 1,
        j = f(S, C),
        y = j.indexOf(T) + e;
    for (; null != S && "" !== S;) {
        if (b = j[y], E(S))
            for (; null != b && "" !== b;) {
                if ("string" == typeof b) {
                    if (h(S, b)) return (0, m.i)(S, b, !1, x(S, b))
                } else if ("object" == typeof b && O(b.resourceId, b.type)) return S !== d.A.getGuildId() && (0, m.i)(S, null == (l = c.Ay.getDefaultChannel(S)) ? void 0 : l.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(n.bind(n, 926956));
                    return t => (0, r.jsx)(e, function(e, t) {
                        return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(t)).forEach(function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }), e
                    }(function(e) {
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
                    }({}, t), {
                        guildId: S
                    }))
                });
                y += e, b = j[y]
            }
        if (N += e, null == (S = I[N]) || "" === S) break;
        j = f(S, C), y = e < 0 ? j.length - 1 : 0
    }
    p._.dispatch(g.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, g.ugG)