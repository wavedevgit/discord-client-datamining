/** Chunk was on 5606 **/
/** chunk id: 168917, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    i = n(311907),
    l = n(397927),
    s = n(757036),
    a = n(128450),
    o = n(180020),
    c = n(576705),
    d = n(684732),
    u = n(652215),
    p = n(788868),
    _ = n(985018),
    m = n(131025);

function g(e) {
    let {
        errors: t,
        pendingNick: n,
        currentNick: g,
        username: f,
        user: b,
        guild: h
    } = e, A = null != n ? n : g, E = (0, i.bG)([c.A], () => c.A.can(u.xBc.CHANGE_NICKNAME, h) || c.A.can(u.xBc.MANAGE_NICKNAMES, h)), x = (0, s.L)(p.PremiumTypes.TIER_2);
    return (0, r.jsxs)(a.A, {
        title: _.intl.string(_.t.me1lRk),
        errors: t,
        children: [(0, r.jsx)(l.ksK, {
            value: null != A ? A : "",
            placeholder: f,
            maxLength: u.d0r,
            onChange: function(e) {
                (0, d.o_)(e, g)
            },
            disabled: !E,
            helperText: E ? void 0 : _.intl.string(_.t.gzjxQi)
        }), x && (0, r.jsx)(o.A, {
            user: b,
            guildId: h.id,
            className: m.F
        })]
    })
}