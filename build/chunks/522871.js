/** Chunk was on web.js **/
/** chunk id: 522871, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
});
var r = n(64700),
    i = n(172218),
    a = n(478437),
    s = n(311907),
    o = n(71393),
    l = n(483649),
    c = n(732071),
    u = n(652215);
let d = 0;

function f(e) {
    var t, n;
    let {
        message: f,
        channel: p,
        enabled: _ = !0
    } = e, h = (0, s.bG)([o.A], () => {
        var e;
        let t = o.A.getGuild(p.guild_id);
        return null != (e = null == t ? void 0 : t.features.has(u.GuildFeatures.COMMUNITY)) && e
    }, [p.guild_id]), m = (null == (t = f.messageReference) ? void 0 : t.guild_id) != null && null != f.webhookId && f.hasFlag(u.pr7.IS_CROSSPOST) && null != p.guild_id, g = p.type === a.r.GUILD_ANNOUNCEMENT && h, E = !f.hasFlag(u.pr7.EPHEMERAL) && (m || g), y = m && null != f.messageReference ? f.messageReference.message_id : f.id, b = m && null != f.messageReference ? f.messageReference.channel_id : p.id, O = m && (null == (n = f.messageReference) ? void 0 : n.guild_id) != null ? f.messageReference.guild_id : p.guild_id, v = r.useCallback(e => {
        e ? c.A.handleMessageBecameVisible({
            type: c.K.ANNOUNCEMENT,
            messageId: y,
            channelId: p.id,
            guildId: p.guild_id,
            sourceChannelId: b,
            sourceGuildId: O
        }) : c.A.handleMessageLostVisibility(y, c.K.ANNOUNCEMENT)
    }, [y, p.id, p.guild_id, b, O]), A = l.A.useExperiment({
        location: "836a4b_1"
    }, {
        disable: !E || !_,
        autoTrackExposure: !0
    }).enabled, I = (0, i.K)(v, d, A);
    return r.useEffect(() => () => {
        c.A.handleMessageLostVisibility(y, c.K.ANNOUNCEMENT)
    }, [y]), I
}