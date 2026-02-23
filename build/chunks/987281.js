/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => u,
    a: () => d
});
var i = n(64700),
    s = n(964486),
    a = n(839214),
    r = n(535762),
    l = n(152056),
    o = n(360619),
    c = n(531525);
let d = (0, a.D)(() => ({
    searchResults: c.R,
    hasSearchResults: !1
}));

function u() {
    let e = l.A.useField("query"),
        t = (0, o.PH)(),
        n = i.useRef(new r.A((0, o.NI)(t))),
        a = i.useCallback(async e => {
            let t = await n.current.search(e.trim());
            d.setState({
                searchResults: t,
                hasSearchResults: !0
            })
        }, []);
    i.useEffect(() => {
        "" === e || e.length < 2 ? d.resetState() : a(e)
    }, [e, a]), (0, s.Ay)(() => () => {
        d.resetState(), l.A.setState({
            query: ""
        })
    });
    let c = d.useField("searchResults");
    return {
        hasSearchResults: d.useField("hasSearchResults"),
        searchResults: c
    }
}