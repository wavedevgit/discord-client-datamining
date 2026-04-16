/** chunk id: 380786 params = (module,exports,require) **/
n.d(e, {
    A: () => C,
    D: () => h
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    o = n(554146),
    c = n(397927),
    d = n(736653),
    u = n(573648),
    E = n(619006),
    _ = n(145643),
    T = n(826673),
    A = n(997509),
    I = n(967198),
    N = n(652215),
    R = n(452832),
    p = n(985018),
    O = n(448759);

function C(t) {
    let {
        markAsDismissed: e
    } = t, n = I.A.getGuildId(), l = (0, d.DP)();
    a()(n, "Guild Id must be defined");
    let s = u.A.get(N.fg2.RIOT_GAMES);
    return (0, i.jsxs)(c.$Td, {
        color: c.Hv$.WARNING,
        children: [(0, i.jsx)(c.PMB, {
            onClick: () => (0, T.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
            noticeType: N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN
        }), (0, i.jsx)("img", {
            src: "light" === l ? s.icon.blackSVG : s.icon.whiteSVG,
            alt: p.intl.string(R.default["1S6oAo"]),
            className: r()(O.tV, O._R)
        }), p.intl.format(R.default["/Xhh40"], {
            settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`
        }), (0, i.jsx)(c.Z_L, {
            onClick: () => {
                e(), A.A.open(n, N.BEX.ROLES)
            },
            noticeType: N.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            className: O.HE,
            children: p.intl.string(R.default.spsZYI)
        }), (0, i.jsx)(c.zr9, {
            onClick: () => e(),
            className: O.wX,
            children: p.intl.string(R.default["MVB/Ab"])
        })]
    })
}

function h(t) {
    t.forEach(t => {
        null == _.A.getGuildRoleConnectionsConfiguration(t.id) && (0, E.os)(t.guildId, t.id)
    });
    let e = t.map(t => _.A.getGuildRoleConnectionsConfiguration(t.id));
    return null != e && e.some(t => t?.some(t => t.some(t => t.connectionType === N.fg2.RIOT_GAMES || t.connectionType === N.fg2.LEAGUE_OF_LEGENDS)))
}