/** chunk id: 971203 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(956793),
    o = n(58149),
    d = n(378570),
    c = n(345942),
    u = n(576705),
    A = n(231608),
    h = n(954571),
    _ = n(652215),
    m = n(985018);

function g(e) {
    let t = l.useContext(h.AnalyticsContext),
        n = e.voiceChannels[0],
        g = (0, a.bG)([u.A], () => null != n && u.A.can(_.xBc.CONNECT, n.channel));
    return null == n ? null : [(0, i.jsx)(r.Drp, {
        id: "join-voice",
        action: function() {
            (0, d.iN)(n.channel.id), s.default.selectVoiceChannel(n.channel.id), o.Ay.trackWithMetadata(_.HAw.ACTIVITY_FEED_VOICE_CHANNEL_VISITED, {
                source: {
                    ...t.location,
                    object: _.ZSU.LIST_ITEM
                },
                guild_id: n.guild.id,
                channel_id: n.channel.id,
                ...(0, A.o)(e)
            })
        },
        label: m.intl.string(m.t["8yOlh9"]),
        disabled: !g
    }, "join-voice"), (0, i.jsx)(r.Drp, {
        id: "goto-server",
        action: function() {
            (0, c.u)(n.guild.id), o.Ay.trackWithMetadata(_.HAw.ACTIVITY_FEED_GUILD_VISITED, {
                source: {
                    ...t.location,
                    object: _.ZSU.LIST_ITEM
                },
                guild_id: n.guild.id,
                af_recently_played: !1,
                ...(0, A.o)(e)
            })
        },
        label: m.intl.string(m.t.RGgqm1)
    }, "goto-server")]
}