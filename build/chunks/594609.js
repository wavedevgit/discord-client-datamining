/** chunk id: 594609 params = (module,exports,require) **/
"use strict";
n.d(e, {
    h: () => u
});
var i = n(627968),
    r = n(64700),
    s = n(158954),
    l = n(397927),
    a = n(827343),
    o = n(985018);

function c(t) {
    let [e, n] = r.useState(!1);
    return (0, i.jsx)(s.Modal, {
        size: "md",
        title: o.intl.string(o.t["zQ1+Jw"]),
        subtitle: o.intl.string(o.t.K1gWXn),
        actions: [{
            text: o.intl.string(o.t.BddRzS),
            onClick: () => {
                e && a.A.setSilenceWarning(!1), t.onClose()
            },
            variant: "primary"
        }],
        actionBarInput: (0, i.jsx)(s.Sc0, {
            checked: e,
            onChange: t => n(t),
            label: o.intl.string(o.t.XAiAgD),
            labelType: "secondary"
        }),
        ...t
    })
}

function u() {
    (0, l.qfG)(t => (0, i.jsx)(c, {
        ...t
    }))
}