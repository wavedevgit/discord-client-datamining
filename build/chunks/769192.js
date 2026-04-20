/** chunk id: 769192 params = (module,exports,require) **/
t.d(n, {
    default: () => M
});
var i = t(627968);
t(64700);
var r = t(311907),
    l = t(397927),
    a = t(442433),
    s = t(847767),
    o = t(358367),
    u = t(793574),
    d = t(886393),
    c = t(475777),
    A = t(848977),
    E = t(995102),
    v = t(288104),
    g = t(661504),
    f = t(304694),
    I = t(671483),
    N = t(217563),
    y = t(50268),
    h = t(769591),
    p = t(446600),
    C = t(914853),
    D = t(708653),
    _ = t(297460),
    b = t(652215),
    x = t(985018);
let M = (0, o.A)((0, s.A)(function(e) {
    let {
        channel: n,
        guild: t,
        onSelect: s,
        widgetType: o
    } = e, u = n.isGuildStageVoice(), b = (0, r.bG)([p.A], () => u ? p.A.getStageInstanceByChannel(n.id) : void 0, [u, n.id]), M = (0, A.A)(n), S = (0, d.A)(n), {
        toggleFavoriteItem: j
    } = (0, D.Ay)(C.x.VOICE, n, o), O = (0, E.A)(n), U = (0, v.A)(n), L = (0, c.A)(n, t, b), T = (0, _.A)({
        kind: "CHANNEL",
        channel: n,
        guildId: t.id
    }, o), G = (0, y.A)({
        id: n.id,
        label: x.intl.string(x.t.gFHI3k)
    }), R = (0, f.A)(n), m = (0, I.A)(n, t), k = (0, N.A)(n, t.id), F = (0, h.os)("OverlayChannelListVoiceChannelContextMenu"), H = (0, g.Ay)(n);
    return (0, i.jsxs)(l.W1t, {
        navId: "overlay-channel-context",
        onClose: a.Z_,
        "aria-label": x.intl.string(x.t.Xm41aV),
        onSelect: s,
        children: [(0, i.jsxs)(l.rXV, {
            children: [T, j, L, S]
        }, "primary-actions"), (0, i.jsxs)(l.rXV, {
            children: [k, M, m, R]
        }, "voice-actions"), (0, i.jsxs)(l.rXV, {
            children: [O, F ? H : U]
        }, "notifications"), (0, i.jsx)(l.rXV, {
            children: G
        }, "developer-actions")]
    })
}, {
    object: b.ZSU.CONTEXT_MENU
}), [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.CHANNEL_LIST_VOICE_CHANNEL_MENU])