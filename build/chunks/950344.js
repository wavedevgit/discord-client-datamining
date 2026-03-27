/** chunk id: 950344 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => A
});
var i = n(64700),
    s = n(311907),
    l = n(58149),
    a = n(688810),
    r = n(976860),
    o = n(954571),
    c = n(300233),
    d = n(636194),
    u = n(700206),
    h = n(652215);

function A(e) {
    let {
        guildId: t,
        groupListingId: n,
        location: A,
        relevantSubscriptionListingIds: m
    } = e, _ = (0, c.X)("useTrackRoleSubscriptionUpsellAnalytics"), {
        activeSubscription: p
    } = (0, u.A)(n), g = null != p, f = (0, s.yK)([d.A], () => (m ?? []).filter(e => d.A.getSubscriptionListing(e)?.published === !0), [m]), {
        analyticsLocations: x
    } = (0, a.Ay)((0, r.UC)() ?? []), C = i.useRef(!1);
    i.useEffect(() => {
        _ && null != n && null != f && !C.current && (C.current = !0, o.default.track(h.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, {
            role_subscription_group_listing_id: n,
            role_subscription_listing_ids: f,
            is_premium_member: g,
            location_stack: x,
            location: A,
            ...(0, l.H$)(t)
        }))
    }, [t, n, _, A, f, g, x])
}