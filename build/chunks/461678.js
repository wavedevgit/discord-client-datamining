/** chunk id: 461678, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    a = n(995102),
    s = n(288104),
    o = n(661504),
    c = n(507238),
    u = n(769591),
    d = n(95701),
    h = n(71393);

function p(e) {
    let {
        channel: t,
        closePopout: n,
        onSelect: p,
        navId: f,
        label: m,
        location: g,
        includeGuildMute: A
    } = e, b = (0, s.b)(t), _ = (0, o.A0)(t), y = (0, r.bG)([h.A], () => h.A.getGuild(t.guild_id)), v = (0, c.A)(y), E = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
    return (0, l.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: f,
        onClose: n,
        "aria-label": m,
        onSelect: p,
        children: [(0, l.jsx)(i.rXV, {
            children: (0, a.Ay)(t, g)
        }), A ? (0, l.jsx)(i.rXV, {
            children: v
        }) : null, E ? _ : (0, l.jsx)(i.rXV, {
            children: b
        })]
    })
}