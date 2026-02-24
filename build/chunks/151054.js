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
        includeMissingDMs: h = !1
    } = e, I = (0, i.bG)([A.default], () => A.default.getId()), o = l.useMemo(() => ({
        searchOptions: {
            blacklist: new Set([`user:${I}`]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [I]), {
        search: L,
        query: E,
        results: N
    } = (0, c.A)(o), [C, f] = l.useState(d("")), g = l.useCallback(e => f(d(e)), [f]), {
        queryMode: b
    } = C, P = l.useRef(null), m = l.useRef(s), x = E !== P.current ? s : m.current;
    l.useEffect(() => {
        E !== P.current && (m.current = s), P.current = E
    }, [E, s]), l.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = C;
        L({
            query: e,
            resultTypes: t
        })
    }, [L, C]), (0, r.k)();
    let G = (0, i.bG)([u.A], () => u.A.getFrequentlyWithoutFetchingLatest()),
        D = (0, i.bG)([a.A], () => a.A.isConnected()),
        T = "" !== E;
    return {
        results: l.useMemo(() => (0, _.Ay)({
            results: N,
            hasQuery: T,
            queryMode: b,
            targetDestination: t,
            frequentChannels: G,
            selectedDestinations: s,
            pinnedDestinations: x,
            originDestination: n,
            includeMissingDMs: h,
            isConnected: D
        }), [N, T, b, t, G, s, x, n, h, D]),
        updateSearchText: g
    }
}