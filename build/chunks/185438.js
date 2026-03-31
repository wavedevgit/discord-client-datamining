/** chunk id: 185438 params = (module,exports,require) **/
e.d(i, {
    A: () => f
}), e(938796);
var n = e(64700),
    l = e(284009),
    s = e.n(l),
    a = e(311907),
    r = e(73153),
    o = e(73825),
    u = e(688810),
    c = e(376374),
    d = e(627363),
    S = e(897100),
    p = e(97352),
    I = e(67480),
    A = e(328968),
    _ = e(915043),
    T = e(607940),
    E = e(163437),
    C = e(638643);

function f(t) {
    let {
        initialSubscribeForGuild: i,
        analyticsLocation: e,
        skuId: l,
        onComplete: f,
        disableGuildSelector: P
    } = t, N = (0, a.bG)([I.A], () => null != l ? I.A.get(l) : void 0, [l]), h = (0, a.bG)([A.A], () => null != l ? A.A.getForSKU(l) : void 0, [l]), g = (0, a.yK)([p.A], () => null != l ? p.A.getForSKU(l) : [], [l]), m = g[0]?.id, L = (0, a.bG)([I.A], () => null != l ? I.A.getParentSKU(l) : void 0, [l]), O = L?.bundledSkuIds, F = (0, a.yK)([p.A], () => O?.flatMap(p.A.getForSKU) ?? [], [O]), b = n.useMemo(() => F.map(t => t.id), [F]), U = (0, E.PJ)(N?.flags ?? 0), v = (0, a.bG)([T.A], () => null != i && !1 !== U && T.A.getEntitlementsForGuild(i, !0).some(t => t.skuId === l), [U, l, i]), R = N?.applicationId, y = h?.published === !0 && N?.isAvailable() === !0, {
        app: w
    } = (0, d.NP)(R), {
        analyticsLocations: G
    } = (0, u.Ay)(), k = (0, _.GD)(L, i ?? void 0), x = k?.subscription, B = k?.subscriptionPlan, D = (0, _.Ko)(L, i ?? void 0), j = D?.subscriptionPlan, {
        entitlementsLoaded: M
    } = (0, _.CZ)({
        guildId: i
    });
    null == i && (M = !0);
    let H = (0, S.A)(),
        K = null != x && (0, E.Uo)(x, N),
        Y = n.useMemo(() => {
            if (!M || null == w || null == l) return c.wF.LOADING;
            if (!y) return c.wF.UNAVAILABLE;
            if (!U) {
                if (B?.skuId === l) return c.wF.SUBSCRIBED;
                if (j?.skuId === l && !1 === K) return c.wF.UPCOMING_PLAN
            }
            return c.wF.AVAILABLE
        }, [B?.skuId, y, w, M, K, U, j?.skuId, l]);
    return n.useEffect(() => {
        y && null != l && H && (p.A.isFetchingForSKU(l) || p.A.isLoadedForSKU(l) || r.h.wait(() => {
            (0, o.ur)(l)
        }))
    }, [y, l, H]), {
        openModal: n.useCallback(() => {
            s()(null != w, "No application"), s()(null != l, "No SKU ID"), s()(y, "Cannot purchase this unpublished plan"), (0, C.w)({
                subscriptionPlanId: m,
                sku: N,
                subscriptionGroupPlanIds: b,
                initialSubscribeForGuild: i,
                disableGuildSelector: P,
                analyticsLocations: G,
                analyticsLocation: e
            }).then(() => {
                f?.()
            })
        }, [w, l, y, m, N, b, i, P, G, e, f]),
        subscriptionPurchaseButtonState: Y,
        isGuildSubscribed: v
    }
}