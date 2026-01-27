/** Chunk was on 41727 **/
/** chunk id: 533233, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
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

function p(e) {
    var t;
    let n = (0, r.bG)([l.A], () => l.A.getStageVideoLimitBoostUpsellDismissed(e.id), [e.id]),
        p = (0, a.uy)(e.id),
        h = (0, a.zy)(e.id, o.ip.AUDIENCE),
        f = (0, u.qT)(e.id),
        g = (0, r.bG)([i.A], () => i.A.getGuild(e.guild_id), [e.guild_id]),
        m = (0, r.bG)([s.A], () => s.A.can(c.QY, e), [e]),
        b = null != (t = null == g ? void 0 : g.maxStageVideoChannelUsers) ? t : 0,
        A = !(null != g && g.features.has(d.GuildFeatures.COMMUNITY)) && b > d.uaN;
    return f && !n && m && !A && p + h >= b
}