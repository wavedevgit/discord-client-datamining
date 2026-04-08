/** chunk id: 290090 params = (module,exports,require) **/
n.d(l, {
    A: () => m
});
var t = n(627968);
n(64700);
var i = n(311907),
    s = n(397927),
    a = n(688810),
    r = n(979286),
    o = n(958805),
    d = n(61881),
    c = n(993401),
    u = n(985018);

function m(e) {
    let {
        onClose: l,
        ...n
    } = e, {
        analyticsLocations: m,
        newestAnalyticsLocation: p
    } = (0, a.Ay)(), x = (0, i.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, t.jsx)(c.q3, {
        action: "VISIT_SHOP",
        icon: s.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            x ? o.A.notifyUnsavedWidgets() : ((0, r.Cz)({
                analyticsLocations: m,
                analyticsSource: p
            }), l?.())
        },
        ...n
    })
}