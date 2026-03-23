/** chunk id: 305928 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(64700),
    s = n(311907),
    l = n(354583),
    a = n(616356),
    r = n(383501),
    o = n(977997);

function c(e) {
    let t = (0, s.bG)([r.A], () => r.A.getGuildId()),
        n = e.children.map(e => e.id),
        c = null != t && n.includes(t),
        d = !1,
        u = !1,
        h = !1,
        A = (0, s.bG)([r.A], () => r.A.getChannelId()),
        m = (0, l.A)()?.guild_id,
        p = null != m && n.includes(m),
        _ = (0, s.bG)([o.A], () => null != A && o.A.hasVideo(A), [A]),
        g = (0, s.bG)([a.A], () => a.A.getCurrentUserActiveStream());
    return c && (d = !_, u = _, h = null != g && null != g.guildId && n.includes(g.guildId)), i.useMemo(() => ({
        audio: d,
        video: u,
        screenshare: h,
        liveStage: p,
        isCurrentUserConnected: c
    }), [d, u, h, p, c])
}