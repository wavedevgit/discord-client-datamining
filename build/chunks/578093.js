/** chunk id: 578093 params = (module,exports,require) **/
n.d(t, {
    j: () => m
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    s = n(996439),
    a = n(914853),
    o = n(676923),
    u = n(406595),
    d = n(74395),
    c = n(652215),
    h = n(499214),
    g = n(985018);

function m(e) {
    let {
        tab: t,
        targetId: n,
        widgetType: m = c.uss.FRIENDS,
        showTooltip: f = !0,
        shouldStopPropagation: A = !0,
        className: I
    } = e, [E] = (0, l.bG)([u.A], () => u.A.isFavorite(t, n), [t, n], s.D), p = (0, d.t)({
        tab: t,
        targetId: n,
        shouldStopPropagation: A,
        widgetType: m
    }), _ = E ? r.Gg5 : r.yA2, S = (0, r.rdh)(r.LU0.colors.ICON_FEEDBACK_WARNING), x = (0, r.rdh)(r.LU0.colors.ICON_DEFAULT), T = t === a.x.FRIENDS ? E ? g.intl.string(h.default.Xr8XHk) : g.intl.string(h.default.w1MU8Y) : E ? g.intl.string(h.default.dvUElD) : g.intl.string(h.default.iK1QsY);
    return (0, i.jsx)(o.S, {
        tooltipText: T,
        showTooltip: f,
        className: I,
        onClick: p,
        children: (0, i.jsx)(_, {
            size: "sm",
            color: E ? S.hex() : x.hex()
        })
    })
}