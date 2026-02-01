/** chunk id: 778983, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var l = n(627968),
    r = n(311907),
    i = n(421380),
    a = n(397927),
    s = n(351001),
    o = n(145530),
    c = n(734057),
    u = n(320501),
    d = n(576705),
    h = n(102817),
    p = n(641131),
    f = n(985018);

function m(e) {
    let {
        message: t,
        user: n,
        guild: m,
        channel: g
    } = e, A = (0, r.bG)([d.A], () => null != n && null != m && (0, s.Kd)(n, m, [d.A])), {
        messageReference: b
    } = t, _ = (0, r.bG)([u.A], () => null != b ? u.A.getMessage(b.channel_id, b.message_id) : null), y = (0, r.bG)([c.A], () => null != _ ? c.A.getChannel(_.channel_id) : null), v = (0, r.bG)([c.A], () => {
        var e, t;
        return null != (e = null == (t = c.A.getChannel(g.id)) ? void 0 : t.isArchivedThread()) && e
    });
    if (!A) return null;
    let E = null == _ ? f.intl.string(p.default["0IZbwC"]) : f.intl.string(p.default.Uj6oD4),
        O = null == _,
        C = "delete-message-".concat(t.id);
    return (0, l.jsx)(h.A, {
        text: E,
        icon: a.ucK,
        onClick: () => {
            null != y && null != _ && o.A.confirmDelete(y, _, !1, {
                isFlagResolved: v,
                moderatorReportChannelId: g.id
            })
        },
        disabled: O,
        color: i.$n.Colors.RED
    }, C)
}