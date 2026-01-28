/** Chunk was on 28979 **/
/** chunk id: 77371, original params: t,e,i (module,exports,require) **/
i.d(e, {
    C: () => _
});
var n = i(627968),
    l = i(158954),
    s = i(311907),
    r = i(827343),
    u = i(117178),
    a = i(419954),
    o = i(430452),
    T = i(780964),
    d = i(840065),
    A = i(903427),
    S = i(652215),
    E = i(985018),
    g = i(755087);
let _ = (0, a.E2)(T.X.VOICE_PUSH_TO_TALK_KEYBIND_SETTING, {
    useSearchTerms: () => [E.intl.string(E.t["pS+K2L"]), E.intl.string(E.t.nuFtHH)],
    usePredicate: A.P,
    Component: function() {
        let t = (0, s.bG)([o.A], () => {
                let {
                    shortcut: t
                } = o.A.getModeOptions();
                return t
            }),
            e = E.intl.format(E.t.HVvn5T, {
                onClick: () => (0, d.openUserSettings)(T.X.KEYBINDS_PANEL, {
                    section: S.nc_.KEYBINDS
                })
            });
        return (0, n.jsx)(l.D0$, {
            label: E.intl.string(E.t["o+BJQR"]),
            description: e,
            layout: "horizontal-responsive",
            children: (0, n.jsx)("div", {
                className: g.e,
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