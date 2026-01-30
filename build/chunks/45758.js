/** chunk id: 45758, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var l = n(503698),
    i = n.n(l),
    a = n(397927),
    s = n(650964);
let o = function(e) {
    let {
        tabs: t,
        onTabSelect: n,
        selectedTab: l,
        className: o
    } = e;
    return (0, r.jsx)(a.VQ0, {
        type: "top-pill",
        selectedItem: l,
        onItemSelect: n,
        className: o,
        children: t.map((e, t) => {
            let {
                id: n,
                label: l,
                count: o
            } = e;
            return (0, r.jsx)(a.VQ0.Item, {
                id: n,
                className: i()(s.V, {
                    [s.r]: 0 === t
                }),
                "aria-label": l,
                children: null != o && o > 0 ? "".concat(l, " (").concat(o, ")") : l
            }, n)
        })
    })
}