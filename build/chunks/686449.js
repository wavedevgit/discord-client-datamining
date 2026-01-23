/** Chunk was on 59735 **/
/** chunk id: 686449, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => o
});
var n = r(73153),
    i = r(931260),
    l = r(543465);
let o = {
    update(e) {
        n.h.dispatch({
            type: "CHANNEL_COLLAPSE",
            channelId: e
        })
    },
    toggleCollapseGuild(e) {
        i.A.saveUserGuildSettings(e, {
            hide_muted_channels: !l.Ay.isGuildCollapsed(e)
        }), n.h.dispatch({
            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
            guildId: e
        })
    }
}