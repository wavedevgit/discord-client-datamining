/** chunk id: 305928, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var r = n(64700),
    l = n(311907),
    i = n(354583),
    s = n(616356),
    a = n(383501),
    o = n(977997);

function c(e) {
    var t;
    let n = (0, l.bG)([a.A], () => a.A.getGuildId()),
        c = e.children.map(e => e.id),
        u = null != n && c.includes(n),
        d = !1,
        p = !1,
        h = !1,
        g = (0, l.bG)([a.A], () => a.A.getChannelId()),
        f = null == (t = (0, i.A)()) ? void 0 : t.guild_id,
        m = null != f && c.includes(f),
        b = (0, l.bG)([o.A], () => null != g && o.A.hasVideo(g), [g]),
        A = (0, l.bG)([s.A], () => s.A.getCurrentUserActiveStream());
    return u && (d = !b, p = b, h = null != A && null != A.guildId && c.includes(A.guildId)), r.useMemo(() => ({
        audio: d,
        video: p,
        screenshare: h,
        liveStage: m,
        isCurrentUserConnected: u
    }), [d, p, h, m, u])
}