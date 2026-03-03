/** chunk id: 53825, original params: t,e,i (module,exports,require) **/
i.d(e, {
    N: () => I
});
var n = i(627968),
    l = i(64700),
    s = i(284009),
    r = i.n(s),
    a = i(311907),
    u = i(397927),
    o = i(97260),
    d = i(117178),
    A = i(734066),
    T = i(419954),
    S = i(532624),
    E = i(780964),
    g = i(652215),
    c = i(985018),
    _ = i(280973);
let I = (0, T.E2)(E.X.CLIPS_SCREENSHOT_KEYBIND, {
    useSearchTerms: () => [c.intl.string(c.t["0U/hj7"]), c.intl.string(c.t["5zxkdo"])],
    usePredicate: A.BW,
    Component: () => {
        let t = (0, a.bG)([S.Ay], () => S.Ay.getKeybindForAction(g.hCu.SAVE_CLIP, !0)),
            e = (0, a.bG)([S.Ay], () => S.Ay.getKeybindForAction(g.hCu.SAVE_SCREENSHOT, !0));
        r()(null != t, "Save clip keybind unset"), r()(null != e, "Save screenshot keybind unset");
        let i = l.useCallback(t => {
            o.A.setKeybind({
                ...e,
                shortcut: t
            })
        }, [e]);
        return (0, n.jsx)(u.D0$, {
            label: c.intl.string(c.t["0U/hj7"]),
            description: c.intl.string(c.t["5zxkdo"]),
            layout: "horizontal",
            children: (0, n.jsx)("div", {
                className: _.g,
                children: (0, n.jsx)(d.A, {
                    defaultValue: e.shortcut,
                    onChange: i
                })
            })
        })
    }
})