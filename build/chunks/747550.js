/** chunk id: 747550 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(449054),
    a = n(417426),
    r = n(823448),
    l = n(351022),
    s = n(282026);
class o {}
let d = new class extends o {
    loadMoreCategoryResults = async e => {
        let {
            query: t,
            categoryId: n,
            languageCode: r,
            offset: s
        } = e;
        l.A.getIsFetching({
            query: t,
            categoryId: n,
            languageCode: r
        }) || l.A.getIsInitialFetchComplete({
            query: t,
            categoryId: n,
            languageCode: r
        }) && (i.br({
            withCounts: !1,
            offset: s
        }), await a.A.fetchSearchResults(t, {
            categoryId: n,
            languageCode: r,
            offset: s,
            limit: 12,
            withCounts: !1
        }))
    };
    loadCategoryResults = async e => {
        let {
            query: t,
            categoryId: n,
            languageCode: r
        } = e, s = l.A.getIsFetching({
            query: t,
            categoryId: n,
            languageCode: r
        }), o = l.A.getIsInitialFetchComplete({
            query: t,
            categoryId: n,
            languageCode: r
        });
        s || o || (i.br({
            withCounts: !1,
            offset: 0
        }), await a.A.fetchSearchResults(t, {
            categoryId: n,
            languageCode: r,
            offset: 0,
            limit: 12,
            withCounts: !1
        }))
    };
    loadCategoryResultsAndCounts = async e => {
        let {
            query: t,
            loadId: n,
            categoryId: l,
            languageCode: o
        } = e;
        if ("" === t.trim()) return;
        let d = r.A.getIsFetchingCounts(t),
            c = r.A.getIsFetchingCounts(t);
        d || c || (s.A.setState({
            fetchedQuery: t,
            resultsQuery: ""
        }), i.fd(n, l), i.br({
            withCounts: !0,
            offset: 0
        }), await a.A.fetchSearchResults(t, {
            categoryId: l,
            languageCode: o,
            offset: 0,
            limit: 12,
            withCounts: !0
        }), s.A.setState({
            resultsQuery: t
        }))
    }
}