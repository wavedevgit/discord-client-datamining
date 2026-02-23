/** chunk id: 747550, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(449054),
    r = n(417426),
    l = n(823448),
    a = n(351022),
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
        a.A.getIsFetching({
            query: t,
            categoryId: n,
            languageCode: l
        }) || a.A.getIsInitialFetchComplete({
            query: t,
            categoryId: n,
            languageCode: l
        }) && (i.br({
            withCounts: !1,
            offset: s
        }), await r.A.fetchSearchResults(t, {
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
        } = e, s = a.A.getIsFetching({
            query: t,
            categoryId: n,
            languageCode: l
        }), o = a.A.getIsInitialFetchComplete({
            query: t,
            categoryId: n,
            languageCode: l
        });
        s || o || (i.br({
            withCounts: !1,
            offset: 0
        }), await r.A.fetchSearchResults(t, {
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
            categoryId: a,
            languageCode: o
        } = e;
        if ("" === t.trim()) return;
        let d = l.A.getIsFetchingCounts(t),
            c = l.A.getIsFetchingCounts(t);
        d || c || (s.A.setState({
            fetchedQuery: t,
            resultsQuery: ""
        }), i.fd(n, a), i.br({
            withCounts: !0,
            offset: 0
        }), await r.A.fetchSearchResults(t, {
            categoryId: a,
            languageCode: o,
            offset: 0,
            limit: 12,
            withCounts: !0
        }), s.A.setState({
            resultsQuery: t
        }))
    }
}