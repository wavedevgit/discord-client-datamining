/** Chunk was on 96811 **/
/** chunk id: 146793, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => s
}), r(896048), r(747238), r(733351);
var n = r(64700),
    i = r(444927),
    l = r(629357);

function s(e) {
    let {
        searchOptions: t
    } = e, [r, s] = n.useState({
        results: [],
        query: ""
    }), a = (0, i.A)(() => {
        let e = new l.Ay((e, t) => {
            s({
                results: e,
                query: t
            })
        });
        return e.setLimit(20), e.search(""), e
    });
    return n.useEffect(() => () => a.destroy(), [a]), n.useEffect(() => {
            null != t && t !== a.options && a.setOptions(t)
        }, [a, t]),
        function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = null != arguments[t] ? arguments[t] : {},
                    n = Object.keys(r);
                "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable
                }))), n.forEach(function(t) {
                    var n;
                    n = r[t], t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n
                })
            }
            return e
        }({
            search: n.useCallback(e => {
                var t;
                let {
                    query: r,
                    resultTypes: n
                } = e;
                null != a.resultTypes && (t = a.resultTypes, n.length === t.size && n.every(e => t.has(e))) || (a.setResultTypes(n), a.setLimit(1 === n.length ? 50 : 20)), a.search("" === r.trim() ? "" : r)
            }, [a])
        }, r)
}