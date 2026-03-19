/** chunk id: 566396 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(956793),
    d = n(713654),
    s = n(734057),
    o = n(71393),
    u = n(576705),
    c = n(309010),
    A = n(977997),
    g = n(652215),
    f = n(822889),
    E = n(985018);
let b = {
    channelId: null,
    channelName: null,
    channel: null,
    guild: null,
    canJoin: !1,
    isAlreadyConnected: !1
};

function h(e) {
    let {
        channelId: t,
        channelName: n,
        channel: h,
        guild: v,
        canJoin: I,
        isAlreadyConnected: x
    } = (0, i.cf)([A.A, s.A, o.A, u.A, c.A], () => {
        let t = A.A.getDiscoverableVoiceStateForUser(e);
        if (null == t) return b;
        let n = s.A.getChannel(t.channelId);
        if (null == n || !n.isVocal()) return b;
        let l = n.getGuildId?.() ?? null,
            i = null != l ? o.A.getGuild(l) : null,
            r = c.A.getVoiceChannelId() === n.id,
            a = n.isPrivate() || u.A.can(g.xBc.CONNECT, n);
        return {
            channelId: n.id,
            channelName: n.name,
            channel: n,
            guild: i,
            canJoin: a,
            isAlreadyConnected: r
        }
    }, [e]);
    if (null == t || !I || x) return null;
    let p = (0, d.gU)(h, v ?? void 0);
    return (0, l.jsx)(r.Drp, {
        id: "join-user-voice-channel",
        void_label: E.intl.format(f.default["4l56iz"], {
            channelName: n ?? t,
            channelIcon: () => null != p ? (0, l.jsx)(p, {
                size: "xxs",
                color: "currentColor"
            }) : null
        }),
        action: () => {
            a.default.selectVoiceChannel(t)
        }
    })
}