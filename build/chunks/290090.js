/** chunk id: 290090 params = (module,exports,require) **/
i.d(l, {
    A: () => m
});
var t = i(627968);
i(64700);
var n = i(311907),
    s = i(397927),
    a = i(688810),
    r = i(979286),
    o = i(958805),
    d = i(61881),
    c = i(993401),
    u = i(985018);

function m(e) {
    let {
        onClose: l,
        ...i
    } = e, {
        analyticsLocations: m,
        newestAnalyticsLocation: x
    } = (0, a.Ay)(), A = (0, n.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, t.jsx)(c.q3, {
        action: "VISIT_SHOP",
        icon: s.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            A ? o.A.notifyUnsavedWidgets() : ((0, r.Cz)({
                analyticsLocations: m,
                analyticsSource: x
            }), l?.())
        },
        ...i
    })
}