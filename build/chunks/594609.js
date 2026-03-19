/** chunk id: 594609 params = (module,exports,require) **/
n.d(t, {
    h: () => u
});
var i = n(627968),
    l = n(64700),
    r = n(158954),
    s = n(397927),
    a = n(827343),
    o = n(985018);

function c(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(r.Modal, {
        size: "md",
        title: o.intl.string(o.t["zQ1+Jw"]),
        subtitle: o.intl.string(o.t.K1gWXn),
        actions: [{
            text: o.intl.string(o.t.BddRzS),
            onClick: () => {
                t && a.A.setSilenceWarning(!1), e.onClose()
            },
            variant: "primary"
        }],
        actionBarInput: (0, i.jsx)(r.Sc0, {
            checked: t,
            onChange: e => n(e),
            label: o.intl.string(o.t.XAiAgD),
            labelType: "secondary"
        }),
        ...e
    })
}

function u() {
    (0, s.qfG)(e => (0, i.jsx)(c, {
        ...e
    }))
}