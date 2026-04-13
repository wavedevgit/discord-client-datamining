/** chunk id: 27023 params = (module,exports,require) **/
n.d(t, {
    bv: () => I,
    mf: () => C
});
var a = n(627968),
    l = n(64700),
    s = n(311907),
    i = n(688810),
    r = n(987144),
    d = n(71393),
    o = n(786300),
    c = n(403362),
    u = n(942975),
    m = n(864310),
    x = n(410212),
    v = n(665171),
    g = n(397400),
    f = n(522055),
    j = n(494316),
    b = n(568065),
    h = n(800007),
    p = n(799435),
    N = n(985018);
let [S, I] = (0, o.A)();

function A(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id
}

function C(e) {
    let t, n, {
        guildId: o,
        initialGameServerInstance: I,
        initialGameServerGame: C,
        stepConfig: T = h.ZN,
        children: k,
        onClose: y,
        analyticsLocation: L
    } = e;
    l.useEffect(() => {
        (0, v.z9)(o), (0, u.Xd)(o, !0), null == I && (0, v.cq)(o)
    }, [o, I]);
    let G = (0, s.bG)([f.A], () => f.A.getStateForGuild(o)),
        P = (0, s.bG)([d.A], () => d.A.getGuild(o)),
        {
            analyticsLocations: _
        } = (0, i.Ay)(L),
        [U, O] = l.useState(T.initialStep ?? Object.keys(T.steps)[0]),
        {
            available: w
        } = (0, m.A)(o),
        E = T.steps[U],
        [B, D] = l.useState(C?.id);
    l.useEffect(() => {
        if (null != B || I?.entitlementId == null) return;
        let e = G?.entitlements?.[I.entitlementId]?.sku?.product_id;
        null != e && D(e)
    }, [G?.entitlements, I?.entitlementId, B]);
    let [H, M] = l.useState(void 0), z = l.useMemo(() => {
        if (null != B) return Object.values(G?.catalog ?? {}).find(e => e.id === B)
    }, [G?.catalog, B]), [W, q] = l.useState(I), [K, R] = l.useState(A(C) ?? I?.planId), $ = (t = (0, s.bG)([f.A], () => f.A.getStateForGuild(o)?.entitlements), n = z?.plans.find(e => e.id === K)?.cost ?? 0, null == W ? n : n - ((0, x.A)(t?.[W.entitlementId]) ?? 0)), F = l.useCallback(e => {
        q(e);
        let t = G?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
        null != t && D(t), R(e?.planId), Z(e?.name ?? ""), ee(e?.regionId ?? "")
    }, [G?.entitlements]), J = l.useCallback((e, t) => {
        F(void 0), D(e?.id), R(t ?? A(e))
    }, [F]), [V, X] = l.useState(), [Y, Z] = l.useState(I?.name ?? ""), [Q, ee] = l.useState(I?.regionId ?? ""), [et, en] = l.useState(!1), ea = l.useRef(!1), el = l.useCallback(() => {
        if (M(void 0), null == P || null == z || "" === Y || "" === Q || null == K) return;
        let e = z.plans.find(e => e.id === K);
        (0, g.Jh)({
            guildId: P.id,
            productId: z.id,
            productName: z.name,
            skuId: K,
            planName: e?.name ?? "",
            planCost: e?.cost ?? 0,
            previousPlanCost: null == W ? 0 : (e?.cost ?? 0) + $,
            region: Q,
            type: null == W ? "create" : "edit"
        });
        let t = () => {
            if (ea.current) return;
            ea.current = !0, en(!0);
            let e = new Promise(e => {
                setTimeout(() => e(void 0), h.PH)
            });
            Promise.all([null != W ? (0, v.pj)(P.id, W.entitlementId, K, Y) : (0, v.jL)(P.id, K, Y, Q), e]).then(() => {
                y(), W?.planId !== K && (0, j.A)(P.id, z, null == W ? "created" : "updated")
            }).catch(e => {
                M(e.body?.message ?? N.intl.string(p.default.gvNWWr)), ea.current = !1
            }).finally(() => {
                en(!1)
            })
        };
        w < $ ? (0, r.g)({
            analyticsLocation: L,
            numberOfBoostsToAdd: $ - w,
            analyticsLocations: _,
            guild: P,
            intent: b.Pn.PERK,
            onLoading: e => {
                en(e)
            },
            onSubscribeComplete: () => {
                t()
            },
            handleSubscribeModalClose: e => {
                e && t()
            }
        }) : t()
    }, [_, P, w, K, L, z, Y, Q, y, $, W]), es = l.useCallback(e => {
        switch (e.type) {
            case "close":
                y();
                break;
            case "go-to-step":
                O(e.step);
                break;
            case "save":
                el()
        }
    }, [y, el]), ei = l.useCallback(() => {
        null != E && es(E.onBack)
    }, [E, es]), er = l.useCallback(() => {
        null != E && es(E.onNext)
    }, [E, es]), ed = l.useMemo(() => new Set(Object.values(G?.catalog ?? {}).map(e => e.provider).filter(c.Vq)), [G?.catalog]);
    return (0, a.jsx)(S.Provider, {
        value: {
            guildId: o,
            step: U,
            stepAction: E,
            stepLoading: et,
            onBack: ei,
            onNext: er,
            gameServerGames: G?.catalog ?? {},
            instances: Object.values(G?.instances ?? {}),
            currentGame: z,
            setCurrentGame: J,
            gameServerInstance: W,
            setGameServerInstance: F,
            name: Y,
            setName: Z,
            regionId: Q,
            setRegionId: ee,
            planCost: $,
            planId: K,
            setPlanId: R,
            footerNode: V,
            setFooterNode: X,
            availableBoostCount: w,
            error: H,
            gameProvider: ed.size > 0 ? Array.from(ed)[0] : null
        },
        children: k
    })
}