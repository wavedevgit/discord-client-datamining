/** chunk id: 77371, original params: t,e,i (module,exports,require) **/
i.d(e, {
    C: () => g
});
var n = i(627968),
    l = i(158954),
    s = i(311907),
    r = i(827343),
    u = i(117178),
    a = i(419954),
    o = i(430452),
    d = i(780964),
    T = i(840065),
    A = i(903427),
    S = i(652215),
    c = i(985018),
    E = i(755087);
let g = (0, a.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [c.intl.string(c.t["pS+K2L"]), c.intl.string(c.t.nuFtHH)],
    usePredicate: A.P,
    Component: function() {
        let t = (0, s.bG)([o.A], () => {
                let {
                    shortcut: t
                } = o.A.getModeOptions();
                return t
            }),
            e = c.intl.format(c.t.HVvn5T, {
                onClick: () => (0, T.openUserSettings)(d.X.KEYBINDS_PANEL, {
                    section: S.nc_.KEYBINDS
                })
            });
        return (0, n.jsx)(l.D0$, {
            label: c.intl.string(c.t["o+BJQR"]),
            description: e,
            layout: "horizontal-responsive",
            children: (0, n.jsx)("div", {
                className: E.e,
                children: (0, n.jsx)(u.A, {
                    defaultValue: t,
                    onChange: t => r.A.setMode(S.TBI.PUSH_TO_TALK, {
                        shortcut: t
                    })
                })
            })
        })
    }
})