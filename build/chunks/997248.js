/** chunk id: 997248, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => a
});
var s = r(311907),
    i = r(734057),
    n = r(71393),
    l = r(309010);

function a() {
    let e = (0, s.bG)([l.A, i.A], () => i.A.getChannel(l.A.getVoiceChannelId())),
        t = e?.getGuildId();
    return (0, s.bG)([n.A], () => null != t ? n.A.getGuild(t)?.premiumTier : null)
}