/** chunk id: 151054 params = (module,exports,require) **/
s.d(t, {
    R: () => f
});
var i = s(64700),
    l = s(311907),
    n = s(142120),
    a = s(793322),
    r = s(999886),
    u = s(961350),
    d = s(205761),
    o = s(223863),
    c = s(146793),
    m = s(507696);

function h(e) {
    let {
        query: t,
        queryMode: s
    } = (0, a.LV)(e), i = m.D, l = null;
    return null != s && m.D.includes(s) && (i = [s], l = s), {
        query: t,
        queryMode: l,
        resultTypes: i
    }
}

function f(e) {
    let {
        targetDestination: t,
        selectedDestinations: s,
        originDestination: a,
        channelFilter: m,
        includeMissingDMs: f = !1
    } = e, b = (0, l.bG)([u.default], () => u.default.getId()), x = i.useMemo(() => ({
        searchOptions: {
            blacklist: new Set([`user:${b}`]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [b]), {
        search: A,
        query: g,
        results: p
    } = (0, c.A)(x), [v, N] = i.useState(h("")), L = i.useCallback(e => N(h(e)), [N]), {
        queryMode: j
    } = v, y = i.useRef(null), P = i.useRef(s), T = g !== y.current ? s : P.current;
    i.useEffect(() => {
        g !== y.current && (P.current = s), y.current = g
    }, [g, s]), i.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = v;
        A({
            query: e,
            resultTypes: t
        })
    }, [A, v]), (0, r.k)();
    let D = (0, l.bG)([d.A], () => d.A.getFrequentlyWithoutFetchingLatest()),
        _ = (0, l.bG)([n.A], () => n.A.isConnected()),
        E = "" !== g;
    return {
        results: i.useMemo(() => (0, o.Ay)({
            results: p,
            hasQuery: E,
            queryMode: j,
            targetDestination: t,
            frequentChannels: D,
            selectedDestinations: s,
            pinnedDestinations: T,
            originDestination: a,
            channelFilter: m,
            includeMissingDMs: f,
            isConnected: _
        }), [p, E, j, t, D, s, T, a, m, f, _]),
        updateSearchText: L
    }
}