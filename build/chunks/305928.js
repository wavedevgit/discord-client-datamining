/** chunk id: 305928 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
});
var i = n(64700),
    s = n(311907),
    l = n(354583),
    r = n(616356),
    a = n(383501),
    o = n(977997);

function c(e) {
    let t = (0, s.bG)([a.A], () => a.A.getGuildId()),
        n = e.children.map(e => e.id),
        c = null != t && n.includes(t),
        d = !1,
        u = !1,
        h = !1,
        A = (0, s.bG)([a.A], () => a.A.getChannelId()),
        m = (0, l.A)()?.guild_id,
        _ = null != m && n.includes(m),
        p = (0, s.bG)([o.A], () => null != A && o.A.hasVideo(A), [A]),
        g = (0, s.bG)([r.A], () => r.A.getCurrentUserActiveStream());
    return c && (d = !p, u = p, h = null != g && null != g.guildId && n.includes(g.guildId)), i.useMemo(() => ({
        audio: d,
        video: u,
        screenshare: h,
        liveStage: _,
        isCurrentUserConnected: c
    }), [d, u, h, _, c])
}