/** Chunk was on 1113 **/
/** chunk id: 285745, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(627968),
    l = n(311907),
    i = n(397927),
    s = n(991982),
    a = n(838111),
    o = n(870136),
    c = n(696451),
    u = n(71393),
    d = n(576705),
    h = n(287809),
    p = n(102817),
    g = n(641131),
    f = n(985018);

function m(e) {
    let {
        channel: t,
        user: n,
        guild: m
    } = e, b = (0, l.bG)([h.default, u.A, d.A], () => null != n && null != m && (0, a.b)(m.id, n.id, [h.default, u.A, d.A])), [A, y] = (0, o.Ay)(null == n ? void 0 : n.id, t.guild_id), O = (0, l.bG)([c.Ay], () => null != m && null != n && null != c.Ay.getMember(m.id, n.id));
    if (!b || !O) return null;
    let _ = "timeout-user-".concat(null == n ? void 0 : n.id);
    return (0, r.jsx)(p.A, {
        text: y ? f.intl.string(g.default["6uMZbv"]) : f.intl.string(g.default["Sgg/uI"]),
        icon: i.O4,
        onClick: () => {
            null != n && (0, s.R)({
                guildId: t.guild_id,
                userId: n.id,
                modReportId: t.id
            })
        },
        disabled: y
    }, _)
}