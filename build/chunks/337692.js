/** chunk id: 337692, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(64700),
    s = n(77509),
    a = n(128747);
let l = [];

function r(e) {
    let {
        visible: t,
        autocompleterResultTypes: n,
        autocompleterOptions: r,
        autocompleterBeforeCreateSearchContext: o
    } = e, [c, d] = i.useState(""), [u, _] = i.useState(l), m = i.useCallback((e, t) => {
        "" === (t = t.trim()).trim() ? _(l) : _(e)
    }, []);
    i.useEffect(() => s.A.addRouteChangeListener(() => {
        d("")
    }), []);
    let [A] = i.useState(() => new a.A(m, n, void 0, r));
    return i.useEffect(() => {
        t ? (o?.(A), A.createSearchContext()) : (A.clean(), d(""))
    }, [t, A, o]), {
        queryResults: u,
        query: c,
        updateQuery: i.useCallback(e => {
            d(e), A.search(e)
        }, [A])
    }
}