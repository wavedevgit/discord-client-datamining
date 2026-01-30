/** chunk id: 77371, original params: e,t,i (module,exports,require) **/
i.d(t, {
    C: () => E
});
var n = i(627968),
    l = i(158954),
    s = i(311907),
    r = i(827343),
    a = i(117178),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    T = i(840065),
    c = i(903427),
    A = i(652215),
    S = i(985018),
    _ = i(755087);
let E = (0, u.E2)(d.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [S.intl.string(S.t["pS+K2L"]), S.intl.string(S.t.nuFtHH)],
    usePredicate: c.P,
    Component: function() {
        let e = (0, s.bG)([o.A], () => {
                let {
                    shortcut: e
                } = o.A.getModeOptions();
                return e
            }),
            t = S.intl.format(S.t.HVvn5T, {
                onClick: () => (0, T.openUserSettings)(d.X.KEYBINDS_PANEL, {
                    section: A.nc_.KEYBINDS
                })
            });
        return (0, n.jsx)(l.D0$, {
            label: S.intl.string(S.t["o+BJQR"]),
            description: t,
            layout: "horizontal-responsive",
            children: (0, n.jsx)("div", {
                className: _.e,
                children: (0, n.jsx)(a.A, {
                    defaultValue: e,
                    onChange: e => r.A.setMode(A.TBI.PUSH_TO_TALK, {
                        shortcut: e
                    })
                })
            })
        })
    }
})