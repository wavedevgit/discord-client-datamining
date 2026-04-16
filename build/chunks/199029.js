/** chunk id: 199029 params = (module,exports,require) **/
a.d(t, {
    o: () => c
});
var n = a(627968),
    r = a(64700),
    l = a(77555),
    s = a(151054),
    o = a(457417),
    i = a(305604);
let c = () => {
    let {
        selectedDestinations: e,
        maxDestinations: t,
        searchText: a,
        message: c,
        channel: u,
        updateSelectShareDestinations: d
    } = (0, o.Vw)(), {
        results: _,
        updateSearchText: h
    } = (0, s.R)({
        selectedDestinations: e,
        includeMissingDMs: !0
    });
    (0, r.useEffect)(() => {
        h(a)
    }, [h, a]);
    let p = (0, r.useCallback)(t => {
            let a = e.findIndex(e => {
                let {
                    type: a,
                    id: n
                } = e;
                return a === t.type && n === t.id
            });
            if (-1 !== a) {
                let t = [...e];
                t.splice(a, 1), d(t);
                return
            }
            d([...e, t])
        }, [e, d]),
        f = e.length >= t;
    return (0, n.jsx)(l.z, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: _,
        message: c,
        originChannel: u,
        handleToggleDestination: p,
        selectedDestinations: e,
        disableSelection: f,
        rowClassName: i.q
    })
}