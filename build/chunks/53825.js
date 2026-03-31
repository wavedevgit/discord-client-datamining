/** chunk id: 53825 params = (module,exports,require) **/
n.d(t, {
    N: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    a = n.n(l),
    r = n(311907),
    o = n(397927),
    d = n(97260),
    c = n(117178),
    u = n(734066),
    m = n(419954),
    g = n(532624),
    _ = n(780964),
    A = n(652215),
    x = n(985018),
    h = n(950779);
let p = (0, m.E2)(_.X.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [x.intl.string(x.t["0U/hj7"]), x.intl.string(x.t["5zxkdo"])],
    usePredicate: u.BW,
    Component: () => {
        let e = (0, r.bG)([g.Ay], () => g.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0)),
            t = (0, r.bG)([g.Ay], () => g.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, !0));
        a()(null != e, "Save clip keybind unset"), a()(null != t, "Save screenshot keybind unset");
        let n = s.useCallback(e => {
            d.A.setKeybind({
                ...t,
                shortcut: e
            })
        }, [t]);
        return (0, i.jsx)(o.D0$, {
            label: x.intl.string(x.t["0U/hj7"]),
            description: x.intl.string(x.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: h.g,
                children: (0, i.jsx)(c.A, {
                    defaultValue: t.shortcut,
                    onChange: n
                })
            })
        })
    }
})