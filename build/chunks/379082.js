/** chunk id: 379082 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(64700),
    s = n(989349),
    l = n.n(s),
    a = n(311907),
    r = n(71393),
    o = n(580630),
    d = n(599941),
    c = n(636194),
    u = n(624456),
    _ = n(652215),
    m = n(985018);

function g(e) {
    let t = (0, u.M)(e),
        n = (0, a.bG)([c.A], () => c.A.getSubscriptionListingForPlan(t)),
        s = (0, a.bG)([c.A], () => null != n ? c.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
        g = (0, a.bG)([r.A], () => r.A.getGuild(s?.guild_id)),
        [A, h] = i.useState(!1),
        {
            fetchSubscriptionsSettings: x
        } = (0, d.XE)();
    i.useEffect(() => {
        A && null != g && null == c.A.getSubscriptionSettings(g.id) && x(g.id)
    }, [A, g, x]);
    let p = null == n ? void 0 : function(e) {
        let {
            subscription: t
        } = e, n = l()(t.currentPeriodEnd).format("M/D/YY"), i = null != t.price ? (0, o.$g)(t.price, t.currency) : "", s = l()(t.createdAt).format("M/D/YY"), a = t.status === _.Dmq.CANCELED, r = t.status === _.Dmq.PAST_DUE, d = t.hasActiveTrial;
        return {
            memberSince: s,
            nextRenewalDate: n,
            nextRenewalLabel: a ? m.intl.string(m.t.UAfot2) : m.intl.string(m.t.CVjLcM),
            subscriptionPrice: i,
            isCancelled: a,
            isPastDue: r,
            isTrial: d
        }
    }({
        subscription: e
    });
    return {
        guild: g,
        expanded: A,
        handleToggleExpanded: () => h(e => !e),
        listing: n,
        groupListing: s,
        subscriptionInfo: p
    }
}