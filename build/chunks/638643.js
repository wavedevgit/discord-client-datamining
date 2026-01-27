/** Chunk was on 13088 **/
/** chunk id: 638643, original params: t,e,n (module,exports,require) **/
n.d(e, {
    k: () => A,
    w: () => S
}), n(938796), n(896048);
var l = n(627968),
    r = n(397927),
    i = n(342098),
    u = n(216678),
    o = n(97352),
    s = n(166403),
    a = n(67480),
    c = n(915043),
    d = n(163437),
    p = n(490744),
    f = n(652215);
async function S(t) {
    let {
        subscriptionPlanId: e,
        sku: u,
        subscriptionGroupPlanIds: S,
        initialSubscribeForGuild: A,
        analyticsLocations: b,
        analyticsLocation: O,
        disableGuildSelector: g = !1
    } = t, {
        promise: I,
        resolve: m
    } = Promise.withResolvers();
    if ((0, d.PJ)(u.flags) && !1 === g) {
        let {
            promise: t,
            resolve: e
        } = Promise.withResolvers();
        (0, r.mMO)(async () => {
            let {
                GuildSubscriptionSelectionModal: t
            } = await n.e("30476").then(n.bind(n, 399143));
            return n => (0, l.jsx)(t, {
                transitionState: n.transitionState,
                onClose: n.onClose,
                sku: u,
                onSelect: e,
                currentGuildId: A
            })
        }, {
            stackingBehavior: "stack"
        }), A = await t
    }
    let v = a.A.getParentSKU(u.id),
        E = null;
    return null != v && ([E] = (0, c.wm)({
        groupSku: v,
        SubscriptionStore: s.A,
        SubscriptionPlanStore: o.A,
        mapSubscriptionItems: c.W_,
        guildId: A
    })), (0, i.A)({
        initialPlanId: e,
        skuId: u.id,
        activeSubscription: E,
        applicationId: u.applicationId,
        planGroup: S,
        guildId: A,
        renderHeader: (t, e, n) => (0, l.jsx)(p.fs, {
            step: n,
            onClose: () => e(!1)
        }),
        analyticsSubscriptionType: f.rzx.APPLICATION,
        analyticsLocations: b,
        analyticsLocation: O,
        onComplete: m,
        showBenefitsFirst: !1,
        forcesTransitionToGuild: !1
    }), I
}

function A(t) {
    let {
        appId: e,
        skuId: n,
        analyticsLocations: l
    } = t;
    (0, u.A)({
        applicationId: e,
        skuId: n,
        analyticsLocations: l
    })
}