/** chunk id: 757942 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var l = n(735438),
    r = n.n(l),
    s = n(397927),
    o = n(310953),
    a = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    A = n(645959),
    E = n(203982),
    _ = n(265422),
    I = n(652215),
    g = n(790782);

function C(e, t) {
    return [{
        resourceId: e,
        type: g.P.GUILD_EVENT
    }, ...e === I.ME ? A.default.getPrivateChannelIds() : (0, o.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let h = r().throttle(function(e, t) {
    var l;
    let r, o, A, {
            channelPredicate: g = () => !0,
            guildPredicate: h = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: T = () => !1,
            withVoiceChannels: S = !1
        } = t,
        N = a.A.getState().guildId ?? I.ME,
        b = a.A.getState().channelId,
        L = (l = N, o = (r = [I.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(l), e > 0 ? r.slice(o).concat(r.slice(0, o), l) : (r.splice(o, 0, l), r.slice(o + 1).concat(r.slice(0, o + 1)))),
        O = e > 0 ? 0 : L.length - 1,
        m = C(N, S),
        f = m.indexOf(b) + e;
    for (; null != N && "" !== N;) {
        if (A = m[f], h(N))
            for (; null != A && "" !== A;) {
                if ("string" == typeof A) {
                    if (g(N, A)) return (0, _.i)(N, A, !1, T(N, A))
                } else if ("object" == typeof A && p(A.resourceId, A.type)) return N !== c.A.getGuildId() && (0, _.i)(N, d.Ay.getDefaultChannel(N)?.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("85408")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: N
                    })
                });
                f += e, A = m[f]
            }
        if (O += e, null == (N = L[O]) || "" === N) break;
        m = C(N, S), f = e < 0 ? m.length - 1 : 0
    }
    E._.dispatch(I.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, I.ugG)