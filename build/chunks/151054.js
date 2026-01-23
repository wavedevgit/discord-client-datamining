/** Chunk was on 96758 **/
/** chunk id: 151054, original params: e,t,r (module,exports,require) **/
r.d(t, {
    R: () => h
}), r(896048), r(747238);
var n = r(64700),
    l = r(311907),
    s = r(142120),
    i = r(793322),
    u = r(999886),
    a = r(961350),
    c = r(205761),
    o = r(223863),
    d = r(146793),
    b = r(507696);

function f(e) {
    let {
        query: t,
        queryMode: r
    } = (0, i.LV)(e), n = b.D, l = null;
    return null != r && b.D.includes(r) && (n = [r], l = r), {
        query: t,
        queryMode: l,
        resultTypes: n
    }
}

function h(e) {
    let {
        targetDestination: t,
        selectedDestinations: r,
        originDestination: i,
        includeMissingDMs: b = !1
    } = e, h = (0, l.bG)([a.default], () => a.default.getId()), m = n.useMemo(() => ({
        searchOptions: {
            blacklist: new Set(["user:".concat(h)]),
            frecencyBoosters: !0,
            userFilters: null
        }
    }), [h]), {
        search: p,
        query: y,
        results: g
    } = (0, d.A)(m), [j, x] = n.useState(f("")), O = n.useCallback(e => x(f(e)), [x]), {
        queryMode: v
    } = j, A = n.useRef(null), L = n.useRef(r), P = y !== A.current ? r : L.current;
    n.useEffect(() => {
        y !== A.current && (L.current = r), A.current = y
    }, [y, r]), n.useLayoutEffect(() => {
        let {
            query: e,
            resultTypes: t
        } = j;
        p({
            query: e,
            resultTypes: t
        })
    }, [p, j]), (0, u.k)();
    let S = (0, l.bG)([c.A], () => c.A.getFrequentlyWithoutFetchingLatest()),
        N = (0, l.bG)([s.A], () => s.A.isConnected()),
        w = "" !== y;
    return {
        results: n.useMemo(() => (0, o.Ay)({
            results: g,
            hasQuery: w,
            queryMode: v,
            targetDestination: t,
            frequentChannels: S,
            selectedDestinations: r,
            pinnedDestinations: P,
            originDestination: i,
            includeMissingDMs: b,
            isConnected: N
        }), [g, w, v, t, S, r, P, i, b, N]),
        updateSearchText: O
    }
}