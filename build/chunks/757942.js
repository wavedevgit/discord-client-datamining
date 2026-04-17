/** chunk id: 757942 params = (module,exports,require) **/
n.d(t, {
    A: () => C
});
var i = n(627968);
n(64700);
var r = n(735438),
    l = n.n(r),
    s = n(397927),
    o = n(310953),
    a = n(366811),
    d = n(808728),
    c = n(967198),
    u = n(711014),
    _ = n(645959),
    A = n(203982),
    E = n(265422),
    I = n(652215),
    g = n(790782);

function h(e, t) {
    return [{
        resourceId: e,
        type: g.P.GUILD_EVENT
    }, ...e === I.ME ? _.default.getPrivateChannelIds() : (0, o.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let C = l().throttle(function(e, t) {
    var r;
    let l, o, _, {
            channelPredicate: g = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: S = () => !1,
            withVoiceChannels: T = !1
        } = t,
        b = a.A.getState().guildId ?? I.ME,
        N = a.A.getState().channelId,
        m = (r = b, o = (l = [I.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? l.slice(o).concat(l.slice(0, o), r) : (l.splice(o, 0, r), l.slice(o + 1).concat(l.slice(0, o + 1)))),
        L = e > 0 ? 0 : m.length - 1,
        f = h(b, T),
        O = f.indexOf(N) + e;
    for (; null != b && "" !== b;) {
        if (_ = f[O], C(b))
            for (; null != _ && "" !== _;) {
                if ("string" == typeof _) {
                    if (g(b, _)) return (0, E.i)(b, _, !1, S(b, _))
                } else if ("object" == typeof _ && p(_.resourceId, _.type)) return b !== c.A.getGuildId() && (0, E.i)(b, d.Ay.getDefaultChannel(b)?.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("71532")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: b
                    })
                });
                O += e, _ = f[O]
            }
        if (L += e, null == (b = m[L]) || "" === b) break;
        f = h(b, T), O = e < 0 ? f.length - 1 : 0
    }
    A._.dispatch(I.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, I.ugG)