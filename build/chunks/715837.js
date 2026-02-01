/** chunk id: 715837, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(228524);
var r = n(627968);
n(64700);
var i = n(397927),
    l = n(599941),
    a = n(922975),
    s = n(700206),
    o = n(950344),
    c = n(815332),
    u = n(456540),
    d = n(136179),
    p = n(250253),
    h = n(406140),
    g = n(652215),
    m = n(985018),
    f = n(510465);
let A = e => {
    var t, n;
    let {
        guild: A
    } = e, _ = (0, l.uk)(A.id)[0];
    (0, o.A)({
        guildId: A.id,
        groupListingId: null == _ ? void 0 : _.id,
        location: g.ThZ.ROLE_SUBSCRIPTIONS_TAB,
        relevantSubscriptionListingIds: null == _ ? void 0 : _.subscription_listings_ids
    });
    let {
        activeSubscription: b
    } = (0, s.A)(null == _ ? void 0 : _.id), E = (0, l.Tq)(A.id), O = null == E ? void 0 : E.description, {
        editStateIds: y
    } = a.d0(null != (t = null == _ ? void 0 : _.id) ? t : null, A.id);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsxs)(h.A, {
            title: m.intl.format(m.t["rm+ojA"], {
                serverName: A.name
            }),
            description: null != O ? O : null,
            coverImageAsset: null != (n = null == E ? void 0 : E.cover_image_asset) ? n : null,
            guild: A,
            children: [null != _ ? (0, r.jsx)(c.A, {
                className: f.Ds,
                groupListingId: _.id,
                subscription: b
            }) : null, (0, r.jsx)(u.A, {
                subscription: b
            })]
        }), (0, r.jsx)(i.Fmo, {
            children: (0, r.jsx)(d.A, {
                guildId: A.id,
                children: y.map(e => {
                    var t;
                    return (0, r.jsx)(p.A, {
                        guildId: A.id,
                        groupListingId: null != (t = null == _ ? void 0 : _.id) ? t : "",
                        listingId: e,
                        analyticsLocation: g.ThZ.ROLE_SUBSCRIPTIONS_TAB
                    }, e)
                })
            })
        })]
    })
}