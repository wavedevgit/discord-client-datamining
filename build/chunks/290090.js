/** chunk id: 290090 params = (module,exports,require) **/
t.d(l, {
    A: () => m
});
var i = t(627968);
t(64700);
var n = t(311907),
    s = t(397927),
    a = t(688810),
    r = t(979286),
    o = t(958805),
    d = t(61881),
    c = t(993401),
    u = t(985018);

function m(e) {
    let {
        onClose: l,
        ...t
    } = e, {
        analyticsLocations: m,
        newestAnalyticsLocation: A
    } = (0, a.Ay)(), x = (0, n.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, i.jsx)(c.q3, {
        action: "VISIT_SHOP",
        icon: s.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            x ? o.A.notifyUnsavedWidgets() : ((0, r.Cz)({
                analyticsLocations: m,
                analyticsSource: A
            }), l?.())
        },
        ...t
    })
}