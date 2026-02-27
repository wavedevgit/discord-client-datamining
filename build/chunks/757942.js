/** chunk id: 757942, original params: e,t,n (module,exports,require) **/
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
    g = n(265422),
    I = n(652215),
    E = n(790782);

function h(e, t) {
    return [{
        resourceId: e,
        type: E.P.GUILD_EVENT
    }, ...e === I.ME ? u.default.getPrivateChannelIds() : (0, s.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let C = a().throttle(function(e, t) {
    var r;
    let a, s, u, {
            channelPredicate: E = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: S = () => !1,
            withVoiceChannels: f = !1
        } = t,
        m = o.A.getState().guildId ?? I.ME,
        T = o.A.getState().channelId,
        b = (r = m, s = (a = [I.ME, ...c.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? a.slice(s).concat(a.slice(0, s), r) : (a.splice(s, 0, r), a.slice(s + 1).concat(a.slice(0, s + 1)))),
        L = e > 0 ? 0 : b.length - 1,
        N = h(m, f),
        O = N.indexOf(T) + e;
    for (; null != m && "" !== m;) {
        if (u = N[O], C(m))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (E(m, u)) return (0, g.i)(m, u, !1, S(m, u))
                } else if ("object" == typeof u && p(u.resourceId, u.type)) return m !== _.A.getGuildId() && (0, g.i)(m, d.Ay.getDefaultChannel(m)?.id), (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: m
                    })
                });
                O += e, u = N[O]
            }
        if (L += e, null == (m = b[L]) || "" === m) break;
        N = h(m, f), O = e < 0 ? N.length - 1 : 0
    }
    A._.dispatch(I.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, I.ugG)