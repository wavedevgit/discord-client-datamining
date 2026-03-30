/** chunk id: 185438 params = (module,exports,require) **/
i.d(e, {
    A: () => f
}), i(938796);
var n = i(64700),
    l = i(284009),
    s = i.n(l),
    a = i(311907),
    r = i(73153),
    u = i(73825),
    o = i(688810),
    c = i(376374),
    d = i(627363),
    S = i(897100),
    p = i(97352),
    I = i(67480),
    A = i(328968),
    _ = i(915043),
    T = i(607940),
    E = i(163437),
    C = i(638643);

function f(t) {
    let {
        initialSubscribeForGuild: e,
        analyticsLocation: i,
        skuId: l,
        onComplete: f,
        disableGuildSelector: h
    } = t, P = (0, a.bG)([I.A], () => null != l ? I.A.get(l) : void 0, [l]), N = (0, a.bG)([A.A], () => null != l ? A.A.getForSKU(l) : void 0, [l]), g = (0, a.yK)([p.A], () => null != l ? p.A.getForSKU(l) : [], [l]), m = g[0]?.id, L = (0, a.bG)([I.A], () => null != l ? I.A.getParentSKU(l) : void 0, [l]), O = L?.bundledSkuIds, F = (0, a.yK)([p.A], () => O?.flatMap(p.A.getForSKU) ?? [], [O]), b = n.useMemo(() => F.map(t => t.id), [F]), v = (0, E.PJ)(P?.flags ?? 0), U = (0, a.bG)([T.A], () => null != e && !1 !== v && T.A.getEntitlementsForGuild(e, !0).some(t => t.skuId === l), [v, l, e]), R = P?.applicationId, k = N?.published === !0 && P?.isAvailable() === !0, {
        app: y
    } = (0, d.NP)(R), {
        analyticsLocations: w
    } = (0, o.Ay)(), x = (0, _.GD)(L, e ?? void 0), G = x?.subscription, D = x?.subscriptionPlan, j = (0, _.Ko)(L, e ?? void 0), B = j?.subscriptionPlan, {
        entitlementsLoaded: M
    } = (0, _.CZ)({
        guildId: e
    });
    null == e && (M = !0);
    let H = (0, S.A)(),
        K = null != G && (0, E.Uo)(G, P),
        Y = n.useMemo(() => {
            if (!M || null == y || null == l) return c.wF.LOADING;
            if (!k) return c.wF.UNAVAILABLE;
            if (!v) {
                if (D?.skuId === l) return c.wF.SUBSCRIBED;
                if (B?.skuId === l && !1 === K) return c.wF.UPCOMING_PLAN
            }
            return c.wF.AVAILABLE
        }, [D?.skuId, k, y, M, K, v, B?.skuId, l]);
    return n.useEffect(() => {
        k && null != l && H && (p.A.isFetchingForSKU(l) || p.A.isLoadedForSKU(l) || r.h.wait(() => {
            (0, u.ur)(l)
        }))
    }, [k, l, H]), {
        openModal: n.useCallback(() => {
            s()(null != y, "No application"), s()(null != l, "No SKU ID"), s()(k, "Cannot purchase this unpublished plan"), (0, C.w)({
                subscriptionPlanId: m,
                sku: P,
                subscriptionGroupPlanIds: b,
                initialSubscribeForGuild: e,
                disableGuildSelector: h,
                analyticsLocations: w,
                analyticsLocation: i
            }).then(() => {
                f?.()
            })
        }, [y, l, k, m, P, b, e, h, w, i, f]),
        subscriptionPurchaseButtonState: Y,
        isGuildSubscribed: U
    }
}