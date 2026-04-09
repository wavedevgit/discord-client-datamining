/** chunk id: 23395 params = (module,exports,require) **/
n.d(t, {
    B: () => m,
    default: () => A
});
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(158954),
    o = n(397927),
    c = n(151282),
    d = n(388096),
    u = n(970244),
    h = n(985018);
let m = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function A(e) {
    let {
        scheduledMessage: t,
        transitionState: n,
        onClose: s
    } = e, A = a()(t.sendAtTimestamp.substring(0, 200)), [g, p] = l.useState(A), [_, f] = l.useState(!1), E = async () => {
        f(!0);
        try {
            await (0, c.Eg)(t.scheduledMessageId, g.toISOString()), (0, u.kb)(), (0, o.OoC)(m)
        } catch (e) {
            (0, u.xP)(e.message)
        } finally {
            f(!1)
        }
    };
    return (0, i.jsx)(r.Modal, {
        transitionState: n,
        size: "md",
        title: h.intl.string(h.t.jbdHj3),
        onClose: s,
        actions: [{
            variant: "secondary",
            text: h.intl.string(h.t["ETE/oC"]),
            onClick: s
        }, {
            variant: "primary",
            text: h.intl.string(h.t.VZANAD),
            onClick: E,
            loading: _
        }],
        children: (0, i.jsx)(d.A, {
            defaultValue: A,
            onChange: p
        })
    })
}