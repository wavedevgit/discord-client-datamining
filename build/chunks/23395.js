/** chunk id: 23395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => p,
    default: () => g
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(158954),
    o = n(397927),
    c = n(151282),
    u = n(388096),
    d = n(970244),
    h = n(985018);
let p = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function g(e) {
    let {
        scheduledMessage: t,
        transitionState: n,
        onClose: i
    } = e, g = s()(t.sendAtTimestamp.substring(0, 200)), [f, m] = l.useState(g), [b, A] = l.useState(!1), y = async () => {
        A(!0);
        try {
            await (0, c.Eg)(t.scheduledMessageId, f.toISOString()), (0, d.kb)(), (0, o.OoC)(p)
        } catch (e) {
            (0, d.xP)(e.message)
        } finally {
            A(!1)
        }
    };
    return (0, r.jsx)(a.Modal, {
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
            onClick: y,
            loading: b
        }],
        children: (0, r.jsx)(u.A, {
            defaultValue: g,
            onChange: m
        })
    })
}