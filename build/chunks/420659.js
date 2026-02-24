/** chunk id: 420659, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var s = r(311907),
    i = r(734057),
    n = r(71393),
    l = r(309010),
    a = r(287809),
    o = r(476697);

function c(e) {
    let t = (0, s.bG)([a.default], () => a.default.getCurrentUser()),
        r = (0, s.bG)([l.A, i.A], () => i.A.getChannel(l.A.getVoiceChannelId())),
        c = r?.getGuildId(),
        d = (0, s.bG)([n.A], () => null != c ? n.A.getGuild(c)?.premiumTier : null);
    return (0, o.A)(e, t, d)
}