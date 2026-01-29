/** Chunk was on 1113 **/
/** chunk id: 950344, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
});
var r = n(64700),
    l = n(311907),
    i = n(58149),
    s = n(688810),
    a = n(976860),
    o = n(954571),
    c = n(300233),
    u = n(636194),
    d = n(700206),
    h = n(652215);

function p(e) {
    var t;
    let {
        guildId: n,
        groupListingId: p,
        location: g,
        relevantSubscriptionListingIds: f
    } = e, m = (0, c.X)("useTrackRoleSubscriptionUpsellAnalytics"), {
        activeSubscription: b
    } = (0, d.A)(p), A = null != b, y = (0, l.yK)([u.A], () => (null != f ? f : []).filter(e => {
        var t;
        return (null == (t = u.A.getSubscriptionListing(e)) ? void 0 : t.published) === !0
    }), [f]), {
        analyticsLocations: O
    } = (0, s.Ay)(null != (t = (0, a.UC)()) ? t : []), _ = r.useRef(!1);
    r.useEffect(() => {
        m && null != p && null != y && !_.current && (_.current = !0, o.default.track(h.HAw.ROLE_SUBSCRIPTION_LISTING_UPSELL_PAGE_VIEWED, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({
            role_subscription_group_listing_id: p,
            role_subscription_listing_ids: y,
            is_premium_member: A,
            location_stack: O,
            location: g
        }, (0, i.H$)(n))))
    }, [n, p, m, g, y, A, O])
}