/** Chunk was on 96811 **/
/** chunk id: 420659, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(311907),
    i = r(734057),
    l = r(71393),
    s = r(309010),
    a = r(287809),
    o = r(476697);

function c(e) {
    let t = (0, n.bG)([a.default], () => a.default.getCurrentUser()),
        r = (0, n.bG)([s.A, i.A], () => i.A.getChannel(s.A.getVoiceChannelId())),
        c = null == r ? void 0 : r.getGuildId(),
        d = (0, n.bG)([l.A], () => {
            var e;
            return null != c ? null == (e = l.A.getGuild(c)) ? void 0 : e.premiumTier : null
        });
    return (0, o.A)(e, t, d)
}