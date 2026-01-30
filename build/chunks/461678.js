/** Chunk was on 1113 **/
/** chunk id: 461678, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(627968);
n(64700);
var l = n(311907),
    i = n(397927),
    s = n(995102),
    a = n(288104),
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
        navId: g,
        label: f,
        location: m,
        includeGuildMute: b
    } = e, A = (0, a.b)(t), y = (0, o.A0)(t), O = (0, l.bG)([h.A], () => h.A.getGuild(t.guild_id)), _ = (0, c.A)(O), j = (0, u.os)("ChannelNotificationSettingsPopoutMenu") && d.B4.has(t.type);
    return (0, r.jsxs)(i.W1t, {
        "data-menu-migrated": !0,
        navId: g,
        onClose: n,
        "aria-label": f,
        onSelect: p,
        children: [(0, r.jsx)(i.rXV, {
            children: (0, s.Ay)(t, m)
        }), b ? (0, r.jsx)(i.rXV, {
            children: _
        }) : null, j ? y : (0, r.jsx)(i.rXV, {
            children: A
        })]
    })
}