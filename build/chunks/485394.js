/** chunk id: 485394 params = (module,exports,require) **/
t.d(n, {
    Ay: () => m,
    K7: () => p
});
var a = t(311907),
    i = t(855687),
    r = t(446600),
    o = t(734057),
    l = t(808728),
    s = t(71393),
    c = t(576705),
    _ = t(488926),
    d = t(698441),
    u = t(988794),
    h = t(652215);

function p(e) {
    let [n, t, a, p] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [l.Ay, o.A, s.A, r.A];
    if ((0, d.AZ)(e)) return !1;
    let {
        guild_id: m,
        channel_id: b
    } = e, x = e.entity_type === u.Ps.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(b), C = a.getGuild(m), g = p.getStageInstanceByChannel(b);
    return !!(0, i.K)(c.A, C, x, g) && null != x && function(e) {
        let [n] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.A], {
            entityType: t,
            channelId: a
        } = "entity_type" in e ? {
            entityType: e.entity_type,
            channelId: e.channel_id
        } : e;
        if (t === u.Ps.EXTERNAL) return !0;
        let i = n.getChannel(a);
        return null != i && _.MJ(h.xBc.VIEW_CHANNEL, i)
    }(e, [t])
}

function m(e) {
    return (0, a.bG)([l.Ay, o.A, s.A, r.A], () => p(e, [l.Ay, o.A, s.A, r.A]), [e])
}