/** chunk id: 157561, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => d
});
var r = n(64700),
    l = n(416730),
    i = n(620140),
    a = n(412461),
    s = n(310419),
    o = n(656106),
    c = n(652215);

function d(e) {
    let {
        initialQuery: t = ""
    } = e, n = l.A.useField("query");
    r.useEffect(() => l.A.setState({
        query: t
    }), [t]);
    let d = r.useCallback(e => {
            l.A.setState({
                query: e
            })
        }, []),
        u = r.useCallback(() => {
            l.A.setState({
                query: ""
            })
        }, []),
        p = r.useCallback(() => {
            let e = (0, i.A)();
            (0, a.TR)(c.HAw.APP_DIRECTORY_SEARCH_STARTED, {
                search_term: n,
                category: e.name,
                current_page: s.ev.HOME,
                category_id: e.id
            }), (0, o.JX)({
                query: n
            })
        }, [n]);
    return {
        searchQuery: n,
        onSearchTextChange: d,
        onClearSearch: u,
        onSearchSubmit: p
    }
}