/** chunk id: 638643 params = (module,exports,require) **/
e.d(i, {
    k: () => A,
    w: () => I
}), e(938796);
var n = e(627968),
    l = e(397927),
    s = e(342098),
    a = e(216678),
    r = e(97352),
    o = e(166403),
    u = e(67480),
    c = e(915043),
    d = e(163437),
    S = e(490744),
    p = e(652215);
async function I(t) {
    let {
        subscriptionPlanId: i,
        sku: a,
        subscriptionGroupPlanIds: I,
        initialSubscribeForGuild: A,
        analyticsLocations: _,
        analyticsLocation: T,
        disableGuildSelector: E = !1
    } = t, {
        promise: C,
        resolve: f
    } = Promise.withResolvers();
    if ((0, d.PJ)(a.flags) && !1 === E) {
        let {
            promise: t,
            resolve: i
        } = Promise.withResolvers();
        (0, l.mMO)(async () => {
            let {
                GuildSubscriptionSelectionModal: t
            } = await Promise.all([e.e("8555"), e.e("30476")]).then(e.bind(e, 399143));
            return e => (0, n.jsx)(t, {
                transitionState: e.transitionState,
                onClose: e.onClose,
                sku: a,
                onSelect: i,
                currentGuildId: A
            })
        }, {
            stackingBehavior: "stack"
        }), A = await t
    }
    let P = u.A.getParentSKU(a.id),
        N = null;
    return null != P && ([N] = (0, c.wm)({
        groupSku: P,
        SubscriptionStore: o.A,
        SubscriptionPlanStore: r.A,
        mapSubscriptionItems: c.W_,
        guildId: A
    })), (0, s.A)({
        initialPlanId: i,
        skuId: a.id,
        activeSubscription: N,
        applicationId: a.applicationId,
        planGroup: I,
        guildId: A,
        renderHeader: (t, i, e) => (0, n.jsx)(S.fs, {
            step: e,
            onClose: () => i(!1)
        }),
        analyticsSubscriptionType: p.rzx.APPLICATION,
        analyticsLocations: _,
        analyticsLocation: T,
        onComplete: f,
        showBenefitsFirst: !1,
        forcesTransitionToGuild: !1
    }), C
}

function A(t) {
    let {
        appId: i,
        skuId: e,
        analyticsLocations: n,
        checkoutFlow: l
    } = t;
    (0, a.A)({
        applicationId: i,
        skuId: e,
        analyticsLocations: n,
        checkoutFlow: l
    })
}