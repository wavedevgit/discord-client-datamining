/** chunk id: 761546, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(172218),
    l = n(397927),
    a = n(437290),
    s = n(892448);

function o(e) {
    let {
        users: t,
        isUserSelected: n,
        onSelectionChange: o,
        isFetching: c,
        onFetchMore: u,
        isUserDisabled: d,
        searchQuery: p = "",
        emptySearchContent: m,
        className: f,
        tooltipConfig: g
    } = e, _ = (0, i.K)(e => {
        e && !c && (null == u || u())
    });
    return p.length > 0 && 0 === t.length && null != m ? (0, r.jsxs)("div", {
        className: s.t,
        children: [(0, r.jsx)(l.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: m.header
        }), (0, r.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: m.body
        })]
    }) : (0, r.jsxs)(l.d_W, {
        className: f,
        children: [t.map(e => (0, r.jsx)(a.A, {
            user: e,
            checked: n(e),
            disabled: !!(null == d ? void 0 : d(e)),
            onChange: o,
            tooltipConfig: g
        }, e.id)), c && (0, r.jsx)(l.y$y, {}), (0, r.jsx)("div", {
            ref: _
        })]
    })
}