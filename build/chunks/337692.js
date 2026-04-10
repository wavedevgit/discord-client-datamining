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
    } = e, [d, c] = i.useState(""), [u, m] = i.useState(r), g = i.useCallback((e, t) => {
        "" === (t = t.trim()).trim() ? m(r) : m(e)
    }, []);
    i.useEffect(() => s.A.addRouteChangeListener(() => {
        c("")
    }), []);
    let [_] = i.useState(() => new l.A(g, n, void 0, a));
    return i.useEffect(() => {
        t ? (o?.(_), _.createSearchContext()) : (_.clean(), c(""))
    }, [t, _, o]), {
        queryResults: u,
        query: d,
        updateQuery: i.useCallback(e => {
            c(e), _.search(e)
        }, [_])
    }
}