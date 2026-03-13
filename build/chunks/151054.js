/** chunk id: 151054 params = (module,exports,require) **/
s.d(t, {
    R: () => h
});
var i = s(64700),
    a = s(311907),
    l = s(142120),
    n = s(793322),
    r = s(999886),
    A = s(961350),
    u = s(205761),
    d = s(223863),
    _ = s(146793),
    c = s(507696);

function o(e) {
    let {
        query: t,
        queryMode: s
    } = (0, n.LV)(e), i = c.D, a = null;
    return null != s && c.D.includes(s) && (i = [s], a = s), {
        query: t,
        queryMode: a,
        resultTypes: i
    }
}

function h(e) {
    let {
        targetDestination: t,
        selectedDestinations: s,
        originDestination: n,
        channelFilter: c,
        includeMissingDMs: h = !1
    } = e, I = (0, a.bG)([A.default], () => A.default.getId()), L = i.useMemo(() => ({
        searchOptions: {
            blacklist: new Set([`user:${I}`]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [I]), {
        search: E,
        query: N,
        results: C
    } = (0, _.A)(L), [P, m] = i.useState(o("")), b = i.useCallback(e => m(o(e)), [m]), {
        queryMode: f
    } = P, g = i.useRef(null), x = i.useRef(s), D = N !== g.current ? s : x.current;
    i.useEffect(() => {
        N !== g.current && (x.current = s), g.current = N
    }, [N, s]), i.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = P;
        E({
            query: e,
            resultTypes: t
        })
    }, [E, P]), (0, r.k)();
    let G = (0, a.bG)([u.A], () => u.A.getFrequentlyWithoutFetchingLatest()),
        p = (0, a.bG)([l.A], () => l.A.isConnected()),
        T = "" !== N;
    return {
        results: i.useMemo(() => (0, d.Ay)({
            results: C,
            hasQuery: T,
            queryMode: f,
            targetDestination: t,
            frequentChannels: G,
            selectedDestinations: s,
            pinnedDestinations: D,
            originDestination: n,
            channelFilter: c,
            includeMissingDMs: h,
            isConnected: p
        }), [C, T, f, t, G, s, D, n, c, h, p]),
        updateSearchText: b
    }
}