/** chunk id: 95616, original params: e,n,t (module,exports,require) **/
t.d(n, {
    default: () => O
});
var r = t(627968);
t(64700);
var i = t(397927),
    l = t(442433),
    a = t(847767),
    o = t(358367),
    u = t(793574),
    c = t(886393),
    s = t(848977),
    d = t(995102),
    A = t(288104),
    f = t(661504),
    E = t(50268),
    v = t(769591),
    y = t(914853),
    g = t(708653),
    b = t(297460),
    h = t(652215),
    p = t(985018),
    N = t(641131);
let O = (0, o.A)((0, a.A)(function(e) {
    var n, t;
    let {
        channel: a,
        widgetType: o,
        onSelect: u
    } = e, h = (0, s.A)(a), O = (0, c.A)(a), I = (0, b.A)({
        kind: "CHANNEL",
        channel: a,
        guildId: null != (n = null == (t = a.getGuildId) ? void 0 : t.call(a)) ? n : null
    }, o), {
        toggleFavoriteItem: S
    } = (0, g.$X)(y.x.MESSAGES, a, o), _ = (0, d.Ay)(a), M = (0, E.A)({
        id: a.id,
        label: p.intl.string(p.t.gFHI3k)
    }), C = (0, A.A)(a), j = (0, f.Ay)(a), D = (0, v.os)("ReportToModChannelContextMenu");
    return (0, r.jsxs)(i.W1t, {
        navId: "overlay-report-to-mod-channel-context",
        onClose: l.Z_,
        "aria-label": p.intl.string(N.default["zp+z/E"]),
        onSelect: u,
        children: [(0, r.jsxs)(i.rXV, {
            children: [h, I, S]
        }, "mark-as-read-or-favorite"), (0, r.jsx)(i.rXV, {
            children: O
        }, "channel-actions"), (0, r.jsxs)(i.rXV, {
            children: [_, D ? j : C]
        }, "notifications"), (0, r.jsx)(i.rXV, {
            children: M
        }, "developer-actions")]
    })
}, {
    object: h.ZSU.CONTEXT_MENU
}), [u.A.CONTEXT_MENU, u.A.OVERLAY, u.A.REPORT_TO_MOD_CHANNEL_CONTEXT_MENU])