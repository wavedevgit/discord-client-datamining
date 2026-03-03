/** chunk id: 522871, original params: e,t,n (module,exports,require) **/
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
    } = e, m = (0, r.bG)([s.A], () => {
        let e = s.A.getGuild(n.guild_id);
        return e?.features.has(d.GuildFeatures.COMMUNITY) ?? !1
    }, [n.guild_id]), _ = t.messageReference?.guild_id != null && null != t.webhookId && t.hasFlag(d.pr7.IS_CROSSPOST) && null != n.guild_id, A = n.type === a.r.GUILD_ANNOUNCEMENT && m, f = !t.hasFlag(d.pr7.EPHEMERAL) && (_ || A), h = _ && null != t.messageReference ? t.messageReference.message_id : t.id, g = _ && null != t.messageReference ? t.messageReference.channel_id : n.id, E = _ && t.messageReference?.guild_id != null ? t.messageReference.guild_id : n.guild_id, p = i.useCallback(e => {
        e ? c.A.handleMessageBecameVisible({
            type: c.K.ANNOUNCEMENT,
            messageId: h,
            channelId: n.id,
            guildId: n.guild_id,
            sourceChannelId: g,
            sourceGuildId: E
        }) : c.A.handleMessageLostVisibility(h, c.K.ANNOUNCEMENT)
    }, [h, n.id, n.guild_id, g, E]), x = o.A.useExperiment({
        location: "836a4b_1"
    }, {
        disable: !f || !u,
        autoTrackExposure: !0
    }).enabled, C = (0, l.K)(p, 0, x);
    return i.useEffect(() => () => {
        c.A.handleMessageLostVisibility(h, c.K.ANNOUNCEMENT)
    }, [h]), C
}