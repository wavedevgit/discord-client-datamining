/** chunk id: 778983 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    l = n(311907),
    s = n(421380),
    a = n(397927),
    r = n(351001),
    o = n(145530),
    c = n(734057),
    d = n(320501),
    u = n(576705),
    h = n(102817),
    m = n(733045),
    A = n(985018);

function g(e) {
    let {
        message: t,
        user: n,
        guild: g,
        channel: p
    } = e, f = (0, l.bG)([u.A], () => null != n && null != g && (0, r.Kd)(n, g, [u.A])), {
        messageReference: _
    } = t, E = (0, l.bG)([d.A], () => null != _ ? d.A.getMessage(_.channel_id, _.message_id) : null), x = (0, l.bG)([c.A], () => null != E ? c.A.getChannel(E.channel_id) : null), C = (0, l.bG)([c.A], () => c.A.getChannel(p.id)?.isArchivedThread() ?? !1);
    if (!f) return null;
    let S = null == E ? A.intl.string(m.default["0IZbwC"]) : A.intl.string(m.default.Uj6oD4),
        T = null == E,
        N = `delete-message-${t.id}`;
    return (0, i.jsx)(h.A, {
        text: S,
        icon: a.ucK,
        onClick: () => {
            null != x && null != E && o.A.confirmDelete(x, E, !1, {
                isFlagResolved: C,
                moderatorReportChannelId: p.id
            })
        },
        disabled: T,
        color: s.$n.Colors.RED
    }, N)
}