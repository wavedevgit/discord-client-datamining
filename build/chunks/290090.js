/** chunk id: 290090, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => A
});
var l = i(627968);
i(64700);
var n = i(311907),
    s = i(397927),
    a = i(688810),
    r = i(979286),
    o = i(958805),
    d = i(61881),
    c = i(993401),
    u = i(985018);

function A(e) {
    let {
        onClose: t,
        ...i
    } = e, {
        analyticsLocations: A,
        newestAnalyticsLocation: m
    } = (0, a.Ay)(), x = (0, n.bG)([d.A], () => d.A.hasUnsavedChanges());
    return (0, l.jsx)(c.q3, {
        action: "VISIT_SHOP",
        icon: s.U1X,
        tooltipText: u.intl.string(u.t.b2d0N0),
        onClick: () => {
            x ? o.A.notifyUnsavedWidgets() : ((0, r.Cz)({
                analyticsLocations: A,
                analyticsSource: m
            }), t?.())
        },
        ...i
    })
}