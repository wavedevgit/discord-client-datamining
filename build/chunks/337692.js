/** chunk id: 337692, original params: e,t,n (module,exports,require) **/
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
    let [m] = i.useState(() => new l.A(g, n, void 0, r));
    return i.useEffect(() => {
        t ? (o?.(m), m.createSearchContext()) : (m.clean(), c(""))
    }, [t, m, o]), {
        queryResults: u,
        query: d,
        updateQuery: i.useCallback(e => {
            c(e), m.search(e)
        }, [m])
    }
}