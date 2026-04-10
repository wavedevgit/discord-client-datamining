/** chunk id: 770252 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(985018),
    r = n(465905);

function a(e) {
    let {
        currentUser: t,
        disabled: n,
        handleDisableAccount: a,
        handleDeleteAccount: o
    } = e, d = t.isClaimed();
    return (0, i.jsx)(s.D0$, {
        label: l.intl.string(l.t.ZKsIks),
        description: d ? l.intl.string(l.t.TIh3Yj) : l.intl.string(l.t.czsGA8),
        children: (0, i.jsxs)(s.ButtonGroup, {
            size: "sm",
            className: r.U,
            children: [d ? (0, i.jsx)(s.Button, {
                variant: "critical-primary",
                size: "sm",
                text: l.intl.string(l.t.jf5GGb),
                disabled: n,
                onClick: a
            }) : null, (0, i.jsx)(s.Button, {
                variant: "critical-secondary",
                size: "sm",
                text: l.intl.string(l.t["8lQ2rR"]),
                disabled: n,
                onClick: o
            })]
        })
    })
}