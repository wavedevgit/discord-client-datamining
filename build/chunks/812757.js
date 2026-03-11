/** chunk id: 812757 params = (module,exports,require) **/
n.d(t, {
    t: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(97260),
    c = n(117178),
    u = n(419954),
    _ = n(532624),
    g = n(780964),
    A = n(652215),
    m = n(985018),
    h = n(280973);
let p = (0, u.E2)(g.X.CLIPS_KEYBIND, {
    useSearchTerms: () => [m.intl.string(m.t.pf54EU), m.intl.string(m.t["QyB/jK"])],
    Component: () => {
        let e = (0, r.bG)([_.Ay], () => _.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0));
        a()(null != e, "Save clip keybind unset");
        let t = s.useCallback(t => {
            d.A.setKeybind({
                ...e,
                shortcut: t
            })
        }, [e]);
        return (0, i.jsx)(o.D0$, {
            label: m.intl.string(m.t.pf54EU),
            description: m.intl.string(m.t["QyB/jK"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: h.g,
                children: (0, i.jsx)(c.A, {
                    defaultValue: e.shortcut,
                    onChange: t
                })
            })
        })
    }
})