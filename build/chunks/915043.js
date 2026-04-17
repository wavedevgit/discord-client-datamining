/** chunk id: 915043 params = (module,exports,require) **/
e.d(i, {
    $s: () => f,
    CZ: () => C,
    E: () => N,
    GD: () => g,
    Ko: () => L,
    W_: () => h,
    mJ: () => E,
    sD: () => P,
    wm: () => F
}), e(321073), e(938796);
var n, l = e(64700),
    s = e(311907),
    a = e(339048),
    r = e(71393),
    o = e(576705),
    u = e(97352),
    c = e(166403),
    d = e(67480),
    S = e(324050),
    p = e(143582),
    I = e(337095),
    A = e(607940),
    _ = e(163437),
    T = e(652215),
    E = ((n = {})[n.NOT_LOADED = 0] = "NOT_LOADED", n[n.LOADING = 1] = "LOADING", n[n.LOADED = 2] = "LOADED", n[n.ERROR = 3] = "ERROR", n);
let C = t => {
    let {
        guildId: i,
        canFetch: e = !0,
        forceRefetch: n = !1
    } = t, a = (0, s.bG)([A.A], () => null != i ? A.A.getEntitlementsForGuildFetchState(i) : null, [i]);
    return l.useEffect(() => {
        if (null == i || i === T.ME) return;
        let t = A.A.getEntitlementsForGuildFetchState(i);
        e && (t === A.e.NOT_FETCHED || n) && (0, p.f5)(i)
    }, [i, e, n]), {
        entitlementsLoaded: a === A.e.FETCHED
    }
};

function f(t) {
    let i = t?.id ?? T.dJq,
        {
            entitlementsLoaded: e
        } = C({
            guildId: i,
            canFetch: (0, s.bG)([o.A], () => o.A.can(T.xBc.ADMINISTRATOR, t))
        }),
        n = (0, s.bG)([S.A], () => S.A.getLastGuildDismissedTime(i)),
        a = (0, s.yK)([A.A], () => {
            let t = A.A.getEntitlementsForGuild(i),
                e = A.A.getEntitlementsForGuild(i, !1),
                n = t.map(t => t.applicationId);
            return e.filter(t => !n.includes(t.applicationId))
        }),
        r = (0, s.cf)([d.A], () => d.A.getSKUs()),
        u = l.useMemo(() => a.filter(t => {
            let i = r[t.skuId];
            return null != i && i.available
        }), [a, r]);
    return e ? u.filter(t => null != t.endsAt && t.endsAt.getTime() > Math.max(n ?? 0, Date.now() - 2592e6)) : []
}
let N = () => {
    let [t, i] = l.useState(0);
    return l.useEffect(() => {
        i(1), Promise.all([(0, a.qw)({
            withSku: !0,
            withApplication: !0,
            entitlementType: T.zF_.APPLICATION_SUBSCRIPTION
        }), (0, a.qw)({
            withSku: !0,
            withApplication: !0,
            entitlementType: T.zF_.PURCHASE
        })]).catch(() => {
            i(3)
        }).then(() => {
            i(2)
        })
    }, []), {
        loadState: t
    }
};

function P(t, i) {
    let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
        [n, a] = l.useState([]),
        [o, u] = l.useState(!1);
    return l.useLayoutEffect(() => {
        null != t && e && (u(!0), (0, I.L5)(t, i).then(a).finally(() => {
            u(!1)
        }))
    }, [t, i, e]), {
        guilds: (0, s.yK)([r.A], () => n.map(t => r.A.getGuild(t)).filter(t => null != t), [n]),
        isFetching: o
    }
}
let h = t => t.items;

function g(t, i) {
    return O(t, i, h)
}
let m = t => t.renewalMutations?.items ?? [];

function L(t, i) {
    return O(t, i, m)
}

function O(t, i, e) {
    let [n, a] = (0, s.yK)([c.A, u.A], () => null == t ? [] : F({
        groupSku: t,
        SubscriptionStore: c.A,
        SubscriptionPlanStore: u.A,
        mapSubscriptionItems: e,
        guildId: i
    }), [t, e, i]);
    return l.useMemo(() => {
        if (null != n && null != a) return {
            subscription: n,
            subscriptionPlan: a
        }
    }, [n, a])
}

function F(t) {
    let {
        groupSku: i,
        SubscriptionStore: e,
        SubscriptionPlanStore: n,
        mapSubscriptionItems: l,
        guildId: s
    } = t, {
        bundledSkuIds: a,
        flags: r
    } = i;
    for (let t of e.getActiveApplicationSubscriptions() ?? []) {
        if ((0, _.PJ)(r) && null != s && t.metadata?.application_subscription_guild_id !== s) continue;
        let i = l(t).map(t => n.get(t.planId)).find(t => null != t && a.includes(t.skuId));
        if (null != i) return [t, i]
    }
    return []
}