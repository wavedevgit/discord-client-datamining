/** chunk id: 775427, original params: e,t,r (module,exports,require) **/
r.d(t, {
    J: () => d
});
var n = r(33851),
    s = r.n(n),
    l = r(311907),
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
    return (0, l.bG)([o.A, i.A, c.A], () => {
        let e = o.A.getGuild(t),
            s = i.A.getChannel(r);
        return c.A.getGuildId() === u.YYv ? {
            type: u.I4_.FAVORITES
        } : null != t && null != e ? {
            type: u.I4_.GUILD,
            guildId: t
        } : null != r && null != s && s.isPrivate() ? n ? {
            type: u.I4_.DMS
        } : {
            type: u.I4_.CHANNEL,
            channelId: r
        } : null
    }, [r, t, n], s())
}