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
    c = n(967198),
    _ = n(711014),
    u = n(645959),
    A = n(203982),
    E = n(265422),
    I = n(652215),
    g = n(790782);

function h(e, t) {
    return [{
        resourceId: e,
        type: g.P.GUILD_EVENT
    }, ...e === I.ME ? u.default.getPrivateChannelIds() : (0, s.A)(e, {
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
            withVoiceChannels: m = !1
        } = t,
        S = o.A.getState().guildId ?? I.ME,
        b = o.A.getState().channelId,
        T = (r = S, s = (a = [I.ME, ..._.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? a.slice(s).concat(a.slice(0, s), r) : (a.splice(s, 0, r), a.slice(s + 1).concat(a.slice(0, s + 1)))),
        N = e > 0 ? 0 : T.length - 1,
        L = h(S, m),
        O = L.indexOf(b) + e;
    for (; null != S && "" !== S;) {
        if (u = L[O], C(S))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (g(S, u)) return (0, E.i)(S, u, !1, f(S, u))
                } else if ("object" == typeof u && p(u.resourceId, u.type)) return S !== c.A.getGuildId() && (0, E.i)(S, d.Ay.getDefaultChannel(S)?.id), (0, l.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("85408")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: S
                    })
                });
                O += e, u = L[O]
            }
        if (N += e, null == (S = T[N]) || "" === S) break;
        L = h(S, m), O = e < 0 ? L.length - 1 : 0
    }
    A._.dispatch(I.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, I.ugG)