/** chunk id: 379082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(311907),
    l = n(71393),
    o = n(580630),
    c = n(599941),
    d = n(636194),
    u = n(624456),
    _ = n(652215),
    m = n(985018);

function A(e) {
    let t = (0, u.M)(e),
        n = (0, r.bG)([d.A], () => d.A.getSubscriptionListingForPlan(t)),
        s = (0, r.bG)([d.A], () => null != n ? d.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
        A = (0, r.bG)([l.A], () => l.A.getGuild(s?.guild_id)),
        [g, h] = i.useState(!1),
        {
            fetchSubscriptionsSettings: x
        } = (0, c.XE)();
    i.useEffect(() => {
        g && null != A && null == d.A.getSubscriptionSettings(A.id) && x(A.id)
    }, [g, A, x]);
    let p = null == n ? void 0 : function(e) {
        let {
            subscription: t
        } = e, n = a()(t.currentPeriodEnd).format("M/D/YY"), i = null != t.price ? (0, o.$g)(t.price, t.currency) : "", s = a()(t.createdAt).format("M/D/YY"), r = t.status === _.Dmq.CANCELED, l = t.status === _.Dmq.PAST_DUE, c = t.hasActiveTrial;
        return {
            memberSince: s,
            nextRenewalDate: n,
            nextRenewalLabel: r ? m.intl.string(m.t.UAfot2) : m.intl.string(m.t.CVjLcM),
            subscriptionPrice: i,
            isCancelled: r,
            isPastDue: l,
            isTrial: c
        }
    }({
        subscription: e
    });
    return {
        guild: A,
        expanded: g,
        handleToggleExpanded: () => h(e => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: p
    }
}