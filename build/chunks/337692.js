/** chunk id: 337692 params = (module,exports,require) **/
n.d(t, {
    A: () => a
});
var i = n(64700),
    s = n(77509),
    l = n(128747);
let r = [];

function a(e) {
    let {
        visible: t,
        autocompleterResultTypes: n,
        autocompleterOptions: a,
        autocompleterBeforeCreateSearchContext: o
    } = e, [d, c] = i.useState(""), [u, _] = i.useState(r), m = i.useCallback((e, t) => {
        "" === (t = t.trim()).trim() ? _(r) : _(e)
    }, []);
    i.useEffect(() => s.A.addRouteChangeListener(() => {
        c("")
    }), []);
    let [g] = i.useState(() => new l.A(m, n, void 0, a));
    return i.useEffect(() => {
        t ? (o?.(g), g.createSearchContext()) : (g.clean(), c(""))
    }, [t, g, o]), {
        queryResults: u,
        query: d,
        updateQuery: i.useCallback(e => {
            c(e), g.search(e)
        }, [g])
    }
}