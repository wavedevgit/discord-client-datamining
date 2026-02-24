/** chunk id: 757942, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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
    g = n(265422),
    E = n(652215),
    I = n(790782);

function h(e, t) {
    return [{
        resourceId: e,
        type: I.P.GUILD_EVENT
    }, ...e === E.ME ? u.default.getPrivateChannelIds() : (0, l.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let p = a().throttle(function(e, t) {
    var r;
    let a, l, u, {
            channelPredicate: I = () => !0,
            guildPredicate: p = () => !0,
            guildFeaturePredicate: C = () => !1,
            ensureChatIsVisible: m = () => !1,
            withVoiceChannels: b = !1
        } = t,
        S = o.A.getState().guildId ?? E.ME,
        f = o.A.getState().channelId,
        T = (r = S, l = (a = [E.ME, ...c.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? a.slice(l).concat(a.slice(0, l), r) : (a.splice(l, 0, r), a.slice(l + 1).concat(a.slice(0, l + 1)))),
        L = e > 0 ? 0 : T.length - 1,
        N = h(S, b),
        O = N.indexOf(f) + e;
    for (; null != S && "" !== S;) {
        if (u = N[O], p(S))
            for (; null != u && "" !== u;) {
                if ("string" == typeof u) {
                    if (I(S, u)) return (0, g.i)(S, u, !1, m(S, u))
                } else if ("object" == typeof u && C(u.resourceId, u.type)) return S !== _.A.getGuildId() && (0, g.i)(S, d.Ay.getDefaultChannel(S)?.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("96688")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: S
                    })
                });
                O += e, u = N[O]
            }
        if (L += e, null == (S = T[L]) || "" === S) break;
        N = h(S, b), O = e < 0 ? N.length - 1 : 0
    }
    A._.dispatch(E.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, E.ugG)