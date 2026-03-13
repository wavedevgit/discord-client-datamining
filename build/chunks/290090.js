/** chunk id: 290090 params = (module,exports,require) **/
n.d(l, {
    A: () => A
});
var i = n(627968);
n(64700);
var t = n(311907),
    s = n(397927),
    a = n(688810),
    r = n(979286),
    o = n(958805),
    d = n(61881),
    c = n(993401),
    u = n(985018);

function A(e) {
    let {
        onClose: l,
        ...n
    } = e, {
        analyticsLocations: A,
        newestAnalyticsLocation: m
    } = (0, a.Ay)(), p = (0, t.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, i.jsx)(c.q3, {
        action: "VISIT_SHOP",
        icon: s.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            p ? o.A.notifyUnsavedWidgets() : ((0, r.Cz)({
                analyticsLocations: A,
                analyticsSource: m
            }), l?.())
        },
        ...n
    })
}