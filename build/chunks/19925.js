/** chunk id: 19925 params = (module,exports,require) **/
n.d(t, {
    I: () => h,
    X: () => _
});
var i = n(64700),
    l = n(311907),
    r = n(449054),
    a = n(417426),
    s = n(747550),
    o = n(351022),
    d = n(282026),
    c = n(460760),
    u = n(601193),
    A = n(324580);

function h(e) {
    let {
        loadId: t
    } = e, n = d.A.useField("fetchedQuery"), r = d.A.useField("categoryId"), a = d.A.useField("languageCode"), c = i.useMemo(() => ({
        categoryId: r,
        query: n,
        languageCode: a
    }), [r, a, n]), u = (0, l.bG)([o.A], () => o.A.getGuildIds(c) ?? A.VX), h = (0, l.bG)([o.A], () => o.A.getIsFetching(c) ?? !1), _ = d.A.useField("resultsQuery"), m = _ !== n, g = i.useCallback(() => {
        let e = o.A.getGuildIds(c),
            n = o.A.getTotal(c);
        if (null == e || null == n) return;
        let i = o.A.getIsFetching(c),
            l = o.A.getIsInitialFetchComplete(c);
        i || !l || e.length >= n || s.A.loadMoreCategoryResults({
            loadId: t,
            offset: e.length,
            categoryId: d.A.getField("categoryId"),
            query: d.A.getField("fetchedQuery"),
            languageCode: d.A.getField("languageCode")
        })
    }, [t, c]);
    return i.useMemo(() => ({
        guildIds: u,
        loading: m || h,
        searchResultsQuery: _,
        loadMore: g,
        searchCategoryId: r
    }), [u, m, h, _, g, r])
}

function _(e) {
    let {
        loadId: t
    } = e, n = u.A.useField("isSearchVisible"), l = d.A.useField("query");
    i.useEffect(() => {
        (0, c.Mu)()
    }, []);
    let o = i.useCallback(e => {
        d.A.setState({
            query: e
        })
    }, []);
    return {
        searchQuery: l,
        onSearchTextChange: o,
        onClearSearch: i.useCallback(() => {
            r.gp(t), a.A.clearSearchResults(), a.A.resetSearchLayout(), d.A.setState({
                query: "",
                fetchedQuery: "",
                resultsQuery: "",
                categoryId: A.Iq,
                resultsInitialCategoryId: null,
                scrollPosition: null
            }), u.A.setState({
                isSearchVisible: !1
            })
        }, [t]),
        onSearchSubmit: i.useCallback(() => {
            let e = d.A.getField("query"),
                n = d.A.getField("fetchedQuery");
            if ("" === e.trim() || e === n) return;
            a.A.clearSearchResults();
            let i = d.A.getField("languageCode"),
                l = d.A.getField("categoryId");
            d.A.setState({
                resultsInitialCategoryId: l
            }), u.A.setState({
                isSearchVisible: !0
            }), s.A.loadCategoryResultsAndCounts({
                loadId: t,
                categoryId: l,
                query: e,
                languageCode: i
            })
        }, [t]),
        isSearchVisible: n
    }
}