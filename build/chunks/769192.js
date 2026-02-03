/** chunk id: 769192, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => S
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(442433),
    o = n(847767),
    c = n(358367),
    u = n(793574),
    s = n(886393),
    d = n(475777),
    A = n(848977),
    f = n(995102),
    b = n(288104),
    y = n(661504),
    E = n(304694),
    p = n(671483),
    g = n(217563),
    v = n(50268),
    O = n(769591),
    h = n(446600),
    j = n(914853),
    D = n(708653),
    I = n(297460),
    N = n(652215),
    C = n(985018);
let S = (0, c.A)((0, o.A)(function(e) {
    let {
        channel: t,
        guild: n,
        onSelect: o,
        widgetType: c
    } = e, u = t.isGuildStageVoice(), N = (0, i.bG)([h.A], () => u ? h.A.getStageInstanceByChannel(t.id) : void 0, [u, t.id]), S = (0, A.A)(t), _ = (0, s.A)(t), {
        toggleFavoriteItem: m
    } = (0, D.Ay)(j.x.VOICE, t, c), x = (0, f.Ay)(t), M = (0, b.A)(t), P = (0, d.A)(t, n, N), w = (0, I.A)({
        kind: "CHANNEL",
        channel: t,
        guildId: n.id
    }, c), U = (0, v.A)({
        id: t.id,
        label: C.intl.string(C.t.gFHI3k)
    }), k = (0, E.A)(t), G = (0, p.A)(t, n), L = (0, g.A)(t, n.id), T = (0, O.os)("OverlayChannelListVoiceChannelContextMenu"), R = (0, y.Ay)(t);
    return (0, r.jsxs)(l.W1t, {
        navId: "overlay-channel-context",
        onClose: a.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: o,
        children: [(0, r.jsxs)(l.rXV, {
            children: [w, m, P, _]
        }, "primary-actions"), (0, r.jsxs)(l.rXV, {
            children: [L, S, G, k]
        }, "voice-actions"), (0, r.jsxs)(l.rXV, {
            children: [x, T ? R : M]
        }, "notifications"), (0, r.jsx)(l.rXV, {
            children: U
        }, "developer-actions")]
    })
}, {
    object: N.ZSU.CONTEXT_MENU
}), [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.CHANNEL_LIST_VOICE_CHANNEL_MENU])