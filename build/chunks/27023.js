/** chunk id: 27023, original params: e,t,n (module,exports,require) **/
n.d(t, {
    bv: () => S,
    mf: () => I
});
var a = n(627968),
    s = n(64700),
    i = n(311907),
    l = n(688810),
    r = n(987144),
    d = n(71393),
    o = n(786300),
    c = n(403362),
    u = n(942975),
    m = n(864310),
    x = n(665171),
    g = n(397400),
    v = n(522055),
    f = n(494316),
    j = n(568065),
    p = n(800007),
    b = n(294726),
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
        stepConfig: k = p.ZN,
        children: T,
        onClose: C,
        analyticsLocation: y
    } = e;
    s.useEffect(() => {
        (0, x.z9)(o), (0, u.Xd)(o, !0), null == S && (0, x.cq)(o)
    }, [o, S]);
    let _ = (0, i.bG)([v.A], () => v.A.getStateForGuild(o)),
        G = (0, i.bG)([d.A], () => d.A.getGuild(o)),
        {
            analyticsLocations: P
        } = (0, l.Ay)(y),
        [U, L] = s.useState(k.initialStep ?? Object.keys(k.steps)[0]),
        {
            available: O
        } = (0, m.A)(o),
        w = k.steps[U],
        [E, z] = s.useState(I?.id);
    s.useEffect(() => {
        if (null != E || S?.entitlementId == null) return;
        let e = _?.entitlements?.[S.entitlementId]?.sku?.product_id;
        null != e && z(e)
    }, [_?.entitlements, S?.entitlementId, E]);
    let [B, D] = s.useState(void 0), H = s.useMemo(() => {
        if (null != E) return Object.values(_?.catalog ?? {}).find(e => e.id === E)
    }, [_?.catalog, E]), [M, R] = s.useState(S), [q, W] = s.useState(A(I) ?? S?.planId), $ = (t = (0, i.bG)([v.A], () => v.A.getStateForGuild(o)?.entitlements), n = H?.plans.find(e => e.id === q)?.cost ?? 0, null == M ? n : n - (t?.[M.entitlementId]?.sku?.tenant_metadata?.guild_monetization?.game_server?.boost_price ?? 0)), F = s.useCallback(e => {
        R(e);
        let t = _?.entitlements?.[e?.entitlementId ?? ""]?.sku?.product_id;
        null != t && z(t), W(e?.planId), Y(e?.name ?? ""), Q(e?.regionId ?? "")
    }, [_?.entitlements]), J = s.useCallback((e, t) => {
        F(void 0), z(e?.id), W(t ?? A(e))
    }, [F]), [K, V] = s.useState(), [X, Y] = s.useState(S?.name ?? ""), [Z, Q] = s.useState(S?.regionId ?? ""), [ee, et] = s.useState(!1), en = s.useRef(!1), ea = s.useCallback(() => {
        if (D(void 0), null == G || null == H || "" === X || "" === Z || null == q) return;
        let e = H.plans.find(e => e.id === q);
        (0, g.Jh)({
            guildId: G.id,
            productId: H.id,
            productName: H.name,
            skuId: q,
            planName: e?.name ?? "",
            planCost: e?.cost ?? 0,
            previousPlanCost: null == M ? 0 : (e?.cost ?? 0) + $,
            region: Z,
            type: null == M ? "create" : "edit"
        });
        let t = () => {
            if (en.current) return;
            en.current = !0, et(!0);
            let e = new Promise(e => {
                setTimeout(() => e(void 0), p.PH)
            });
            Promise.all([null != M ? (0, x.pj)(G.id, M.entitlementId, q, X) : (0, x.jL)(G.id, q, X, Z), e]).then(() => {
                C(), M?.planId !== q && (0, f.A)(G.id, H, null == M ? "created" : "updated")
            }).catch(e => {
                D(e.body?.message ?? h.intl.string(b.default.gvNWWr)), en.current = !1
            }).finally(() => {
                et(!1)
            })
        };
        O < $ ? (0, r.g)({
            analyticsLocation: y,
            numberOfBoostsToAdd: $ - O,
            analyticsLocations: P,
            guild: G,
            intent: j.Pn.PERK,
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
    }, [P, G, O, q, y, H, X, Z, C, $, M]), es = s.useCallback(e => {
        switch (e.type) {
            case "close":
                C();
                break;
            case "go-to-step":
                L(e.step);
                break;
            case "save":
                ea()
        }
    }, [C, ea]), ei = s.useCallback(() => {
        null != w && es(w.onBack)
    }, [w, es]), el = s.useCallback(() => {
        null != w && es(w.onNext)
    }, [w, es]), er = s.useMemo(() => new Set(Object.values(_?.catalog ?? {}).map(e => e.provider).filter(c.Vq)), [_?.catalog]);
    return (0, a.jsx)(N.Provider, {
        value: {
            guildId: o,
            step: U,
            stepAction: w,
            stepLoading: ee,
            onBack: ei,
            onNext: el,
            gameServerGames: _?.catalog ?? {},
            instances: Object.values(_?.instances ?? {}),
            currentGame: H,
            setCurrentGame: J,
            gameServerInstance: M,
            setGameServerInstance: F,
            name: X,
            setName: Y,
            regionId: Z,
            setRegionId: Q,
            planCost: $,
            planId: q,
            setPlanId: W,
            footerNode: K,
            setFooterNode: V,
            availableBoostCount: O,
            error: B,
            gameProvider: er.size > 0 ? Array.from(er)[0] : null
        },
        children: T
    })
}