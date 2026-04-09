/** chunk id: 344015 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(956793),
    d = n(47167),
    s = n(713654),
    o = n(734057),
    u = n(71393),
    c = n(576705),
    A = n(994500),
    g = n(309010),
    f = n(287809),
    E = n(977997),
    b = n(652215),
    h = n(822889),
    v = n(985018);
let I = {
    channelId: null,
    channelName: null,
    channel: null,
    guild: null,
    canJoin: !1,
    isAlreadyConnected: !1
};

function x(e) {
    let {
        channelId: t,
        channelName: n,
        channel: x,
        guild: p,
        canJoin: m,
        isAlreadyConnected: D
    } = (0, i.cf)([E.A, o.A, g.A, f.default, A.A, u.A, c.A], () => {
        let t = E.A.getDiscoverableVoiceStateForUser(e);
        if (null == t) return I;
        let n = o.A.getChannel(t.channelId);
        if (null == n || !n.isVocal()) return I;
        let l = n.getGuildId?.() ?? null,
            i = null != l ? u.A.getGuild(l) : null,
            r = g.A.getVoiceChannelId() === n.id,
            a = n.isPrivate() || c.A.can(b.xBc.CONNECT, n);
        return {
            channelId: n.id,
            channelName: (0, d.m1)(n, f.default, A.A),
            channel: n,
            guild: i,
            canJoin: a,
            isAlreadyConnected: r
        }
    }, [e]);
    if (null == t || !m || D) return null;
    let N = (0, s.gU)(x, p ?? void 0);
    return (0, l.jsx)(r.Drp, {
        id: "join-user-voice-channel",
        void_label: v.intl.format(h.default["4l56iz"], {
            channelName: n ?? t,
            channelIcon: () => null != N ? (0, l.jsx)(N, {
                size: "xxs",
                color: "currentColor"
            }) : null
        }),
        action: () => {
            a.default.selectVoiceChannel(t)
        }
    })
}