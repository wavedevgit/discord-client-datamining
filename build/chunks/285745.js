/** Chunk was on 97492 **/
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
    p = n(287809),
    h = n(102817),
    f = n(641131),
    g = n(985018);

function m(e) {
    let {
        channel: t,
        user: n,
        guild: m
    } = e, b = (0, l.bG)([p.default, u.A, d.A], () => null != n && null != m && (0, a.b)(m.id, n.id, [p.default, u.A, d.A])), [A, y] = (0, o.Ay)(null == n ? void 0 : n.id, t.guild_id), _ = (0, l.bG)([c.Ay], () => null != m && null != n && null != c.Ay.getMember(m.id, n.id));
    if (!b || !_) return null;
    let O = "timeout-user-".concat(null == n ? void 0 : n.id);
    return (0, r.jsx)(h.A, {
        text: y ? g.intl.string(f.default["6uMZbv"]) : g.intl.string(f.default["Sgg/uI"]),
        icon: i.O4,
        onClick: () => {
            null != n && (0, s.R)({
                guildId: t.guild_id,
                userId: n.id,
                modReportId: t.id
            })
        },
        disabled: y
    }, O)
}