/** Chunk was on 77870 **/
/** chunk id: 709544, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(311907),
    l = n(95701),
    i = n(734057),
    s = n(71393),
    a = n(309010),
    o = n(652215);

function c(e, t) {
    return (0, r.bG)([i.A, s.A, a.A], () => {
        let n = s.A.getGuild(t);
        if (!((null == n ? void 0 : n.features.has(o.GuildFeatures.WELCOME_SCREEN_ENABLED)) === !0 && n.features.has(o.GuildFeatures.COMMUNITY)) || n.features.has(o.GuildFeatures.GUILD_SERVER_GUIDE)) return !1;
        let r = i.A.getChannel(e);
        return e === a.A.getChannelId(t) && null != r && r.getGuildId() === n.id && (0, l.ke)(r.type)
    })
}