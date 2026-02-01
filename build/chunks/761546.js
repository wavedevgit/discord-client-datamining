/** chunk id: 761546, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => c
});
var n = r(627968);
r(64700);
var a = r(172218),
    s = r(397927),
    l = r(437290),
    i = r(892448);

function c(e) {
    let {
        users: t,
        isUserSelected: r,
        onSelectionChange: c,
        isFetching: o,
        onFetchMore: d,
        isUserDisabled: u,
        searchQuery: b = "",
        emptySearchContent: x,
        className: m,
        tooltipConfig: h
    } = e, _ = (0, a.K)(e => {
        e && !o && (null == d || d())
    });
    return b.length > 0 && 0 === t.length && null != x ? (0, n.jsxs)("div", {
        className: i.t,
        children: [(0, n.jsx)(s.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: x.header
        }), (0, n.jsx)(s.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: x.body
        })]
    }) : (0, n.jsxs)(s.d_W, {
        className: m,
        children: [t.map(e => (0, n.jsx)(l.A, {
            user: e,
            checked: r(e),
            disabled: !!(null == u ? void 0 : u(e)),
            onChange: c,
            tooltipConfig: h
        }, e.id)), o && (0, n.jsx)(s.y$y, {}), (0, n.jsx)("div", {
            ref: _
        })]
    })
}