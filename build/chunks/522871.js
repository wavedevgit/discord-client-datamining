/** chunk id: 522871 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(64700),
    l = n(172218),
    a = n(478437),
    r = n(311907),
    s = n(71393),
    o = n(732071),
    c = n(652215);

function d(e) {
    let {
        message: t,
        channel: n,
        enabled: d = !0
    } = e, u = (0, r.bG)([s.A], () => {
        let e = s.A.getGuild(n.guild_id);
        return e?.features.has(c.GuildFeatures.COMMUNITY) ?? !1
    }, [n.guild_id]), _ = t.messageReference?.guild_id != null && null != t.webhookId && t.hasFlag(c.pr7.IS_CROSSPOST) && null != n.guild_id, A = n.type === a.r.GUILD_ANNOUNCEMENT && u, m = !t.hasFlag(c.pr7.EPHEMERAL) && (_ || A), E = _ && null != t.messageReference ? t.messageReference.message_id : t.id, T = _ && null != t.messageReference ? t.messageReference.channel_id : n.id, I = _ && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id, g = i.useCallback(e => {
        e ? o.A.handleMessageBecameVisible({
            type: o.K.ANNOUNCEMENT,
            messageId: E,
            channelId: n.id,
            guildId: n.guild_id,
            sourceChannelId: T,
            sourceGuildId: I
        }) : o.A.handleMessageLostVisibility(E, o.K.ANNOUNCEMENT)
    }, [E, n.id, n.guild_id, T, I]), N = (0, l.K)(g, 0, m && d);
    return i.useEffect(() => () => {
        o.A.handleMessageLostVisibility(E, o.K.ANNOUNCEMENT)
    }, [E]), N
}