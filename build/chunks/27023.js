/** chunk id: 27023, original params: e,t,n (module,exports,require) **/
n.d(t, {
    bv: () => S,
    mf: () => I
});
var a = n(627968),
    s = n(64700),
    l = n(311907),
    i = n(688810),
    r = n(987144),
    d = n(71393),
    o = n(786300),
    c = n(403362),
    u = n(942975),
    m = n(864310),
    x = n(665171),
    v = n(397400),
    g = n(522055),
    b = n(494316),
    f = n(568065),
    j = n(800007),
    p = n(738072),
    h = n(985018);
let [N, S] = (0, o.A)();

function A(e) {
    return e?.plans[Math.ceil((e?.plans.length - 1) / 2)]?.id
}

function I(e) {
    let t, n, {
        guildId: o,
        initialGameServerInstance: S,
        initialGameServerGame: I,
        stepConfig: C = j.ZN,
        children: k,
        onClose: T,
        analyticsLocation: _
    } = e;
    s.useEffect(() => {
        (0, x.z9)(o), (0, u.Xd)(o, !0), null == S && (0, x.cq)(o)
    }, [o, S]);
    let y = (0, l.bG)([g.A], () => g.A.getStateForGuild(o)),
        G = (0, l.bG)([d.A], () => d.A.getGuild(o)),
        {
            analyticsLocations: L
        } = (0, i.Ay)(_),
        [P, U] = s.useState(C.initialStep ?? Object.keys(C.steps)[0]),
        {
            available: O
        } = (0, m.A)(o),
        E = C.steps[P],
        [w, B] = s.useState(I?.id);
    s.useEffect(() => {
        if (null != w || S?.entitlementId == null) return;
        let e = y?.entitlements?.[S.entitlementId]?.sku?.product_id;
        null != e && B(e)
    }, [y?.entitlements, S?.entitlementId, w]);
    let [D, z] = s.useState(void 0), H = s.useMemo(() => {
        if (null != w) return Object.values(y?.catalog ?? {}).find(e => e.id === w)
    }, [y?.catalog, w]), [M, R] = s.useState(S), [W, q] = s.useState(A(I) ?? S?.planId), K = (t = (0, l.bG)([g.A], () => g.A.getStateForGuild(o)?.entitlements), n = H?.plans.find(e => e.id === W)?.cost ?? 0, null == M ? n : n - (t?.[M.entitlementId]?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0)), $ = s.useCallback(e => {
        R(e);
        let t = y?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
        null != t && B(t), q(e?.planId), Y(e?.name ?? ""), Q(e?.regionId ?? "")
    }, [y?.entitlements]), F = s.useCallback((e, t) => {
        $(void 0), B(e?.id), q(t ?? A(e))
    }, [$]), [J, V] = s.useState(), [X, Y] = s.useState(S?.name ?? ""), [Z, Q] = s.useState(S?.regionId ?? ""), [ee, et] = s.useState(!1), en = s.useRef(!1), ea = s.useCallback(() => {
        if (z(void 0), null == G || null == H || "" === X || "" === Z || null == W) return;
        let e = H.plans.find(e => e.id === W);
        (0, v.Jh)({
            guildId: G.id,
            productId: H.id,
            productName: H.name,
            skuId: W,
            planName: e?.name ?? "",
            planCost: e?.cost ?? 0,
            previousPlanCost: null == M ? 0 : (e?.cost ?? 0) + K,
            region: Z,
            type: null == M ? "create" : "edit"
        });
        let t = () => {
            if (en.current) return;
            en.current = !0, et(!0);
            let e = new Promise(e => {
                setTimeout(() => e(void 0), j.PH)
            });
            Promise.all([null != M ? (0, x.pj)(G.id, M.entitlementId, W, X) : (0, x.jL)(G.id, W, X, Z), e]).then(() => {
                T(), M?.planId !== W && (0, b.A)(G.id, H, null == M ? "created" : "updated")
            }).catch(e => {
                z(e.body?.message ?? h.intl.string(p.default.gvNWWr)), en.current = !1
            }).finally(() => {
                et(!1)
            })
        };
        O < K ? (0, r.g)({
            analyticsLocation: _,
            numberOfBoostsToAdd: K - O,
            analyticsLocations: L,
            guild: G,
            intent: f.Pn.PERK,
            onLoading: e => {
                et(e)
            },
            onSubscribeComplete: () => {
                t()
            },
            handleSubscribeModalClose: e => {
                e && t()
            }
        }) : t()
    }, [L, G, O, W, _, H, X, Z, T, K, M]), es = s.useCallback(e => {
        switch (e.type) {
            case "close":
                T();
                break;
            case "go-to-step":
                U(e.step);
                break;
            case "save":
                ea()
        }
    }, [T, ea]), el = s.useCallback(() => {
        null != E && es(E.onBack)
    }, [E, es]), ei = s.useCallback(() => {
        null != E && es(E.onNext)
    }, [E, es]), er = s.useMemo(() => new Set(Object.values(y?.catalog ?? {}).map(e => e.provider).filter(c.Vq)), [y?.catalog]);
    return (0, a.jsx)(N.Provider, {
        value: {
            guildId: o,
            step: P,
            stepAction: E,
            stepLoading: ee,
            onBack: el,
            onNext: ei,
            gameServerGames: y?.catalog ?? {},
            instances: Object.values(y?.instances ?? {}),
            currentGame: H,
            setCurrentGame: F,
            gameServerInstance: M,
            setGameServerInstance: $,
            name: X,
            setName: Y,
            regionId: Z,
            setRegionId: Q,
            planCost: K,
            planId: W,
            setPlanId: q,
            footerNode: J,
            setFooterNode: V,
            availableBoostCount: O,
            error: D,
            gameProvider: er.size > 0 ? Array.from(er)[0] : null
        },
        children: k
    })
}