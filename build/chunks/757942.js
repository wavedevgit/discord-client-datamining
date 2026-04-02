/** chunk id: 757942 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(735438),
    s = n.n(r),
    a = n(397927),
    l = n(310953),
    o = n(366811),
    d = n(808728),
    c = n(967198),
    _ = n(711014),
    u = n(645959),
    A = n(203982),
    E = n(265422),
    g = n(652215),
    I = n(790782);

function h(e, t) {
    return [{
        resourceId: e,
        type: I.P.GUILD_EVENT
    }, ...e === g.ME ? u.default.getPrivateChannelIds() : (0, l.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let C = s().throttle(function(e, t) {
    var r;
    let s, l, u, {
            channelPredicate: I = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: m = () => !1,
            withVoiceChannels: S = !1
        } = t,
        T = o.A.getState().guildId ?? g.ME,
        b = o.A.getState().channelId,
        f = (r = T, l = (s = [g.ME, ..._.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? s.slice(l).concat(s.slice(0, l), r) : (s.splice(l, 0, r), s.slice(l + 1).concat(s.slice(0, l + 1)))),
        N = e > 0 ? 0 : f.length - 1,
        L = h(T, S),
        O = L.indexOf(b) + e;
    for (; null != T && "" !== T;) {
        if (u = L[O], C(T))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (I(T, u)) return (0, E.i)(T, u, !1, m(T, u))
                } else if ("object" == typeof u && p(u.resourceId, u.type)) return T !== c.A.getGuildId() && (0, E.i)(T, d.Ay.getDefaultChannel(T)?.id), (0, a.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("85408")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: T
                    })
                });
                O += e, u = L[O]
            }
        if (N += e, null == (T = f[N]) || "" === T) break;
        L = h(T, S), O = e < 0 ? L.length - 1 : 0
    }
    A._.dispatch(g.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, g.ugG)