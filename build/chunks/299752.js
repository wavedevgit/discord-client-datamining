/** chunk id: 299752 params = (module,exports,require) **/
n.d(t, {
    C: () => h
});
var i = n(627968),
    s = n(158954),
    l = n(311907),
    r = n(827343),
    a = n(117178),
    o = n(419954),
    d = n(430452),
    c = n(780964),
    u = n(840065),
    _ = n(903427),
    m = n(652215),
    g = n(985018),
    A = n(251349);
let h = (0, o.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
    usePredicate: _.P,
    Component: function() {
        let e = (0, l.bG)([d.Ay], () => {
                let {
                    shortcut: e
                } = d.Ay.getModeOptions();
                return e
            }),
            t = g.intl.format(g.t.HVvn5T, {
                onClick: () => (0, u.openUserSettings)(c.X.KEYBINDS_PANEL, {
                    section: m.nc_.KEYBINDS
                })
            });
        return (0, i.jsx)(s.D0$, {
            label: g.intl.string(g.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: A.e,
                children: (0, i.jsx)(a.A, {
                    defaultValue: e,
                    onChange: e => r.A.setMode(m.TBI.PUSH_TO_TALK, {
                        shortcut: e
                    })
                })
            })
        })
    }
})