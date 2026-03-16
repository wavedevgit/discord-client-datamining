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
let C = a().throttle(function(e, t) {
    var r;
    let a, l, u, {
            channelPredicate: I = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: f = () => !1,
            withVoiceChannels: m = !1
        } = t,
        S = o.A.getState().guildId ?? g.ME,
        T = o.A.getState().channelId,
        b = (r = S, l = (a = [g.ME, ..._.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? a.slice(l).concat(a.slice(0, l), r) : (a.splice(l, 0, r), a.slice(l + 1).concat(a.slice(0, l + 1)))),
        N = e > 0 ? 0 : b.length - 1,
        L = h(S, m),
        O = L.indexOf(T) + e;
    for (; null != S && "" !== S;) {
        if (u = L[O], C(S))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (I(S, u)) return (0, E.i)(S, u, !1, f(S, u))
                } else if ("object" == typeof u && p(u.resourceId, u.type)) return S !== c.A.getGuildId() && (0, E.i)(S, d.Ay.getDefaultChannel(S)?.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("27728")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: S
                    })
                });
                O += e, u = L[O]
            }
        if (N += e, null == (S = b[N]) || "" === S) break;
        L = h(S, m), O = e < 0 ? L.length - 1 : 0
    }
    A._.dispatch(g.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, g.ugG)