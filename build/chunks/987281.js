/** Chunk was on 77870 **/
/** chunk id: 987281, original params: e,t,n (module,exports,require) **/
n.d(t, {
    V: () => d,
    a: () => u
}), n(747238), n(733351);
var r = n(64700),
    l = n(964486),
    i = n(839214),
    s = n(535762),
    a = n(152056),
    o = n(360619),
    c = n(531525);
let u = (0, i.D)(() => ({
    searchResults: c.R,
    hasSearchResults: !1
}));

function d() {
    let e = a.A.useField("query"),
        t = (0, o.PH)(),
        n = r.useRef(new s.A((0, o.NI)(t))),
        i = r.useCallback(async e => {
            let t = await n.current.search(e.trim());
            u.setState({
                searchResults: t,
                hasSearchResults: !0
            })
        }, []);
    r.useEffect(() => {
        "" === e || e.length < 2 ? u.resetState() : i(e)
    }, [e, i]), (0, l.Ay)(() => () => {
        u.resetState(), a.A.setState({
            query: ""
        })
    });
    let c = u.useField("searchResults");
    return {
        hasSearchResults: u.useField("hasSearchResults"),
        searchResults: c
    }
}