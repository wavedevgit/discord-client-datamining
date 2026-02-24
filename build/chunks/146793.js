/** chunk id: 146793, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => l
});
var s = r(64700),
    i = r(444927),
    n = r(629357);

function l(e) {
    let {
        searchOptions: t
    } = e, [r, l] = s.useState({
        results: [],
        query: ""
    }), a = (0, i.A)(() => {
        let e = new n.Ay((e, t) => {
            l({
                results: e,
                query: t
            })
        });
        return e.setLimit(20), e.search(""), e
    });
    return s.useEffect(() => () => a.destroy(), [a]), s.useEffect(() => {
        null != t && t !== a.options && a.setOptions(t)
    }, [a, t]), {
        search: s.useCallback(e => {
            var t;
            let {
                query: r,
                resultTypes: s
            } = e;
            null != a.resultTypes && (t = a.resultTypes, s.length === t.size && s.every(e => t.has(e))) || (a.setResultTypes(s), a.setLimit(1 === s.length ? 50 : 20)), a.search("" === r.trim() ? "" : r)
        }, [a]),
        ...r
    }
}