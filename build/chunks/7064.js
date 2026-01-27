/** Chunk was on 60667 **/
/** chunk id: 7064, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var r = n(627968),
    i = n(64700),
    l = n(397927),
    s = n(195043),
    a = n(193658),
    o = n(355097),
    c = n(531525),
    d = n(985018),
    u = n(943626);

function _(e) {
    let {
        currentUser: t,
        disabled: n,
        handleDisableAccount: _,
        handleDeleteAccount: p
    } = e, m = t.isClaimed(), g = i.useRef(null);
    return (0, a.A)(g, o.Ew.AccountScrollPositions.DISABLE_ACCOUNT), (0, r.jsx)(s.x, {
        setting: c.H.ACCOUNT_DISABLE_ACCOUNT,
        children: (0, r.jsx)("div", {
            ref: g,
            children: (0, r.jsx)(l.D0$, {
                label: d.intl.string(d.t.ZKsIks),
                description: m ? d.intl.string(d.t.TIh3Yj) : d.intl.string(d.t.czsGA8),
                children: (0, r.jsxs)(l.ButtonGroup, {
                    size: "sm",
                    className: u.U,
                    children: [m ? (0, r.jsx)(l.Button, {
                        variant: "critical-primary",
                        size: "sm",
                        text: d.intl.string(d.t.jf5GGb),
                        disabled: n,
                        onClick: _
                    }) : null, (0, r.jsx)(s.x, {
                        setting: c.H.ACCOUNT_DELETE_ACCOUNT,
                        children: (0, r.jsx)(l.Button, {
                            variant: "critical-secondary",
                            size: "sm",
                            text: d.intl.string(d.t["8lQ2rR"]),
                            disabled: n,
                            onClick: p
                        })
                    })]
                })
            })
        })
    })
}