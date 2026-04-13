/** chunk id: 380786 params = (module,exports,require) **/
n.d(e, {
    A: () => O,
    D: () => C
});
var i = n(627968);
n(64700);
var l = n(503698),
    r = n.n(l),
    s = n(284009),
    a = n.n(s),
    o = n(554146),
    c = n(397927),
    d = n(573648),
    u = n(619006),
    E = n(145643),
    _ = n(826673),
    T = n(997509),
    A = n(967198),
    I = n(652215),
    N = n(873494),
    R = n(985018),
    p = n(381703);

function O(t) {
    let {
        markAsDismissed: e
    } = t, n = A.A.getGuildId();
    return a()(n, "Guild Id must be defined"), (0, i.jsxs)(c.$Td, {
        color: c.Hv$.WARNING,
        children: [(0, i.jsx)(c.PMB, {
            onClick: () => (0, _.Dr)(o.M.RIOT_CONNECTION_DEPRECATION_ADMIN_DISABLE),
            noticeType: I.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN
        }), (0, i.jsx)("img", {
            src: d.A.get(I.fg2.RIOT_GAMES).icon.whiteSVG,
            alt: R.intl.string(N.default["1S6oAo"]),
            className: r()(p.tV, p._R)
        }), R.intl.format(N.default["/Xhh40"], {
            settingsLink: () => `https://discord.com/guilds/${n}/settings/roles`
        }), (0, i.jsx)(c.Z_L, {
            onClick: () => {
                e(), T.A.open(n, I.BEX.ROLES)
            },
            noticeType: I.kqX.RIOT_CONNECTION_DEPRECATION_ADMIN,
            className: p.HE,
            children: R.intl.string(N.default.spsZYI)
        }), (0, i.jsx)(c.zr9, {
            onClick: () => e(),
            className: p.wX,
            children: R.intl.string(N.default["MVB/Ab"])
        })]
    })
}

function C(t) {
    t.forEach(t => {
        null == E.A.getGuildRoleConnectionsConfiguration(t.id) && (0, u.os)(t.guildId, t.id)
    });
    let e = t.map(t => E.A.getGuildRoleConnectionsConfiguration(t.id));
    return null != e && e.some(t => t?.some(t => t.some(t => t.connectionType === I.fg2.RIOT_GAMES || t.connectionType === I.fg2.LEAGUE_OF_LEGENDS)))
}