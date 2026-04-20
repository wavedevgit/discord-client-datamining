/** chunk id: 254143 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    l = n(64700),
    a = n(311907),
    s = n(421380),
    r = n(397927),
    o = n(686956),
    c = n(964486),
    d = n(351001),
    u = n(576705),
    h = n(400528),
    m = n(102817),
    A = n(221314),
    g = n(985018);

function _(e) {
    let {
        channel: t,
        user: _,
        guild: p
    } = e, f = (0, a.bG)([h.A], () => null != _ && h.A.isUserBanned(_.id)), E = null != _ && null == f, [C, x] = l.useState(E), S = (0, a.bG)([u.A], () => null != _ && null != p && (0, d.fJ)(_, p, [u.A]));
    if ((0, c.Ay)(() => {
            E && o.A.searchGuildBans(t.guild_id, void 0, [_?.id]).finally(() => x(!1))
        }), !S) return null;
    let I = !0 === f ? g.intl.string(A.default.dpfwQ1) : g.intl.string(A.default.ASv23S),
        T = `ban-user-${_?.id}`;
    return (0, i.jsx)(m.A, {
        text: I,
        icon: r.wI0,
        onClick: () => {
            null != _ && (0, r.mMO)(async () => {
                let {
                    default: e
                } = await n.e("80123").then(n.bind(n, 333179));
                return n => (0, i.jsx)(e, {
                    ...n,
                    guildId: t.guild_id,
                    user: _,
                    modReportId: t.id
                })
            })
        },
        disabled: !0 === f || C,
        submitting: C,
        color: s.$n.Colors.RED
    }, T)
}