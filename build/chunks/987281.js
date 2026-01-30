/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => u,
    a: () => d
}), n(747238), n(733351);
var r = n(64700),
    i = n(964486),
    l = n(839214),
    s = n(535762),
    a = n(152056),
    o = n(360619),
    c = n(531525);
let d = (0, l.D)(() => ({
    searchResults: c.R,
    hasSearchResults: !1
}));

function u() {
    let e = a.A.useField("query"),
        t = (0, o.PH)(),
        n = r.useRef(new s.A((0, o.NI)(t))),
        l = r.useCallback(async e => {
            let t = await n.current.search(e.trim());
            d.setState({
                searchResults: t,
                hasSearchResults: !0
            })
        }, []);
    r.useEffect(() => {
        "" === e || e.length < 2 ? d.resetState() : l(e)
    }, [e, l]), (0, i.Ay)(() => () => {
        d.resetState(), a.A.setState({
            query: ""
        })
    });
    let c = d.useField("searchResults");
    return {
        hasSearchResults: d.useField("hasSearchResults"),
        searchResults: c
    }
}