/** chunk id: 299752 params = (module,exports,require) **/
n.d(t, {
    C: () => A
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
    m = n(903427),
    _ = n(652215),
    g = n(985018),
    x = n(616118);
let A = (0, o.E2)(c.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [g.intl.string(g.t["pS+K2L"]), g.intl.string(g.t.nuFtHH)],
    usePredicate: m.P,
    Component: function() {
        let e = (0, l.bG)([d.Ay], () => {
                let {
                    shortcut: e
                } = d.Ay.getModeOptions();
                return e
            }),
            t = g.intl.format(g.t.HVvn5T, {
                onClick: () => (0, u.openUserSettings)(c.X.KEYBINDS_PANEL)
            });
        return (0, i.jsx)(s.D0$, {
            label: g.intl.string(g.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, i.jsx)("div", {
                className: x.e,
                children: (0, i.jsx)(r.A, {
                    defaultValue: e,
                    onChange: e => a.A.setMode(_.TBI.PUSH_TO_TALK, {
                        shortcut: e
                    })
                })
            })
        })
    }
})