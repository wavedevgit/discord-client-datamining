/** chunk id: 53825 params = (module,exports,require) **/
n.d(t, {
    N: () => p
});
var i = n(627968),
    s = n(64700),
    l = n(284009),
    r = n.n(l),
    a = n(311907),
    o = n(397927),
    d = n(97260),
    c = n(117178),
    u = n(734066),
    _ = n(419954),
    m = n(532624),
    g = n(780964),
    A = n(652215),
    h = n(985018),
    x = n(456491);
let p = (0, _.E2)(g.X.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [h.intl.string(h.t["0U/hj7"]), h.intl.string(h.t["5zxkdo"])],
    usePredicate: u.BW,
    Component: () => {
        let e = (0, a.bG)([m.Ay], () => m.Ay.getKeybindForAction(A.hCu.SAVE_CLIP, !0)),
            t = (0, a.bG)([m.Ay], () => m.Ay.getKeybindForAction(A.hCu.SAVE_SCREENSHOT, !0));
        r()(null != e, "Save clip keybind unset"), r()(null != t, "Save screenshot keybind unset");
        let n = s.useCallback(e => {
            d.A.setKeybind({
                ...t,
                shortcut: e
            })
        }, [t]);
        return (0, i.jsx)(o.D0$, {
            label: h.intl.string(h.t["0U/hj7"]),
            description: h.intl.string(h.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, i.jsx)("div", {
                className: x.g,
                children: (0, i.jsx)(c.A, {
                    defaultValue: t.shortcut,
                    onChange: n
                })
            })
        })
    }
})