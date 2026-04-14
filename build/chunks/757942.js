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
    h = n(790782);

function g(e, t) {
    return [{
        resourceId: e,
        type: h.P.GUILD_EVENT
    }, ...e === I.ME ? _.default.getPrivateChannelIds() : (0, o.A)(e, {
        withVoiceChannels: t,
        withCurrentVoiceChannel: !0
    }).map(e => e.id)]
}
let C = l().throttle(function(e, t) {
    var r;
    let l, o, _, {
            channelPredicate: h = () => !0,
            guildPredicate: C = () => !0,
            guildFeaturePredicate: p = () => !1,
            ensureChatIsVisible: T = () => !1,
            withVoiceChannels: S = !1
        } = t,
        b = a.A.getState().guildId ?? I.ME,
        f = a.A.getState().channelId,
        N = (r = b, o = (l = [I.ME, ...u.Ay.getFlattenedGuildIds()]).indexOf(r), e > 0 ? l.slice(o).concat(l.slice(0, o), r) : (l.splice(o, 0, r), l.slice(o + 1).concat(l.slice(0, o + 1)))),
        m = e > 0 ? 0 : N.length - 1,
        L = g(b, S),
        O = L.indexOf(f) + e;
    for (; null != b && "" !== b;) {
        if (_ = L[O], C(b))
            for (; null != _ && "" !== _;) {
                if ("string" == typeof _) {
                    if (h(b, _)) return (0, E.i)(b, _, !1, T(b, _))
                } else if ("object" == typeof _ && p(_.resourceId, _.type)) return b !== c.A.getGuildId() && (0, E.i)(b, d.Ay.getDefaultChannel(b)?.id), (0, s.mMO)(async () => {
                    let {
                        default: e
                    } = await Promise.all([n.e("51354"), n.e("7453"), n.e("85408")]).then(n.bind(n, 926956));
                    return t => (0, i.jsx)(e, {
                        ...t,
                        guildId: b
                    })
                });
                O += e, _ = L[O]
            }
        if (m += e, null == (b = N[m]) || "" === b) break;
        L = g(b, S), O = e < 0 ? L.length - 1 : 0
    }
    A._.dispatch(I.jej.SHAKE_APP, {
        duration: 200,
        intensity: 2
    })
}, I.ugG)