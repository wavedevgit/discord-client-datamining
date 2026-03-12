/** chunk id: 299752 params = (module,exports,require) **/
n.d(t, {
    C: () => h
});
var i = n(627968),
    s = n(158954),
    l = n(311907),
    a = n(827343),
    r = n(117178),
    o = n(419954),
    d = n(430452),
    c = n(780964),
    u = n(840065),
    _ = n(903427),
    g = n(652215),
    A = n(985018),
    m = n(251349);
let h = (0, o.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [A.intl.string(A.t["pS+K2L"]), A.intl.string(A.t.nuFtHH)],
    usePredicate: _.P,
    Component: function() {
        let e = (0, l.bG)([d.Ay], () => {
                let {
                    shortcut: e
                } = d.Ay.getModeOptions();
                return e
            }),
            t = A.intl.format(A.t.HVvn5T, {
                onClick: () => (0, u.openUserSettings)(c.X.KEYBINDS_PANEL, {
                    section: g.nc_.KEYBINDS
                })
            });
        return (0, i.jsx)(s.D0$, {
            label: A.intl.string(A.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: m.e,
                children: (0, i.jsx)(r.A, {
                    defaultValue: e,
                    onChange: e => a.A.setMode(g.TBI.PUSH_TO_TALK, {
                        shortcut: e
                    })
                })
            })
        })
    }
})