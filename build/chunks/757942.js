/** chunk id: 757942 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(735438),
    a = n.n(r),
    s = n(397927),
    l = n(310953),
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
    }, ...e === E.ME ? u.default.getPrivateChannelIds() : (0, l.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let C = a().throttle(function(e, t) {
    var r;
    let a, l, u, {
            channelPredicate: g = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: S = () => !1,
            withVoiceChannels: f = !1
        } = t,
        T = o.A.getState().guildId ?? E.ME,
        m = o.A.getState().channelId,
        b = (r = T, l = (a = [E.ME, ...c.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? a.slice(l).concat(a.slice(0, l), r) : (a.splice(l, 0, r), a.slice(l + 1).concat(a.slice(0, l + 1)))),
        N = e > 0 ? 0 : b.length - 1,
        L = h(T, f),
        O = L.indexOf(m) + e;
    for (; null != T && "" !== T;) {
        if (u = L[O], C(T))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (g(T, u)) return (0, I.i)(T, u, !1, S(T, u))
                } else if ("object" == typeof u && p(u.resourceId, u.type)) return T !== _.A.getGuildId() && (0, I.i)(T, d.Ay.getDefaultChannel(T)?.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: T
                    })
                });
                O += e, u = L[O]
            }
        if (N += e, null == (T = b[N]) || "" === T) break;
        L = h(T, f), O = e < 0 ? L.length - 1 : 0
    }
    A._.dispatch(E.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, E.ugG)