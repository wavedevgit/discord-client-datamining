/** Chunk was on 28636 **/
/** chunk id: 153527, original params: e,t,n (module,exports,require) **/
n.d(t, {
    S: () => m,
    n: () => h
});
var r, l = n(627968);
n(64700);
var i = n(503698),
    a = n.n(i),
    s = n(397927),
    o = n(736653),
    c = n(742589),
    d = n(151252),
    u = n(571338),
    p = n(403299),
    h = ((r = {}).DEFAULT = "DEFAULT", r.SEARCH = "SEARCH", r);

function m(e) {
    let {
        selectedTabId: t,
        handleTransition: n,
        tabs: r,
        state: i = "DEFAULT",
        onAvailableWidthChange: h,
        icon: m,
        children: g
    } = e, _ = (0, o.Ay)(), {
        enabled: b
    } = (0, d.Z)({
        location: "global_discovery_header_bar"
    });
    return (0, l.jsx)(s.NPJ, {
        theme: _,
        children: e => (0, l.jsxs)(c.A, {
            className: a()(e, p.jr),
            innerClassname: b ? p.vi : void 0,
            children: ["DEFAULT" === i && (0, l.jsxs)(l.Fragment, {
                children: [(0, l.jsx)(m, {
                    color: "currentColor",
                    size: "md"
                }), (0, l.jsx)(u.A, {
                    tabs: r,
                    selectedTab: t,
                    onTabSelect: n,
                    onAvailableWidthChange: h
                })]
            }), (0, l.jsx)("div", {
                className: a()(p.w4, {
                    [p.cS]: "SEARCH" === i
                }),
                children: g
            })]
        })
    })
}