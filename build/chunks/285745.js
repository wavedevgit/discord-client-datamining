/** chunk id: 285745, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
}), n(896048);
var l = n(627968),
    r = n(311907),
    i = n(397927),
    a = n(991982),
    s = n(838111),
    o = n(870136),
    c = n(696451),
    u = n(71393),
    d = n(576705),
    h = n(287809),
    p = n(102817),
    f = n(641131),
    m = n(985018);

function g(e) {
    let {
        channel: t,
        user: n,
        guild: g
    } = e, A = (0, r.bG)([h.default, u.A, d.A], () => null != n && null != g && (0, s.b)(g.id, n.id, [h.default, u.A, d.A])), [b, _] = (0, o.Ay)(null == n ? void 0 : n.id, t.guild_id), y = (0, r.bG)([c.Ay], () => null != g && null != n && null != c.Ay.getMember(g.id, n.id));
    if (!A || !y) return null;
    let v = "timeout-user-".concat(null == n ? void 0 : n.id);
    return (0, l.jsx)(p.A, {
        text: _ ? m.intl.string(f.default["6uMZbv"]) : m.intl.string(f.default["Sgg/uI"]),
        icon: i.O4,
        onClick: () => {
            null != n && (0, a.R)({
                guildId: t.guild_id,
                userId: n.id,
                modReportId: t.id
            })
        },
        disabled: _
    }, v)
}