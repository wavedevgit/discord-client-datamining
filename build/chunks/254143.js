/** chunk id: 254143 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(421380),
    r = n(397927),
    o = n(686956),
    c = n(964486),
    d = n(351001),
    u = n(576705),
    h = n(400528),
    m = n(102817),
    A = n(641131),
    p = n(985018);

function g(e) {
    let {
        channel: t,
        user: g,
        guild: f
    } = e, _ = (0, s.bG)([h.A], () => null != g && h.A.isUserBanned(g.id)), E = null != g && null == _, [x, C] = l.useState(E), S = (0, s.bG)([u.A], () => null != g && null != f && (0, d.fJ)(g, f, [u.A]));
    if ((0, c.Ay)(() => {
            E && o.A.searchGuildBans(t.guild_id, void 0, [g?.id]).finally(() => C(!1))
        }), !S) return null;
    let T = !0 === _ ? p.intl.string(A.default.dpfwQ1) : p.intl.string(A.default.ASv23S),
        N = `ban-user-${g?.id}`;
    return (0, i.jsx)(m.A, {
        text: T,
        icon: r.wI0,
        onClick: () => {
            null != g && (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("80123").then(n.bind(n, 333179));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: t.guild_id,
                    user: g,
                    modReportId: t.id
                })
            })
        },
        disabled: !0 === _ || x,
        submitting: x,
        color: a.$n.Colors.RED
    }, N)
}