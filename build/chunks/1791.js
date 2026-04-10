/** chunk id: 1791 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(73153),
    l = n(976860),
    r = n(837921),
    a = n(546983),
    s = n(613057),
    o = n(652215);
let d = {
    [o.e$_.OPEN_MESSAGE]: {
        scope: s.hj,
        handler(e) {
            let {
                args: {
                    guild_id: t,
                    channel_id: n,
                    message_id: s,
                    pid: d
                }
            } = e;
            (0, a.d5)(d).context === o.BRT.OVERLAY ? i.h.dispatch({
                type: "OVERLAY_OPEN_MESSAGE",
                guildId: t,
                channelId: n,
                messageId: s
            }) : ((0, l.bG)({
                pathname: o.BVt.CHANNEL(t, n, s)
            }), r.Ay.focus())
        }
    }
}