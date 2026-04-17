/** chunk id: 594609 params = (module,exports,require) **/
n.d(t, {
    h: () => c
});
var i = n(627968),
    l = n(64700),
    s = n(158954),
    a = n(397927),
    r = n(827343),
    o = n(985018);

function d(e) {
    let [t, n] = l.useState(!1);
    return (0, i.jsx)(s.Modal, {
        size: "md",
        title: o.intl.string(o.t["zQ1+Jw"]),
        subtitle: o.intl.string(o.t.K1gWXn),
        actions: [{
            text: o.intl.string(o.t.BddRzS),
            onClick: () => {
                t && r.A.setSilenceWarning(!1), e.onClose()
            },
            variant: "primary"
        }],
        actionBarInput: (0, i.jsx)(s.Sc0, {
            checked: t,
            onChange: e => n(e),
            label: o.intl.string(o.t.XAiAgD),
            labelType: "secondary"
        }),
        ...e
    })
}

function c() {
    (0, a.qfG)(e => (0, i.jsx)(d, {
        ...e
    }))
}