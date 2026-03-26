/** chunk id: 485394 params = (module,exports,require) **/
t.d(n, {
    Ay: () => m,
    K7: () => b
});
var a = t(311907),
    i = t(855687),
    r = t(446600),
    c = t(734057),
    l = t(808728),
    o = t(71393),
    _ = t(576705),
    s = t(488926),
    d = t(698441),
    u = t(988794),
    x = t(652215);

function b(e) {
    let [n, t, a, b] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Ay, c.A, o.A, r.A];
    if ((0, d.AZ)(e)) return !1;
    let {
        guild_id: m,
        channel_id: p
    } = e, h = e.entity_type === u.Ps.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(p), g = a.getGuild(m), v = b.getStageInstanceByChannel(p);
    return !!(0, i.K)(_.A, g, h, v) && null != h && function(e) {
        let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.A], {
            entityType: t,
            channelId: a
        } = "entity_type" in e ? {
            entityType: e.entity_type,
            channelId: e.channel_id
        } : e;
        if (t === u.Ps.EXTERNAL) return !0;
        let i = n.getChannel(a);
        return null != i && s.MJ(x.xBc.VIEW_CHANNEL, i)
    }(e, [t])
}

function m(e) {
    return (0, a.bG)([l.Ay, c.A, o.A, r.A], () => b(e, [l.Ay, c.A, o.A, r.A]), [e])
}