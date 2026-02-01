/** chunk id: 896455, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => d,
    t: () => u
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(158954),
    a = n(397927),
    s = n(151282),
    o = n(388096),
    c = n(985018);
let u = "SCHEDULED_MESSAGE_CREATE_MODAL_KEY";

function d(e) {
    let {
        channel: t,
        transitionState: n,
        onClose: d,
        defaultValue: h
    } = e, [p, f] = r.useState(h);
    return (0, l.jsx)(i.Modal, {
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
                (0, s.yF)({
                    channelId: t.id,
                    scheduledTimestamp: p.toISOString()
                }), (0, a.OoC)(u)
            }
        }],
        children: (0, l.jsx)(o.A, {
            defaultValue: h,
            onChange: f
        })
    })
}