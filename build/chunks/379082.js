/** Chunk was on 5606 **/
/** chunk id: 379082, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
}), n(896048);
var r = n(64700),
    i = n(989349),
    l = n.n(i),
    s = n(311907),
    a = n(71393),
    o = n(580630),
    c = n(599941),
    d = n(636194),
    u = n(624456),
    p = n(652215),
    _ = n(985018);

function m(e) {
    let t = (0, u.M)(e),
        n = (0, s.bG)([d.A], () => d.A.getSubscriptionListingForPlan(t)),
        i = (0, s.bG)([d.A], () => null != n ? d.A.getSubscriptionGroupListingForSubscriptionListing(n.id) : null),
        m = (0, s.bG)([a.A], () => a.A.getGuild(null == i ? void 0 : i.guild_id)),
        [g, f] = r.useState(!1),
        {
            fetchSubscriptionsSettings: b
        } = (0, c.XE)();
    r.useEffect(() => {
        g && null != m && null == d.A.getSubscriptionSettings(m.id) && b(m.id)
    }, [g, m, b]);
    let h = null == n ? void 0 : function(e) {
        let {
            subscription: t
        } = e, n = l()(t.currentPeriodEnd).format("M/D/YY"), r = null != t.price ? (0, o.$g)(t.price, t.currency) : "", i = l()(t.createdAt).format("M/D/YY"), s = t.status === p.Dmq.CANCELED, a = t.status === p.Dmq.PAST_DUE, c = t.hasActiveTrial;
        return {
            memberSince: i,
            nextRenewalDate: n,
            nextRenewalLabel: s ? _.intl.string(_.t.UAfot2) : _.intl.string(_.t.CVjLcM),
            subscriptionPrice: r,
            isCancelled: s,
            isPastDue: a,
            isTrial: c
        }
    }({
        subscription: e
    });
    return {
        guild: m,
        expanded: g,
        handleToggleExpanded: () => f(e => !e),
        listing: n,
        groupListing: i,
        subscriptionInfo: h
    }
}