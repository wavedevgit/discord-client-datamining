/** Chunk was on 5606 **/
/** chunk id: 757942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
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
    p = n(645959),
    _ = n(203982),
    m = n(265422),
    g = n(652215),
    f = n(790782);

function b(e, t) {
    return [{
        resourceId: e,
        type: f.P.GUILD_EVENT
    }, ...e === g.ME ? p.A.getPrivateChannelIds() : (0, a.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let h = l().throttle(function(e, t) {
    var i, l, a;
    let p, f, h, {
            channelPredicate: A = () => !0,
            guildPredicate: E = () => !0,
            guildFeaturePredicate: x = () => !1,
            ensureChatIsVisible: O = () => !1,
            withVoiceChannels: C = !1
        } = t,
        y = null != (i = o.A.getState().guildId) ? i : g.ME,
        j = o.A.getState().channelId,
        T = (a = y, f = (p = [g.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(a), e > 0 ? p.slice(f).concat(p.slice(0, f), a) : (p.splice(f, 0, a), p.slice(f + 1).concat(p.slice(0, f + 1)))),
        v = e > 0 ? 0 : T.length - 1,
        S = b(y, C),
        I = S.indexOf(j) + e;
    for (; null != y && "" !== y;) {
        if (h = S[I], E(y))
            for (; null != h && "" !== h;) {
                if ("string" == typeof h) {
                    if (A(y, h)) return (0, m.i)(y, h, !1, O(y, h))
                } else if ("object" == typeof h && x(h.resourceId, h.type)) return y !== d.A.getGuildId() && (0, m.i)(y, null == (l = c.Ay.getDefaultChannel(y)) ? void 0 : l.id), (0, s.mMO)(async () => {
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
                        guildId: y
                    }))
                });
                I += e, h = S[I]
            }
        if (v += e, null == (y = T[v]) || "" === y) break;
        S = b(y, C), I = e < 0 ? S.length - 1 : 0
    }
    _._.dispatch(g.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, g.ugG)