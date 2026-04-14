/** chunk id: 290090 params = (module,exports,require) **/
n.d(l, {
    A: () => c
});
var t = n(627968);
n(64700);
var i = n(397927),
    s = n(688810),
    a = n(979286),
    r = n(23722),
    o = n(993401),
    d = n(985018);

function c(e) {
    let {
        onClose: l,
        ...n
    } = e, {
        analyticsLocations: c,
        newestAnalyticsLocation: u
    } = (0, s.Ay)(), m = (0, r.A)(() => {
        (0, a.Cz)({
            analyticsLocations: c,
            analyticsSource: u
        }), l?.()
    });
    return (0, t.jsx)(o.q3, {
        action: "VISIT_SHOP",
        icon: i.U1X,
        tooltipText: d.intl.string(d.t.b2d0N0),
        onClick: m,
        ...n
    })
}