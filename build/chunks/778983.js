/** Chunk was on 1113 **/
/** chunk id: 778983, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
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
    h = n(102817),
    p = n(641131),
    g = n(985018);

function f(e) {
    let {
        message: t,
        user: n,
        guild: f,
        channel: m
    } = e, b = (0, l.bG)([d.A], () => null != n && null != f && (0, a.Kd)(n, f, [d.A])), {
        messageReference: A
    } = t, y = (0, l.bG)([u.A], () => null != A ? u.A.getMessage(A.channel_id, A.message_id) : null), O = (0, l.bG)([c.A], () => null != y ? c.A.getChannel(y.channel_id) : null), _ = (0, l.bG)([c.A], () => {
        var e, t;
        return null != (e = null == (t = c.A.getChannel(m.id)) ? void 0 : t.isArchivedThread()) && e
    });
    if (!b) return null;
    let x = null == y ? g.intl.string(p.default["0IZbwC"]) : g.intl.string(p.default.Uj6oD4),
        j = null == y,
        v = "delete-message-".concat(t.id);
    return (0, r.jsx)(h.A, {
        text: x,
        icon: s.ucK,
        onClick: () => {
            null != O && null != y && o.A.confirmDelete(O, y, !1, {
                isFlagResolved: _,
                moderatorReportChannelId: m.id
            })
        },
        disabled: j,
        color: i.$n.Colors.RED
    }, v)
}