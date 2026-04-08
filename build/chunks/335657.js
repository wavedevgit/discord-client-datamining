/** chunk id: 335657 params = (module,exports,require) **/
n.d(t, {
    y: () => u
});
var a = n(64700),
    i = n(635358),
    l = n(311907),
    s = n(49463),
    r = n(979286),
    o = n(590180),
    d = n(295811),
    c = n(766201);

function u(e, t, n) {
    let u = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        m = (0, l.bG)([s.A], () => s.A.hasLoadedExperiments),
        h = (0, l.bG)([o.A], () => o.A.skipNumCategories),
        [x, p, g, _, f, v, b, j] = (0, l.yK)([d.A], () => [d.A.getShopBlocks(e), d.A.getLastSuccessfulFetch(e) ?? 0, d.A.getLastErrorTimestamp(e) ?? 0, d.A.getLastFetchOptions(e), d.A.getFetchShopHomeError(e), d.A.getIsFetchingShopHome(e), d.A.getHasKnownStaleData(e), d.A.getShopHomeConfigOverride()]),
        A = (0, a.useMemo)(() => ({
            ...t,
            variantsReturnStyle: i.g.VARIANTS_GROUP,
            includeBundles: !0,
            includeDynamicBlocks: !0,
            shopHomeConfig: j,
            skipNumCategories: h
        }), [t, j, h]),
        C = (0, a.useMemo)(() => !(0, r.gn)(_, A), [_, A]),
        y = (0, c.n)(x, v ?? !1, u),
        S = (0, a.useMemo)(() => !y && Date.now() - p < 6e5, [p, y]);
    return (0, a.useEffect)(() => {
        if (!m || v) return;
        let t = Date.now() - g < 6e5;
        null != f && t || (C || !S || b) && (0, r.h$)(e, A, n)
    }, [m, v, f, g, S, b, C, A, e, n]), {
        isFetchingShopHome: v,
        fetchShopHomeError: f,
        shopBlocks: x,
        refreshShopHome: (0, a.useCallback)(() => {
            (0, r.h$)(e, A, n)
        }, [e, A, n])
    }
}