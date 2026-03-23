/** chunk id: 761546 params = (module,exports,require) **/
s.d(t, {
    A: () => c
});
var a = s(627968);
s(64700);
var i = s(172218),
    l = s(397927),
    r = s(437290),
    n = s(892448);

function c(e) {
    let {
        users: t,
        isUserSelected: s,
        onSelectionChange: c,
        isFetching: d,
        onFetchMore: o,
        isUserDisabled: u,
        searchQuery: m = "",
        emptySearchContent: x,
        className: f,
        tooltipConfig: _
    } = e, h = (0, i.K)(e => {
        e && !d && o?.()
    });
    return m.length > 0 && 0 === t.length && null != x ? (0, a.jsxs)("div", {
        className: n.t,
        children: [(0, a.jsx)(l.Heading, {
            variant: "heading-md/semibold",
            color: "text-strong",
            children: x.header
        }), (0, a.jsx)(l.Text, {
            variant: "text-md/medium",
            color: "text-subtle",
            children: x.body
        })]
    }) : (0, a.jsxs)(l.d_W, {
        className: f,
        children: [t.map(e => (0, a.jsx)(r.A, {
            user: e,
            checked: s(e),
            disabled: !!u?.(e),
            onChange: c,
            tooltipConfig: _
        }, e.id)), d && (0, a.jsx)(l.y$y, {}), (0, a.jsx)("div", {
            ref: h
        })]
    })
}