/** chunk id: 337692 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    s = n(77509),
    l = n(128747);
let a = [];

function r(e) {
    let {
        visible: t,
        autocompleterResultTypes: n,
        autocompleterOptions: r,
        autocompleterBeforeCreateSearchContext: o
    } = e, [d, c] = i.useState(""), [u, _] = i.useState(a), g = i.useCallback((e, t) => {
        "" === (t = t.trim()).trim() ? _(a) : _(e)
    }, []);
    i.useEffect(() => s.A.addRouteChangeListener(() => {
        c("")
    }), []);
    let [A] = i.useState(() => new l.A(g, n, void 0, r));
    return i.useEffect(() => {
        t ? (o?.(A), A.createSearchContext()) : (A.clean(), c(""))
    }, [t, A, o]), {
        queryResults: u,
        query: d,
        updateQuery: i.useCallback(e => {
            c(e), A.search(e)
        }, [A])
    }
}