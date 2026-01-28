/** Chunk was on 78528 **/
/** chunk id: 23395, original params: e,t,n (module,exports,require) **/
n.d(t, {
    B: () => h,
    default: () => f
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
    p = n(985018);
let h = "SCHEDULED_MESSAGE_EDIT_MODAL_KEY";

function f(e) {
    let {
        scheduledMessage: t,
        transitionState: n,
        onClose: i
    } = e, f = s()(t.sendAtTimestamp.substring(0, 200)), [g, m] = l.useState(f), [b, A] = l.useState(!1), y = async () => {
        A(!0);
        try {
            await (0, c.Eg)(t.scheduledMessageId, g.toISOString()), (0, d.kb)(), (0, o.OoC)(h)
        } catch (e) {
            (0, d.xP)(e.message)
        } finally {
            A(!1)
        }
    };
    return (0, r.jsx)(a.Modal, {
        transitionState: n,
        size: "md",
        title: p.intl.string(p.t.jbdHj3),
        onClose: i,
        actions: [{
            variant: "secondary",
            text: p.intl.string(p.t["ETE/oC"]),
            onClick: i
        }, {
            variant: "primary",
            text: p.intl.string(p.t.VZANAD),
            onClick: y,
            loading: b
        }],
        children: (0, r.jsx)(u.A, {
            defaultValue: f,
            onChange: m
        })
    })
}