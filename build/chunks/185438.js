/** Chunk was on 13088 **/
/** chunk id: 185438, original params: t,e,n (module,exports,require) **/
n.d(e, {
    A: () => m
}), n(114821), n(339614), n(938796);
var l = n(64700),
    r = n(284009),
    i = n.n(r),
    u = n(311907),
    o = n(73153),
    s = n(73825),
    a = n(688810),
    c = n(376374),
    d = n(627363),
    p = n(897100),
    f = n(97352),
    S = n(67480),
    A = n(328968),
    b = n(915043),
    O = n(607940),
    g = n(163437),
    I = n(638643);

function m(t) {
    var e, n;
    let {
        initialSubscribeForGuild: r,
        analyticsLocation: m,
        skuId: v,
        onComplete: E,
        disableGuildSelector: P
    } = t, h = (0, u.bG)([S.A], () => null != v ? S.A.get(v) : void 0, [v]), T = (0, u.bG)([A.A], () => null != v ? A.A.getForSKU(v) : void 0, [v]), y = null == (n = (0, u.yK)([f.A], () => null != v ? f.A.getForSKU(v) : [], [v])[0]) ? void 0 : n.id, _ = (0, u.bG)([S.A], () => null != v ? S.A.getParentSKU(v) : void 0, [v]), N = null == _ ? void 0 : _.bundledSkuIds, j = (0, u.yK)([f.A], () => {
        var t;
        return null != (t = null == N ? void 0 : N.flatMap(f.A.getForSKU)) ? t : []
    }, [N]), L = l.useMemo(() => j.map(t => t.id), [j]), C = (0, g.PJ)(null != (e = null == h ? void 0 : h.flags) ? e : 0), F = (0, u.bG)([O.A], () => null != r && !1 !== C && O.A.getEntitlementsForGuild(r, !0).some(t => t.skuId === v), [C, v, r]), w = null == h ? void 0 : h.applicationId, x = (null == T ? void 0 : T.published) === !0 && (null == h ? void 0 : h.isAvailable()) === !0, {
        app: R
    } = (0, d.NP)(w), {
        analyticsLocations: D
    } = (0, a.Ay)(), G = (0, b.GD)(_, null != r ? r : void 0), k = null == G ? void 0 : G.subscription, U = null == G ? void 0 : G.subscriptionPlan, B = (0, b.Ko)(_, null != r ? r : void 0), K = null == B ? void 0 : B.subscriptionPlan, {
        entitlementsLoaded: M
    } = (0, b.CZ)({
        guildId: r
    });
    null == r && (M = !0);
    let H = (0, p.A)(),
        Y = null != k && (0, g.Uo)(k, h),
        V = l.useMemo(() => {
            if (!M || null == R || null == v) return c.wF.LOADING;
            if (!x) return c.wF.UNAVAILABLE;
            if (!C) {
                if ((null == U ? void 0 : U.skuId) === v) return c.wF.SUBSCRIBED;
                if ((null == K ? void 0 : K.skuId) === v && !1 === Y) return c.wF.UPCOMING_PLAN
            }
            return c.wF.AVAILABLE
        }, [null == U ? void 0 : U.skuId, x, R, M, Y, C, null == K ? void 0 : K.skuId, v]);
    return l.useEffect(() => {
        x && null != v && H && (f.A.isFetchingForSKU(v) || f.A.isLoadedForSKU(v) || o.h.wait(() => {
            (0, s.ur)(v)
        }))
    }, [x, v, H]), {
        openModal: l.useCallback(() => {
            i()(null != R, "No application"), i()(null != v, "No SKU ID"), i()(x, "Cannot purchase this unpublished plan"), (0, I.w)({
                subscriptionPlanId: y,
                sku: h,
                subscriptionGroupPlanIds: L,
                initialSubscribeForGuild: r,
                disableGuildSelector: P,
                analyticsLocations: D,
                analyticsLocation: m
            }).then(() => {
                null == E || E()
            })
        }, [R, v, x, y, h, L, r, P, D, m, E]),
        subscriptionPurchaseButtonState: V,
        isGuildSubscribed: F
    }
}