/** chunk id: 757942 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(735438),
    a = n.n(r),
    l = n(397927),
    s = n(310953),
    o = n(366811),
    d = n(808728),
    _ = n(967198),
    c = n(711014),
    u = n(645959),
    A = n(203982),
    I = n(265422),
    E = n(652215),
    g = n(790782);

function h(e, t) {
    return [{
        resourceId: e,
        type: g.P.GUILD_EVENT
    }, ...e === E.ME ? u.default.getPrivateChannelIds() : (0, s.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let C = a().throttle(function(e, t) {
    var r;
    let a, s, u, {
            channelPredicate: g = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: f = () => !1,
            withVoiceChannels: S = !1
        } = t,
        m = o.A.getState().guildId ?? E.ME,
        T = o.A.getState().channelId,
        b = (r = m, s = (a = [E.ME, ...c.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? a.slice(s).concat(a.slice(0, s), r) : (a.splice(s, 0, r), a.slice(s + 1).concat(a.slice(0, s + 1)))),
        N = e > 0 ? 0 : b.length - 1,
        L = h(m, S),
        O = L.indexOf(T) + e;
    for (; null != m && "" !== m;) {
        if (u = L[O], C(m))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (g(m, u)) return (0, I.i)(m, u, !1, f(m, u))
                } else if ("object" == typeof u && p(u.resourceId, u.type)) return m !== _.A.getGuildId() && (0, I.i)(m, d.Ay.getDefaultChannel(m)?.id), (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("96688")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: m
                    })
                });
                O += e, u = L[O]
            }
        if (N += e, null == (m = b[N]) || "" === m) break;
        L = h(m, S), O = e < 0 ? L.length - 1 : 0
    }
    A._.dispatch(E.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, E.ugG)