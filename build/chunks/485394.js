/** chunk id: 485394 params = (module,exports,require) **/
t.d(n, {
    Ay: () => m,
    K7: () => h
});
var a = t(311907),
    i = t(855687),
    r = t(446600),
    o = t(734057),
    s = t(808728),
    l = t(71393),
    c = t(576705),
    _ = t(488926),
    d = t(698441),
    u = t(988794),
    p = t(652215);

function h(e) {
    let [n, t, a, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.Ay, o.A, l.A, r.A];
    if ((0, d.AZ)(e)) return !1;
    let {
        guild_id: m,
        channel_id: x
    } = e, b = e.entity_type === u.Ps.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(x), g = a.getGuild(m), C = h.getStageInstanceByChannel(x);
    return !!(0, i.K)(c.A, g, b, C) && null != b && function(e) {
        let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A], {
            entityType: t,
            channelId: a
        } = "entity_type" in e ? {
            entityType: e.entity_type,
            channelId: e.channel_id
        } : e;
        if (t === u.Ps.EXTERNAL) return !0;
        let i = n.getChannel(a);
        return null != i && _.MJ(p.xBc.VIEW_CHANNEL, i)
    }(e, [t])
}

function m(e) {
    return (0, a.bG)([s.Ay, o.A, l.A, r.A], () => h(e, [s.Ay, o.A, l.A, r.A]), [e])
}