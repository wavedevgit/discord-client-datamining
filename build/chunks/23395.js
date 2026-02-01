/** chunk id: 23395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => p,
    default: () => f
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(158954),
    o = n(397927),
    c = n(151282),
    u = n(388096),
    d = n(970244),
    h = n(985018);
let p = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function f(e) {
    let {
        scheduledMessage: t,
        transitionState: n,
        onClose: i
    } = e, f = a()(t.sendAtTimestamp.substring(0, 200)), [m, g] = r.useState(f), [A, b] = r.useState(!1), _ = async () => {
        b(!0);
        try {
            await (0, c.Eg)(t.scheduledMessageId, m.toISOString()), (0, d.kb)(), (0, o.OoC)(p)
        } catch (e) {
            (0, d.xP)(e.message)
        } finally {
            b(!1)
        }
    };
    return (0, l.jsx)(s.Modal, {
        transitionState: n,
        size: "md",
        title: h.intl.string(h.t.jbdHj3),
        onClose: i,
        actions: [{
            variant: "secondary",
            text: h.intl.string(h.t["ETE/oC"]),
            onClick: i
        }, {
            variant: "primary",
            text: h.intl.string(h.t.VZANAD),
            onClick: _,
            loading: A
        }],
        children: (0, l.jsx)(u.A, {
            defaultValue: f,
            onChange: g
        })
    })
}