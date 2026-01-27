/** Chunk was on 59735 **/
/** chunk id: 686449, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(73153),
    i = r(931260),
    o = r(543465);
let c = {
    update(e) {
        n.h.dispatch({
            type: "CHANNEL_COLLAPSE",
            channelId: e
        })
    },
    toggleCollapseGuild(e) {
        i.A.saveUserGuildSettings(e, {
            hide_muted_channels: !o.Ay.isGuildCollapsed(e)
        }), n.h.dispatch({
            type: "GUILD_TOGGLE_COLLAPSE_MUTED",
            guildId: e
        })
    }
}