/** Chunk was on 97492 **/
/** chunk id: 896455, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => d,
    t: () => u
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(397927),
    a = n(151282),
    o = n(388096),
    c = n(985018);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function d(e) {
    let {
        channel: t,
        transitionState: n,
        onClose: d,
        defaultValue: p
    } = e, [h, f] = l.useState(p);
    return (0, r.jsx)(i.Modal, {
        transitionState: n,
        size: "md",
        title: c.intl.string(c.t["3+ii4F"]),
        onClose: d,
        actions: [{
            variant: "secondary",
            text: c.intl.string(c.t["ETE/oC"]),
            onClick: d
        }, {
            variant: "primary",
            text: c.intl.string(c.t.iQ1SwX),
            onClick: () => {
                (0, a.yF)({
                    channelId: t.id,
                    scheduledTimestamp: h.toISOString()
                }), (0, s.OoC)(u)
            }
        }],
        children: (0, r.jsx)(o.A, {
            defaultValue: p,
            onChange: f
        })
    })
}