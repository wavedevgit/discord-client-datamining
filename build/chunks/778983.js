/** Chunk was on 78528 **/
/** chunk id: 778983, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => g
});
var r = n(627968),
    l = n(311907),
    i = n(421380),
    s = n(397927),
    a = n(351001),
    o = n(145530),
    c = n(734057),
    u = n(320501),
    d = n(576705),
    p = n(102817),
    h = n(641131),
    f = n(985018);

function g(e) {
    let {
        message: t,
        user: n,
        guild: g,
        channel: m
    } = e, b = (0, l.bG)([d.A], () => null != n && null != g && (0, a.Kd)(n, g, [d.A])), {
        messageReference: A
    } = t, y = (0, l.bG)([u.A], () => null != A ? u.A.getMessage(A.channel_id, A.message_id) : null), _ = (0, l.bG)([c.A], () => null != y ? c.A.getChannel(y.channel_id) : null), O = (0, l.bG)([c.A], () => {
        var e, t;
        return null != (e = null == (t = c.A.getChannel(m.id)) ? void 0 : t.isArchivedThread()) && e
    });
    if (!b) return null;
    let j = null == y ? f.intl.string(h.default["0IZbwC"]) : f.intl.string(h.default.Uj6oD4),
        v = null == y,
        x = "delete-message-".concat(t.id);
    return (0, r.jsx)(p.A, {
        text: j,
        icon: s.ucK,
        onClick: () => {
            null != _ && null != y && o.A.confirmDelete(_, y, !1, {
                isFlagResolved: O,
                moderatorReportChannelId: m.id
            })
        },
        disabled: v,
        color: i.$n.Colors.RED
    }, x)
}