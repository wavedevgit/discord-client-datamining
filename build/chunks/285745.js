/** chunk id: 285745 params = (module,exports,require) **/
n.d(t, {
    A: () => p
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
    g = n(985018);

function p(e) {
    let {
        channel: t,
        user: n,
        guild: p
    } = e, f = (0, l.bG)([h.default, d.A, u.A], () => null != n && null != p && (0, r.b)(p.id, n.id, [h.default, d.A, u.A])), [_, E] = (0, o.Ay)(n?.id, t.guild_id), C = (0, l.bG)([c.Ay], () => null != p && null != n && null != c.Ay.getMember(p.id, n.id));
    if (!f || !C) return null;
    let x = `timeout-user-${n?.id}`;
    return (0, i.jsx)(m.A, {
        text: E ? g.intl.string(A.default["6uMZbv"]) : g.intl.string(A.default["Sgg/uI"]),
        icon: s.O4,
        onClick: () => {
            null != n && (0, a.R)({
                guildId: t.guild_id,
                userId: n.id,
                modReportId: t.id
            })
        },
        disabled: E
    }, x)
}