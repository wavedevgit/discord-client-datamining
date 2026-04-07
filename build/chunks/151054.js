/** chunk id: 151054 params = (module,exports,require) **/
l.d(t, {
    R: () => g
});
var n = l(64700),
    s = l(311907),
    r = l(142120),
    i = l(793322),
    a = l(999886),
    u = l(961350),
    c = l(205761),
    d = l(223863),
    o = l(146793),
    h = l(507696);

function f(e) {
    let {
        query: t,
        queryMode: l
    } = (0, i.LV)(e), n = h.D, s = null;
    return null != l && h.D.includes(l) && (n = [l], s = l), {
        query: t,
        queryMode: s,
        resultTypes: n
    }
}

function g(e) {
    let {
        targetDestination: t,
        selectedDestinations: l,
        originDestination: i,
        channelFilter: h,
        includeMissingDMs: g = !1
    } = e, x = (0, s.bG)([u.default], () => u.default.getId()), m = n.useMemo(() => ({
        searchOptions: {
            blacklist: new Set([`user:${x}`]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [x]), {
        search: p,
        query: _,
        results: b
    } = (0, o.A)(m), [A, y] = n.useState(f("")), C = n.useCallback(e => y(f(e)), [y]), {
        queryMode: v
    } = A, j = n.useRef(null), k = n.useRef(l), D = _ !== j.current ? l : k.current;
    n.useEffect(() => {
        _ !== j.current && (k.current = l), j.current = _
    }, [_, l]), n.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = A;
        p({
            query: e,
            resultTypes: t
        })
    }, [p, A]), (0, a.k)();
    let L = (0, s.bG)([c.A], () => c.A.getFrequentlyWithoutFetchingLatest()),
        M = (0, s.bG)([r.A], () => r.A.isConnected()),
        S = "" !== _;
    return {
        results: n.useMemo(() => (0, d.Ay)({
            results: b,
            hasQuery: S,
            queryMode: v,
            targetDestination: t,
            frequentChannels: L,
            selectedDestinations: l,
            pinnedDestinations: D,
            originDestination: i,
            channelFilter: h,
            includeMissingDMs: g,
            isConnected: M
        }), [b, S, v, t, L, l, D, i, h, g, M]),
        updateSearchText: C
    }
}