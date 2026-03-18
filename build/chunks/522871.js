/** chunk id: 522871 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(64700),
    l = n(172218),
    a = n(478437),
    r = n(311907),
    s = n(71393),
    o = n(483649),
    c = n(732071),
    d = n(652215);

function u(e) {
    let {
        message: t,
        channel: n,
        enabled: u = !0
    } = e, _ = (0, r.bG)([s.A], () => {
        let e = s.A.getGuild(n.guild_id);
        return e?.features.has(d.GuildFeatures.COMMUNITY) ?? !1
    }, [n.guild_id]), m = t.messageReference?.guild_id != null && null != t.webhookId && t.hasFlag(d.pr7.IS_CROSSPOST) && null != n.guild_id, A = n.type === a.r.GUILD_ANNOUNCEMENT && _, E = !t.hasFlag(d.pr7.EPHEMERAL) && (m || A), I = m && null != t.messageReference ? t.messageReference.message_id : t.id, T = m && null != t.messageReference ? t.messageReference.channel_id : n.id, N = m && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id, f = i.useCallback(e => {
        e ? c.A.handleMessageBecameVisible({
            type: c.K.ANNOUNCEMENT,
            messageId: I,
            channelId: n.id,
            guildId: n.guild_id,
            sourceChannelId: T,
            sourceGuildId: N
        }) : c.A.handleMessageLostVisibility(I, c.K.ANNOUNCEMENT)
    }, [I, n.id, n.guild_id, T, N]), C = o.A.useExperiment({
        location: "836a4b_1"
    }, {
        disable: !E || !u,
        autoTrackExposure: !0
    }).enabled, g = (0, l.K)(f, 0, C);
    return i.useEffect(() => () => {
        c.A.handleMessageLostVisibility(I, c.K.ANNOUNCEMENT)
    }, [I]), g
}