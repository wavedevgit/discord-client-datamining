/** Chunk was on 1113 **/
/** chunk id: 533233, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var r = n(311907),
    l = n(313961),
    i = n(71393),
    s = n(576705),
    a = n(113783),
    o = n(69407),
    c = n(233993),
    u = n(96566),
    d = n(652215);

function h(e) {
    var t;
    let n = (0, r.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        h = (0, a.uy)(e.id),
        p = (0, a.zy)(e.id, o.ip.AUDIENCE),
        g = (0, u.qT)(e.id),
        f = (0, r.bG)([i.A], () => i.A.getGuild(e.guild_id), [e.guild_id]),
        m = (0, r.bG)([s.A], () => s.A.can(c.QY, e), [e]),
        b = null != (t = null == f ? void 0 : f.maxStageVideoChannelUsers) ? t : 0,
        A = !(null != f && f.features.has(d.GuildFeatures.COMMUNITY)) && b > d.uaN;
    return g && !n && m && !A && h + p >= b
}