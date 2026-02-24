/** chunk id: 915043, original params: t,e,i (module,exports,require) **/
i.d(e, {
    $s: () => C,
    CZ: () => f,
    E: () => N,
    GD: () => m,
    Ko: () => L,
    W_: () => g,
    mJ: () => E,
    sD: () => h,
    wm: () => F
}), i(321073), i(938796);
var n, l = i(64700),
    s = i(311907),
    r = i(339048),
    a = i(71393),
    u = i(576705),
    o = i(97352),
    c = i(166403),
    d = i(67480),
    p = i(324050),
    S = i(143582),
    I = i(337095),
    A = i(607940),
    _ = i(163437),
    T = i(652215),
    E = ((n = {})[n.NOT_LOADED = 0] = "NOT_LOADED", n[n.LOADING = 1] = "LOADING", n[n.LOADED = 2] = "LOADED", n[n.ERROR = 3] = "ERROR", n);
let f = t => {
    let {
        guildId: e,
        canFetch: i = !0,
        forceRefetch: n = !1
    } = t, r = (0, s.bG)([A.A], () => null != e ? A.A.getEntitlementsForGuildFetchState(e) : null, [e]);
    return l.useEffect(() => {
        if (null == e || e === T.ME) return;
        let t = A.A.getEntitlementsForGuildFetchState(e);
        i && (t === A.e.NOT_FETCHED || n) && (0, S.f5)(e)
    }, [e, i, n]), {
        entitlementsLoaded: r === A.e.FETCHED
    }
};

function C(t) {
    let e = t?.id ?? T.dJq,
        {
            entitlementsLoaded: i
        } = f({
            guildId: e,
            canFetch: (0, s.bG)([u.A], () => u.A.can(T.xBc.ADMINISTRATOR, t))
        }),
        n = (0, s.bG)([p.A], () => p.A.getLastGuildDismissedTime(e)),
        r = (0, s.yK)([A.A], () => {
            let t = A.A.getEntitlementsForGuild(e),
                i = A.A.getEntitlementsForGuild(e, !1),
                n = t.map(t => t.applicationId);
            return i.filter(t => !n.includes(t.applicationId))
        }),
        a = (0, s.cf)([d.A], () => d.A.getSKUs()),
        o = l.useMemo(() => r.filter(t => {
            let e = a[t.skuId];
            return null != e && e.available
        }), [r, a]);
    return i ? o.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(n ?? 0, Date.now() - 2592e6)) : []
}
let N = () => {
    let [t, e] = l.useState(0);
    return l.useEffect(() => {
        e(1), Promise.all([(0, r.qw)({
            withSku: !0,
            withApplication: !0,
            entitlementType: T.zF_.APPLICATION_SUBSCRIPTION
        }), (0, r.qw)({
            withSku: !0,
            withApplication: !0,
            entitlementType: T.zF_.PURCHASE
        })]).catch(() => {
            e(3)
        }).then(() => {
            e(2)
        })
    }, []), {
        loadState: t
    }
};

function h(t, e) {
    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [n, r] = l.useState([]),
        [u, o] = l.useState(!1);
    return l.useLayoutEffect(() => {
        null != t && i && (o(!0), (0, I.L5)(t, e).then(r).finally(() => {
            o(!1)
        }))
    }, [t, e, i]), {
        guilds: (0, s.yK)([a.A], () => n.map(t => a.A.getGuild(t)).filter(t => null != t), [n]),
        isFetching: u
    }
}
let g = t => t.items;

function m(t, e) {
    return O(t, e, g)
}
let P = t => t.renewalMutations?.items ?? [];

function L(t, e) {
    return O(t, e, P)
}

function O(t, e, i) {
    let [n, r] = (0, s.yK)([c.A, o.A], () => null == t ? [] : F({
        groupSku: t,
        SubscriptionStore: c.A,
        SubscriptionPlanStore: o.A,
        mapSubscriptionItems: i,
        guildId: e
    }), [t, i, e]);
    return l.useMemo(() => {
        if (null != n && null != r) return {
            subscription: n,
            subscriptionPlan: r
        }
    }, [n, r])
}

function F(t) {
    let {
        groupSku: e,
        SubscriptionStore: i,
        SubscriptionPlanStore: n,
        mapSubscriptionItems: l,
        guildId: s
    } = t, {
        bundledSkuIds: r,
        flags: a
    } = e;
    for (let t of i.getActiveApplicationSubscriptions() ?? []) {
        if ((0, _.PJ)(a) && null != s && t.metadata?.application_subscription_guild_id !== s) continue;
        let e = l(t).map(t => n.get(t.planId)).find(t => null != t && r.includes(t.skuId));
        if (null != e) return [t, e]
    }
    return []
}