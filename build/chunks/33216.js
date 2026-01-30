/** chunk id: 33216, original params: t,e,n (module,exports,require) **/
n.d(e, {
    default: () => s
});
var i = n(627968);
n(64700);
var l = n(158954),
    a = n(397927),
    r = n(974875),
    o = n(985018);

function s(t) {
    let {
        channelId: e,
        messageId: n,
        onClose: s,
        transitionState: c
    } = t;
    return (0, i.jsx)(l.Modal, {
        transitionState: c,
        onClose: s,
        title: o.intl.string(o.t.B3vFdU),
        subtitle: o.intl.string(o.t.i4AbAS),
        actions: [{
            text: o.intl.string(o.t.WAI6xu),
            onClick: s
        }],
        children: (0, i.jsx)(a.Text, {
            variant: "text-md/normal",
            color: "text-default",
            children: o.intl.format(o.t.Ge0HUi, {
                handleFalsePositiveHook: () => {
                    s(), (0, r.Q)(e, n)
                }
            })
        })
    })
}