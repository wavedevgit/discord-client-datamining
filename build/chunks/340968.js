/** chunk id: 340968, original params: n,t,e (module,exports,require) **/
e.d(t, {
    default: () => D
});
var i = e(627968);
e(64700);
var l = e(397927),
    r = e(442433),
    a = e(358367),
    c = e(793574),
    d = e(50268),
    s = e(769591),
    o = e(533957),
    A = e(886393),
    u = e(659566),
    E = e(477190),
    _ = e(307623),
    p = e(317910),
    g = e(475777),
    h = e(995102),
    b = e(288104),
    y = e(661504),
    x = e(969128),
    N = e(652215),
    C = e(985018);
let D = (0, a.A)(function(n) {
    let {
        channel: t,
        guild: e,
        includeTopic: a = !1,
        onSelect: c
    } = n, D = (0, x.A)(t), v = (0, h.Ay)(t), j = (0, b.A)(t), I = (0, A.A)(t), T = (0, u.A)(t), f = (0, p.A)(t), G = (0, g.A)(t, e), L = (0, o.A)(t, e), M = (0, E.A)(t, e, N.rbe.GUILD_TEXT), O = (0, E.A)(t, e, N.rbe.GUILD_VOICE), U = (0, _.A)(t), X = (0, d.A)({
        id: t.id,
        label: C.intl.string(C.t.gFHI3k)
    }), H = (0, s.os)("ChannelTitleContextMenu"), P = (0, y.Ay)(t);
    return (0, i.jsxs)(l.W1t, {
        "data-menu-migrated-auto": !0,
        navId: "channel-context",
        onClose: r.Z_,
        "aria-label": C.intl.string(C.t.Xm41aV),
        onSelect: c,
        children: [(0, i.jsx)(l.rXV, {
            children: D
        }), (0, i.jsx)(l.rXV, {
            children: v
        }), (0, i.jsxs)(l.rXV, {
            children: [a ? T : H ? P : j, f]
        }), (0, i.jsxs)(l.rXV, {
            children: [G, I, L, M, O]
        }), (0, i.jsx)(l.rXV, {
            children: U
        }), (0, i.jsx)(l.rXV, {
            children: X
        })]
    })
}, [c.A.CONTEXT_MENU, c.A.CHANNEL_TITLE_MENU])