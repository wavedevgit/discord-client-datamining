/** chunk id: 168917 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(757036),
    r = n(128450),
    o = n(180020),
    d = n(576705),
    c = n(684732),
    u = n(652215),
    _ = n(788868),
    g = n(985018),
    A = n(367915);

function m(e) {
    let {
        errors: t,
        pendingNick: n,
        currentNick: m,
        username: h,
        user: p,
        guild: x
    } = e, E = n ?? m, T = (0, s.bG)([d.A], () => d.A.can(u.xBc.CHANGE_NICKNAME, x) || d.A.can(u.xBc.MANAGE_NICKNAMES, x)), S = (0, a.L)(_.PremiumTypes.TIER_2);
    return (0, i.jsxs)(r.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [(0, i.jsx)(l.ksK, {
            value: E ?? "",
            placeholder: h,
            maxLength: u.d0r,
            onChange: function(e) {
                (0, c.o_)(e, m)
            },
            disabled: !T,
            helperText: T ? void 0 : g.intl.string(g.t.gzjxQi)
        }), S && (0, i.jsx)(o.A, {
            user: p,
            guildId: x.id,
            className: A.F
        })]
    })
}