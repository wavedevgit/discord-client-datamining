/** chunk id: 151054, original params: e,t,s (module,exports,require) **/
s.d(t, {
    R: () => I
});
var l = s(64700),
    i = s(311907),
    a = s(142120),
    n = s(793322),
    r = s(999886),
    A = s(961350),
    u = s(205761),
    _ = s(223863),
    c = s(146793),
    h = s(507696);

function d(e) {
    let {
        query: t,
        queryMode: s
    } = (0, n.LV)(e), l = h.D, i = null;
    return null != s && h.D.includes(s) && (l = [s], i = s), {
        query: t,
        queryMode: i,
        resultTypes: l
    }
}

function I(e) {
    let {
        targetDestination: t,
        selectedDestinations: s,
        originDestination: n,
        channelFilter: h,
        includeMissingDMs: I = !1
    } = e, o = (0, i.bG)([A.default], () => A.default.getId()), L = l.useMemo(() => ({
        searchOptions: {
            blacklist: new Set([`user:${o}`]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [o]), {
        search: E,
        query: N,
        results: C
    } = (0, c.A)(L), [f, g] = l.useState(d("")), b = l.useCallback(e => g(d(e)), [g]), {
        queryMode: P
    } = f, m = l.useRef(null), x = l.useRef(s), G = N !== m.current ? s : x.current;
    l.useEffect(() => {
        N !== m.current && (x.current = s), m.current = N
    }, [N, s]), l.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = f;
        E({
            query: e,
            resultTypes: t
        })
    }, [E, f]), (0, r.k)();
    let D = (0, i.bG)([u.A], () => u.A.getFrequentlyWithoutFetchingLatest()),
        T = (0, i.bG)([a.A], () => a.A.isConnected()),
        S = "" !== N;
    return {
        results: l.useMemo(() => (0, _.Ay)({
            results: C,
            hasQuery: S,
            queryMode: P,
            targetDestination: t,
            frequentChannels: D,
            selectedDestinations: s,
            pinnedDestinations: G,
            originDestination: n,
            channelFilter: h,
            includeMissingDMs: I,
            isConnected: T
        }), [C, S, P, t, D, s, G, n, h, I, T]),
        updateSearchText: b
    }
}