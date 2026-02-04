/** chunk id: 578093, original params: e,t,n (module,exports,require) **/
n.d(t, {
    j: () => f
}), n(896048);
var l = n(627968);
n(64700);
var r = n(311907),
    i = n(397927),
    s = n(996439),
    a = n(914853),
    o = n(676923),
    u = n(406595),
    c = n(74395),
    d = n(652215),
    h = n(895867),
    g = n(985018);

function f(e) {
    let {
        tab: t,
        targetId: n,
        widgetType: f = d.uss.FRIENDS,
        showTooltip: p = !0,
        shouldStopPropagation: I = !0,
        className: m
    } = e, [E] = (0, r.bG)([u.A], () => u.A.isFavorite(t, n), [t, n], s.D), A = (0, c.t)({
        tab: t,
        targetId: n,
        shouldStopPropagation: I,
        widgetType: f
    }), y = E ? i.Gg5 : i.yA2, S = (0, i.rdh)(i.LU0.colors.ICON_FEEDBACK_WARNING), v = (0, i.rdh)(i.LU0.colors.ICON_DEFAULT), O = t === a.x.FRIENDS ? E ? g.intl.string(h.default.Xr8XHk) : g.intl.string(h.default.w1MU8Y) : E ? g.intl.string(h.default.dvUElD) : g.intl.string(h.default.iK1QsY);
    return (0, l.jsx)(o.S, {
        tooltipText: O,
        showTooltip: p,
        className: m,
        onClick: A,
        children: (0, l.jsx)(y, {
            size: "sm",
            color: E ? S.hex() : v.hex()
        })
    })
}