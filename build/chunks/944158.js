/** chunk id: 944158, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var a = n(627968),
    i = n(64700),
    s = n(158954),
    l = n(397927),
    r = n(839214),
    o = n(780964),
    d = n(840065),
    c = n(652215);
let u = (0, r.D)(() => ({
    setting: o.X.ACCOUNT_PANEL,
    section: c.nc_.ACCOUNT,
    subsection: void 0
}));

function m() {
    let e = u.useField("setting"),
        t = u.useField("section"),
        n = u.useField("subsection"),
        r = i.useCallback(() => {
            (0, d.openUserSettings)(e, {
                section: t,
                subsection: n
            })
        }, [e, t, n]),
        m = i.useMemo(() => Object.values(o.X).map(e => ({
            id: e,
            label: e,
            value: e
        })), []),
        h = i.useMemo(() => Object.values(c.nc_).map(e => ({
            id: e,
            label: e,
            value: e
        })), []);
    return (0, a.jsxs)(s.nVY, {
        label: "Settings Navigation Tool",
        children: [(0, a.jsx)(l.ZiE, {
            label: "Setting (Redesign)",
            placeholder: "Select a setting",
            value: e,
            onSelectionChange: e => u.setState({
                setting: e
            }),
            options: m,
            selectionMode: "single",
            clearable: !0
        }), (0, a.jsx)(l.ZiE, {
            label: "Setting Section (Legacy)",
            value: t,
            onSelectionChange: e => u.setState({
                section: e
            }),
            options: h,
            selectionMode: "single"
        }), (0, a.jsx)(l.ksK, {
            label: "Setting Subsection (Legacy)",
            placeholder: "Type a subsection...",
            onChange: e => u.setState({
                subsection: e
            })
        }), (0, a.jsx)(s.$nd, {
            variant: "primary",
            onClick: r,
            text: "Open User Settings"
        })]
    })
}