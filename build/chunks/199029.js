/** Chunk was on 15646 **/
/** chunk id: 199029, original params: e,t,r (module,exports,require) **/
r.d(t, {
    o: () => c
}), r(896048);
var n = r(627968),
    l = r(64700),
    a = r(77555),
    o = r(151054),
    s = r(457417),
    i = r(848193);
let c = () => {
    let {
        selectedDestinations: e,
        maxDestinations: t,
        searchText: r,
        message: c,
        channel: u,
        updateSelectShareDestinations: d
    } = (0, s.Vw)(), {
        results: f,
        updateSearchText: b
    } = (0, o.R)({
        selectedDestinations: e,
        includeMissingDMs: !0
    });
    (0, l.useEffect)(() => {
        b(r)
    }, [b, r]);
    let p = (0, l.useCallback)(t => {
            let r = e.findIndex(e => {
                let {
                    type: r,
                    id: n
                } = e;
                return r === t.type && n === t.id
            });
            if (-1 !== r) {
                let t = [...e];
                t.splice(r, 1), d(t);
                return
            }
            d([...e, t])
        }, [e, d]),
        g = e.length >= t;
    return (0, n.jsx)(a.z, {
        paddingBottom: 16,
        paddingTop: 16,
        rowData: f,
        message: c,
        originChannel: u,
        handleToggleDestination: p,
        selectedDestinations: e,
        disableSelection: g,
        rowClassName: i.q
    })
}