/** chunk id: 161123 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var s = n(284009),
    l = n.n(s),
    a = n(311907),
    r = n(397927),
    o = n(97260),
    d = n(117178),
    c = n(15285),
    u = n(942405),
    m = n(532624),
    _ = n(9302),
    g = n(985018),
    A = n(502040);

function x() {
    let e = (0, a.bG)([m.Ay], () => m.Ay.getOverlayKeybind()),
        t = !(0, _.supportsLegacy)(),
        n = !(0, _.supportsOutOfProcess)(),
        [s, x] = (0, a.yK)([c.Ay], () => [c.Ay.canShowAdminWarning, c.Ay.getVisibleGame()], []),
        h = (0, u.NP)(),
        p = null != x && x.elevated && s && !h,
        T = !(0, m.DV)(e?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: A.hc,
        children: (0, i.jsxs)("div", {
            className: A.eH,
            children: [(0, i.jsxs)("div", {
                className: A.Bu,
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: g.intl.string(g.t.VsAZcC)
                }), p && (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: A.y7,
                    children: g.intl.string(g.t.NsowVa)
                }), T && (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: A.y7,
                    children: g.intl.string(g.t["UNoTw/"])
                })]
            }), (0, i.jsx)("div", {
                className: A.IH,
                children: (0, i.jsx)(d.A, {
                    disabled: t && n,
                    defaultValue: null != e ? e.shortcut : [],
                    onChange: function(t) {
                        l()(null != e, "Keybind should never be undefined"), o.A.setKeybind({
                            ...e,
                            shortcut: t
                        })
                    }
                })
            })]
        })
    })
}