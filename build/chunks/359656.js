/** chunk id: 359656, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(503698),
    s = n.n(i),
    a = n(397927),
    o = n(183555),
    c = n(752458);

function u(e) {
    let {
        section: t,
        header: n,
        items: i,
        listClassName: u,
        onExpand: d
    } = e, {
        trackUserProfileAction: h
    } = (0, o.NJ)(), p = l.useId(), [g, f] = l.useState(!1), m = g ? a.abt : a._BQ;
    return (0, r.jsxs)("section", {
        className: c.uW,
        children: [(0, r.jsxs)(a.DUT, {
            className: s()(c.wx, c.vk),
            "aria-controls": p,
            "aria-expanded": g,
            onClick: () => {
                f(!g), g || (h({
                    action: "PRESS_SECTION",
                    section: t
                }), null == d || d())
            },
            children: [(0, r.jsxs)(a.Heading, {
                variant: "text-sm/medium",
                color: "text-default",
                children: [n, " — ", i.length]
            }), (0, r.jsx)(m, {
                size: "md"
            })]
        }), i.length > 0 && (0, r.jsx)("ul", {
            id: p,
            hidden: !g,
            className: s()(c.p_, u),
            children: i
        })]
    })
}