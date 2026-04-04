/** chunk id: 282077 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var s = n(503698),
    r = n.n(s),
    l = n(110259),
    o = n(877624),
    a = n(397927),
    c = n(139286),
    d = n(996696);

function u(e) {
    let {
        componentId: t,
        badgeCopy: n,
        acknowledgedBadgeCopy: s,
        isDismissed: u
    } = e;
    return ((0, c.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: o.C.PREMIUM_TAB,
            component_id: t
        }
    }), u) ? (0, i.jsxs)("div", {
        className: r()(d.BE, d.ZA),
        children: [(0, i.jsx)(a.O4, {
            size: "custom",
            width: 10,
            height: 10,
            color: "currentColor",
            className: d.P0
        }), (0, i.jsx)(a.Text, {
            variant: "eyebrow",
            color: "text-subtle",
            children: s
        })]
    }) : (0, i.jsx)("div", {
        className: r()(d.BE, d.CU),
        children: (0, i.jsx)(a.Text, {
            variant: "eyebrow",
            className: d.lI,
            children: n
        })
    })
}