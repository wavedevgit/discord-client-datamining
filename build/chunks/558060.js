/** chunk id: 558060 params = (module,exports,require) **/
i.d(e, {
    R: () => o,
    default: () => c
});
var s = i(627968),
    r = i(64700),
    n = i(284009),
    l = i.n(n),
    d = i(284683);
let a = r.createContext(void 0);

function o() {
    let t = r.useContext(a);
    return l()(null != t, "must use useGuildShopSortContext within a GuildShopSortOptionsContextProvider"), t
}

function c(t) {
    let {
        children: e,
        defaultSortOption: i = d.p$.NEWEST_ARRIVALS
    } = t, [n, l] = r.useState(i);
    return (0, s.jsx)(a.Provider, {
        value: {
            sortOption: n,
            setSortOption: l,
            onReset: () => l(i)
        },
        children: e
    })
}