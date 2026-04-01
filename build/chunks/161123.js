/** chunk id: 161123 params = (module,exports,require) **/
n.d(t, {
    A: () => A
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
    g = n(9302),
    _ = n(985018),
    x = n(502040);

function A() {
    let e = (0, a.bG)([m.Ay], () => m.Ay.getOverlayKeybind()),
        t = !(0, g.supportsLegacy)(),
        n = !(0, g.supportsOutOfProcess)(),
        [s, A] = (0, a.yK)([c.Ay], () => [c.Ay.canShowAdminWarning, c.Ay.getVisibleGame()], []),
        h = (0, u.NP)(),
        p = null != A && A.elevated && s && !h,
        T = !(0, m.DV)(e?.shortcut ?? []);
    return (0, i.jsx)("div", {
        className: x.hc,
        children: (0, i.jsxs)("div", {
            className: x.eH,
            children: [(0, i.jsxs)("div", {
                className: x.Bu,
                children: [(0, i.jsx)(r.Text, {
                    variant: "text-md/medium",
                    color: "text-strong",
                    children: _.intl.string(_.t.VsAZcC)
                }), p && (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: x.y7,
                    children: _.intl.string(_.t.NsowVa)
                }), T && (0, i.jsx)(r.Text, {
                    variant: "text-xs/normal",
                    color: "text-feedback-warning",
                    className: x.y7,
                    children: _.intl.string(_.t["UNoTw/"])
                })]
            }), (0, i.jsx)("div", {
                className: x.IH,
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