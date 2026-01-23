/** Chunk was on 96110 **/
/** chunk id: 485394, original params: e,n,t (module,exports,require) **/
t.d(n, {
    Ay: () => x,
    K7: () => h
}), t(896048);
var a = t(311907),
    r = t(855687),
    i = t(446600),
    l = t(734057),
    o = t(808728),
    c = t(71393),
    _ = t(576705),
    s = t(488926),
    d = t(698441),
    u = t(988794),
    b = t(652215);

function h(e) {
    let [n, t, a, h] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Ay, l.A, c.A, i.A];
    if ((0, d.AZ)(e)) return !1;
    let {
        guild_id: x,
        channel_id: m
    } = e, p = e.entity_type === u.Ps.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m), f = a.getGuild(x), v = h.getStageInstanceByChannel(m);
    return !!(0, r.K)(_.A, f, p, v) && null != p && function(e) {
        let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.A], {
            entityType: t,
            channelId: a
        } = "entity_type" in e ? {
            entityType: e.entity_type,
            channelId: e.channel_id
        } : e;
        if (t === u.Ps.EXTERNAL) return !0;
        let r = n.getChannel(a);
        return null != r && s.MJ(b.xBc.VIEW_CHANNEL, r)
    }(e, [t])
}

function x(e) {
    return (0, a.bG)([o.Ay, l.A, c.A, i.A], () => h(e, [o.Ay, l.A, c.A, i.A]), [e])
}