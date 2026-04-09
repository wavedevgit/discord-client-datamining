/** chunk id: 747550 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(449054),
    a = n(417426),
    l = n(823448),
    r = n(351022),
    s = n(282026);
class o {}
let d = new class extends o {
    loadMoreCategoryResults = async e => {
        let {
            query: t,
            categoryId: n,
            languageCode: l,
            offset: s
        } = e;
        r.A.getIsFetching({
            query: t,
            categoryId: n,
            languageCode: l
        }) || r.A.getIsInitialFetchComplete({
            query: t,
            categoryId: n,
            languageCode: l
        }) && (i.br({
            withCounts: !1,
            offset: s
        }), await a.A.fetchSearchResults(t, {
            categoryId: n,
            languageCode: l,
            offset: s,
            limit: 12,
            withCounts: !1
        }))
    };
    loadCategoryResults = async e => {
        let {
            query: t,
            categoryId: n,
            languageCode: l
        } = e, s = r.A.getIsFetching({
            query: t,
            categoryId: n,
            languageCode: l
        }), o = r.A.getIsInitialFetchComplete({
            query: t,
            categoryId: n,
            languageCode: l
        });
        s || o || (i.br({
            withCounts: !1,
            offset: 0
        }), await a.A.fetchSearchResults(t, {
            categoryId: n,
            languageCode: l,
            offset: 0,
            limit: 12,
            withCounts: !1
        }))
    };
    loadCategoryResultsAndCounts = async e => {
        let {
            query: t,
            loadId: n,
            categoryId: r,
            languageCode: o
        } = e;
        if ("" === t.trim()) return;
        let d = l.A.getIsFetchingCounts(t),
            c = l.A.getIsFetchingCounts(t);
        d || c || (s.A.setState({
            fetchedQuery: t,
            resultsQuery: ""
        }), i.fd(n, r), i.br({
            withCounts: !0,
            offset: 0
        }), await a.A.fetchSearchResults(t, {
            categoryId: r,
            languageCode: o,
            offset: 0,
            limit: 12,
            withCounts: !0
        }), s.A.setState({
            resultsQuery: t
        }))
    }
}