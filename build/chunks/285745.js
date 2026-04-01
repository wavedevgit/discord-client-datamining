/** chunk id: 285745 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(311907),
    s = n(397927),
    a = n(991982),
    r = n(838111),
    o = n(870136),
    c = n(696451),
    d = n(71393),
    u = n(576705),
    h = n(287809),
    m = n(102817),
    A = n(641131),
    p = n(985018);

function g(e) {
    let {
        channel: t,
        user: n,
        guild: g
    } = e, f = (0, l.bG)([h.default, d.A, u.A], () => null != n && null != g && (0, r.b)(g.id, n.id, [h.default, d.A, u.A])), [_, E] = (0, o.Ay)(n?.id, t.guild_id), x = (0, l.bG)([c.Ay], () => null != g && null != n && null != c.Ay.getMember(g.id, n.id));
    if (!f || !x) return null;
    let C = `timeout-user-${n?.id}`;
    return (0, i.jsx)(m.A, {
        text: E ? p.intl.string(A.default["6uMZbv"]) : p.intl.string(A.default["Sgg/uI"]),
        icon: s.O4,
        onClick: () => {
            null != n && (0, a.R)({
                guildId: t.guild_id,
                userId: n.id,
                modReportId: t.id
            })
        },
        disabled: E
    }, C)
}