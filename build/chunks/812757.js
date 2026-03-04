/** chunk id: 812757, original params: t,e,i (module,exports,require) **/
i.d(e, {
    t: () => _
});
var n = i(627968),
    l = i(64700),
    s = i(284009),
    a = i.n(s),
    r = i(311907),
    u = i(397927),
    o = i(97260),
    d = i(117178),
    A = i(419954),
    T = i(532624),
    S = i(780964),
    E = i(652215),
    g = i(985018),
    c = i(280973);
let _ = (0, A.E2)(S.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [g.intl.string(g.t.pf54EU), g.intl.string(g.t["QyB/jK"])],
    Component: () => {
        let t = (0, r.bG)([T.Ay], () => T.Ay.getKeybindForAction(E.hCu.SAVE_CLIP, !0));
        a()(null != t, "Save clip keybind unset");
        let e = l.useCallback(e => {
            o.A.setKeybind({
                ...t,
                shortcut: e
            })
        }, [t]);
        return (0, n.jsx)(u.D0$, {
            label: g.intl.string(g.t.pf54EU),
            description: g.intl.string(g.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: c.g,
                children: (0, n.jsx)(d.A, {
                    defaultValue: t.shortcut,
                    onChange: e
                })
            })
        })
    }
})