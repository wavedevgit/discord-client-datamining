/** chunk id: 483768 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    r = n(843472),
    a = n(969043),
    c = n(406704),
    o = n(576705),
    d = n(287809),
    u = n(143413),
    E = n(145530),
    A = n(652215),
    m = n(985018);

function p(e, t) {
    let n = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        p = (0, c.Id)(t),
        f = (0, s.bG)([o.A], () => o.A.can(A.xBc.MANAGE_MESSAGES, t), [t]),
        {
            firstMessage: g
        } = (0, s.bG)([a.A], () => a.A.getMessage(t.id), [t.id]),
        D = f || null != n && e.canDeleteOwnMessage(n.id);
    return e.state === A.cmJ.SENDING || !D || A.MRS.UNDELETABLE.has(e.type) || !p || t.isModeratorReportChannel() && (e.id === g?.id || (0, u.A)(e)) ? null : (0, i.jsx)(l.Drp, {
        id: "delete",
        label: m.intl.string(m.t.xwMqD7),
        action: function(n) {
            e.state === A.cmJ.SEND_FAILED ? r.A.deleteMessage(t.id, e.id, !0) : n.shiftKey ? r.A.deleteMessage(t.id, e.id) : E.A.confirmDelete(t, e, !0)
        },
        color: "danger",
        leadingAccessory: {
            type: "icon",
            icon: l.ucK
        },
        icon: l.ucK
    })
}