/** chunk id: 761546 params = (module,exports,require) **/
s.d(t, {
    A: () => d
});
var a = s(627968);
s(64700);
var i = s(172218),
    l = s(397927),
    r = s(437290),
    n = s(255730);

function d(e) {
    let {
        users: t,
        isUserSelected: s,
        onSelectionChange: d,
        isFetching: c,
        onFetchMore: u,
        isUserDisabled: o,
        searchQuery: m = "",
        emptySearchContent: x,
        className: f,
        tooltipConfig: _
    } = e, h = (0, i.K)(e => {
        e && !c && u?.()
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
            disabled: !!o?.(e),
            onChange: d,
            tooltipConfig: _
        }, e.id)), c && (0, a.jsx)(l.y$y, {}), (0, a.jsx)("div", {
            ref: h
        })]
    })
}