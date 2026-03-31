/** chunk id: 168917 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(757036),
    r = n(128450),
    o = n(180020),
    d = n(84540),
    c = n(576705),
    u = n(652215),
    m = n(788868),
    g = n(985018),
    _ = n(657083);

function A(e) {
    let {
        errors: t,
        pendingNick: n,
        currentNick: A,
        username: x,
        user: h,
        guild: p
    } = e, T = (0, s.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, p) || c.A.can(u.xBc.MANAGE_NICKNAMES, p)), f = (0, a.L)(m.PremiumTypes.TIER_2);
    return (0, i.jsxs)(r.A, {
        title: g.intl.string(g.t.me1lRk),
        errors: t,
        children: [(0, i.jsx)(l.ksK, {
            value: n ?? A ?? "",
            placeholder: x,
            maxLength: u.d0r,
            onChange: function(e) {
                (0, d.p)({
                    guildId: p.id,
                    nickname: e
                })
            },
            disabled: !T,
            helperText: T ? void 0 : g.intl.string(g.t.gzjxQi)
        }), f && (0, i.jsx)(o.A, {
            user: h,
            guildId: p.id,
            className: _.F
        })]
    })
}