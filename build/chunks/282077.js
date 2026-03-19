/** chunk id: 282077 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968);
n(64700);
var a = n(503698),
    r = n.n(a),
    l = n(110259),
    s = n(877624),
    o = n(397927),
    d = n(139286),
    c = n(887345);

function u(e) {
    let {
        componentId: t,
        badgeCopy: n,
        acknowledgedBadgeCopy: a,
        isDismissed: u
    } = e;
    return ((0, d.A)({
        type: l.ImpressionTypes.VIEW,
        name: l.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: s.C.PREMIUM_TAB,
            component_id: t
        }
    }), u) ? (0, i.jsxs)("div", {
        className: r()(c.BE, c.ZA),
        children: [(0, i.jsx)(o.O4, {
            size: "custom",
            width: 10,
            height: 10,
            color: "currentColor",
            className: c.P0
        }), (0, i.jsx)(o.Text, {
            variant: "eyebrow",
            color: "text-subtle",
            children: a
        })]
    }) : (0, i.jsx)("div", {
        className: r()(c.BE, c.CU),
        children: (0, i.jsx)(o.Text, {
            variant: "eyebrow",
            className: c.lI,
            children: n
        })
    })
}