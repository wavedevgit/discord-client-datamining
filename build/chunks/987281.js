/** chunk id: 987281 params = (module,exports,require) **/
n.d(t, {
    V: () => _,
    a: () => u
});
var i = n(64700),
    s = n(964486),
    l = n(839214),
    a = n(324593),
    r = n(535762),
    o = n(152056),
    d = n(360619),
    c = n(531525);
let u = (0, l.D)(() => ({
    searchResults: c.R,
    hasSearchResults: !1
}));

function _() {
    let e = o.A.useField("query"),
        t = (0, d.PH)(),
        n = i.useRef(new r.A((0, d.NI)(t))),
        l = i.useCallback(async e => {
            let t = await n.current.search(e.trim());
            u.setState({
                searchResults: t,
                hasSearchResults: !0
            })
        }, []);
    i.useEffect(() => {
        "" === e || e.length < 2 ? u.resetState() : (l(e), a.A.maybeTrackQueryEntered())
    }, [e, l]), (0, s.Ay)(() => () => {
        u.resetState(), o.A.setState({
            query: ""
        }), a.A.terminate()
    });
    let c = u.useField("searchResults");
    return {
        hasSearchResults: u.useField("hasSearchResults"),
        searchResults: c
    }
}