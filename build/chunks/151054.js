/** chunk id: 151054, original params: e,t,r (module,exports,require) **/
r.d(t, {
    R: () => b
}), r(896048), r(747238);
var n = r(64700),
    l = r(311907),
    s = r(142120),
    i = r(793322),
    a = r(999886),
    u = r(961350),
    o = r(205761),
    c = r(223863),
    A = r(146793),
    f = r(507696);

function h(e) {
    let {
        query: t,
        queryMode: r
    } = (0, i.LV)(e), n = f.D, l = null;
    return null != r && f.D.includes(r) && (n = [r], l = r), {
        query: t,
        queryMode: l,
        resultTypes: n
    }
}

function b(e) {
    let {
        targetDestination: t,
        selectedDestinations: r,
        originDestination: i,
        includeMissingDMs: f = !1
    } = e, b = (0, l.bG)([u.default], () => u.default.getId()), d = n.useMemo(() => ({
        searchOptions: {
            blacklist: new Set(["user:".concat(b)]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [b]), {
        search: _,
        query: p,
        results: y
    } = (0, A.A)(d), [O, E] = n.useState(h("")), I = n.useCallback(e => E(h(e)), [E]), {
        queryMode: L
    } = O, g = n.useRef(null), m = n.useRef(r), P = p !== g.current ? r : m.current;
    n.useEffect(() => {
        p !== g.current && (m.current = r), g.current = p
    }, [p, r]), n.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = O;
        _({
            query: e,
            resultTypes: t
        })
    }, [_, O]), (0, a.k)();
    let N = (0, l.bG)([o.A], () => o.A.getFrequentlyWithoutFetchingLatest()),
        j = (0, l.bG)([s.A], () => s.A.isConnected()),
        C = "" !== p;
    return {
        results: n.useMemo(() => (0, c.Ay)({
            results: y,
            hasQuery: C,
            queryMode: L,
            targetDestination: t,
            frequentChannels: N,
            selectedDestinations: r,
            pinnedDestinations: P,
            originDestination: i,
            includeMissingDMs: f,
            isConnected: j
        }), [y, C, L, t, N, r, P, i, f, j]),
        updateSearchText: I
    }
}