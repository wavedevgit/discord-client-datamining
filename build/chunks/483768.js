/** chunk id: 483768 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    l = n(843472),
    a = n(969043),
    c = n(406704),
    o = n(576705),
    d = n(287809),
    u = n(143413),
    E = n(145530),
    A = n(652215),
    p = n(985018);

function m(e, t) {
    let n = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        m = (0, c.Id)(t),
        f = (0, s.bG)([o.A], () => o.A.can(A.xBc.MANAGE_MESSAGES, t), [t]),
        {
            firstMessage: g
        } = (0, s.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
        D = f || null != n && e.canDeleteOwnMessage(n.id);
    return e.state === A.cmJ.SENDING || !D || A.MRS.UNDELETABLE.has(e.type) || !m || t.isModeratorReportChannel() && (e.id === g?.id || (0, u.A)(e)) ? null : (0, i.jsx)(r.Drp, {
        id: "delete",
        label: p.intl.string(p.t.xwMqD7),
        action: function(n) {
            e.state === A.cmJ.SEND_FAILED ? l.A.deleteMessage(t.id, e.id, !0) : n.shiftKey ? l.A.deleteMessage(t.id, e.id) : E.A.confirmDelete(t, e, !0)
        },
        color: "danger",
        leadingAccessory: {
            type: "icon",
            icon: r.ucK
        },
        icon: r.ucK
    })
}