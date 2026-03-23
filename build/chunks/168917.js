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
    _ = n(985018),
    g = n(131025);

function A(e) {
    let {
        errors: t,
        pendingNick: n,
        currentNick: A,
        username: x,
        user: p,
        guild: h
    } = e, T = (0, s.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, h) || c.A.can(u.xBc.MANAGE_NICKNAMES, h)), E = (0, a.L)(m.PremiumTypes.TIER_2);
    return (0, i.jsxs)(r.A, {
        title: _.intl.string(_.t.me1lRk),
        errors: t,
        children: [(0, i.jsx)(l.ksK, {
            value: n ?? A ?? "",
            placeholder: x,
            maxLength: u.d0r,
            onChange: function(e) {
                (0, d.p)({
                    guildId: h.id,
                    nickname: e
                })
            },
            disabled: !T,
            helperText: T ? void 0 : _.intl.string(_.t.gzjxQi)
        }), E && (0, i.jsx)(o.A, {
            user: p,
            guildId: h.id,
            className: g.F
        })]
    })
}