/** chunk id: 997248, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => a
});
var n = r(311907),
    i = r(734057),
    l = r(71393),
    s = r(309010);

function a() {
    let e = (0, n.bG)([s.A, i.A], () => i.A.getChannel(s.A.getVoiceChannelId())),
        t = null == e ? void 0 : e.getGuildId();
    return (0, n.bG)([l.A], () => {
        var e;
        return null != t ? null == (e = l.A.getGuild(t)) ? void 0 : e.premiumTier : null
    })
}