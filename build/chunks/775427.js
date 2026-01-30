/** chunk id: 775427, original params: e,t,r (module,exports,require) **/
r.d(t, {
    J: () => d
});
var n = r(33851),
    l = r.n(n),
    s = r(311907),
    a = r(253932),
    i = r(734057),
    o = r(71393),
    c = r(967198),
    u = r(652215);

function d(e) {
    let {
        guildId: t,
        channelId: r
    } = e, n = a.Hu.useSetting();
    return (0, s.bG)([o.A, i.A, c.A], () => {
        let e = o.A.getGuild(t),
            l = i.A.getChannel(r);
        return c.A.getGuildId() === u.YYv ? {
            type: u.I4_.FAVORITES
        } : null != t && null != e ? {
            type: u.I4_.GUILD,
            guildId: t
        } : null != r && null != l && l.isPrivate() ? n ? {
            type: u.I4_.DMS
        } : {
            type: u.I4_.CHANNEL,
            channelId: r
        } : null
    }, [r, t, n], l())
}