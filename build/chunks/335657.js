/** chunk id: 335657, original params: e,t,n (module,exports,require) **/
n.d(t, {
    y: () => A
});
var i = n(64700),
    r = n(635358),
    l = n(311907),
    a = n(49463),
    s = n(979286),
    o = n(590180),
    d = n(295811),
    c = n(233525),
    u = n(766201);

function A(e, t, n) {
    let A = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        h = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments);
    (0, c.n)("useMaybeFetchCollectiblesShopHome");
    let _ = r.g.VARIANTS_GROUP,
        m = (0, l.bG)([o.A], () => o.A.skipNumCategories),
        [g, p, E, I, f, C, T, N] = (0, l.yK)([d.A], () => [d.A.getShopBlocks(e), d.A.getLastSuccessfulFetch(e) ?? 0, d.A.getLastErrorTimestamp(e) ?? 0, d.A.getLastFetchOptions(e), d.A.getFetchShopHomeError(e), d.A.getIsFetchingShopHome(e), d.A.getHasKnownStaleData(e), d.A.getShopHomeConfigOverride()]),
        S = (0, i.useMemo)(() => ({
            ...t,
            variantsReturnStyle: _,
            includeDynamicBlocks: !0,
            shopHomeConfig: N,
            skipNumCategories: m
        }), [t, N, m, _]),
        x = (0, i.useMemo)(() => !(0, s.gn)(I, S), [I, S]),
        v = (0, u.n)(g, C ?? !1, A),
        y = (0, i.useMemo)(() => !v && Date.now() - p < 6e5, [p, v]);
    return (0, i.useEffect)(() => {
        if (!h || C) return;
        let t = Date.now() - E < 6e5;
        null != f && t || (x || !y || T) && (0, s.h$)(e, S, n)
    }, [h, C, f, E, y, T, x, S, e, n]), {
        isFetchingShopHome: C,
        fetchShopHomeError: f,
        shopBlocks: g,
        refreshShopHome: (0, i.useCallback)(() => {
            (0, s.h$)(e, S, n)
        }, [e, S, n])
    }
}