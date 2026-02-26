/** chunk id: 185438, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => C
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
    p = i(897100),
    S = i(97352),
    I = i(67480),
    A = i(328968),
    _ = i(915043),
    T = i(607940),
    E = i(163437),
    f = i(638643);

function C(t) {
    let {
        initialSubscribeForGuild: e,
        analyticsLocation: i,
        skuId: l,
        onComplete: C,
        disableGuildSelector: N
    } = t, h = (0, a.bG)([I.A], () => null != l ? I.A.get(l) : void 0, [l]), g = (0, a.bG)([A.A], () => null != l ? A.A.getForSKU(l) : void 0, [l]), m = (0, a.yK)([S.A], () => null != l ? S.A.getForSKU(l) : [], [l]), P = m[0]?.id, L = (0, a.bG)([I.A], () => null != l ? I.A.getParentSKU(l) : void 0, [l]), O = L?.bundledSkuIds, b = (0, a.yK)([S.A], () => O?.flatMap(S.A.getForSKU) ?? [], [O]), F = n.useMemo(() => b.map(t => t.id), [b]), v = (0, E.PJ)(h?.flags ?? 0), U = (0, a.bG)([T.A], () => null != e && !1 !== v && T.A.getEntitlementsForGuild(e, !0).some(t => t.skuId === l), [v, l, e]), R = h?.applicationId, y = g?.published === !0 && h?.isAvailable() === !0, {
        app: x
    } = (0, d.NP)(R), {
        analyticsLocations: G
    } = (0, o.Ay)(), k = (0, _.GD)(L, e ?? void 0), w = k?.subscription, j = k?.subscriptionPlan, D = (0, _.Ko)(L, e ?? void 0), B = D?.subscriptionPlan, {
        entitlementsLoaded: M
    } = (0, _.CZ)({
        guildId: e
    });
    null == e && (M = !0);
    let H = (0, p.A)(),
        K = null != w && (0, E.Uo)(w, h),
        Y = n.useMemo(() => {
            if (!M || null == x || null == l) return c.wF.LOADING;
            if (!y) return c.wF.UNAVAILABLE;
            if (!v) {
                if (j?.skuId === l) return c.wF.SUBSCRIBED;
                if (B?.skuId === l && !1 === K) return c.wF.UPCOMING_PLAN
            }
            return c.wF.AVAILABLE
        }, [j?.skuId, y, x, M, K, v, B?.skuId, l]);
    return n.useEffect(() => {
        y && null != l && H && (S.A.isFetchingForSKU(l) || S.A.isLoadedForSKU(l) || r.h.wait(() => {
            (0, u.ur)(l)
        }))
    }, [y, l, H]), {
        openModal: n.useCallback(() => {
            s()(null != x, "No application"), s()(null != l, "No SKU ID"), s()(y, "Cannot purchase this unpublished plan"), (0, f.w)({
                subscriptionPlanId: P,
                sku: h,
                subscriptionGroupPlanIds: F,
                initialSubscribeForGuild: e,
                disableGuildSelector: N,
                analyticsLocations: G,
                analyticsLocation: i
            }).then(() => {
                C?.()
            })
        }, [x, l, y, P, h, F, e, N, G, i, C]),
        subscriptionPurchaseButtonState: Y,
        isGuildSubscribed: U
    }
}