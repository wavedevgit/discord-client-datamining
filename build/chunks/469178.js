/** chunk id: 469178 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(64700),
    l = n(311907),
    s = n(725613),
    a = n(820512),
    r = n(591346),
    o = n(769022);

function d(e) {
    let {
        channel: t
    } = e, {
        enableHistoryHover: n
    } = (0, r.G8)({
        guildId: t.guild_id,
        location: "VoiceChannelHistoryTracking"
    }), d = (0, l.bG)([o.A], () => o.A.getHistoryExists(t.id)), c = (0, l.bG)([s.A], () => s.A.getStartTime(t));
    return i.useEffect(() => {
        !n || null == c || d || ((0, a.H)(t.id), (0, a.q)(t.id))
    }, [t.id, n, d, c]), null
}