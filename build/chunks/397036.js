/** Chunk was on 41727 **/
/** chunk id: 397036, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048), n(228524);
var r = n(627968),
    l = n(64700),
    i = n(311907),
    s = n(397927),
    a = n(734057),
    o = n(71393),
    c = n(599941),
    u = n(251766),
    d = n(950344),
    p = n(136179),
    h = n(250253),
    f = n(652215),
    g = n(985018),
    m = n(18318);

function b(e) {
    let {
        guildId: t,
        channelId: n
    } = e, b = (0, u.e)({
        guildId: t,
        channelId: n
    }), A = (0, c.uk)(t), y = (0, c.Tq)(t), _ = (0, i.bG)([o.A], () => o.A.getGuild(t), [t]), O = null == _ ? void 0 : _.name, j = (0, i.bG)([a.A], () => a.A.getChannel(n)), v = l.useMemo(() => {
        let e = {};
        for (let t of A)
            for (let n of t.subscription_listings_ids) e[n] = t.id;
        return e
    }, [A]);
    return ((0, d.A)({
        guildId: t,
        location: f.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL,
        relevantSubscriptionListingIds: b.map(e => e.id)
    }), null == _) ? (0, r.jsx)("div", {
        className: m.__invalid_spinnerContainer,
        children: (0, r.jsx)(s.y$y, {
            className: m.__invalid_spinner
        })
    }) : (0, r.jsxs)(s.ArX, {
        className: m.$$,
        children: [(0, r.jsx)(s.Heading, {
            variant: "heading-xl/semibold",
            className: m.DX,
            children: g.intl.format(g.t.xHMpym, {
                serverName: O,
                channelName: null == j ? void 0 : j.name
            })
        }), (0, r.jsx)(s.Text, {
            className: m.Lv,
            variant: "text-md/normal",
            color: "text-default",
            children: null == y ? void 0 : y.description
        }), (0, r.jsx)(p.A, {
            guildId: t,
            children: b.filter(e => null != v[e.id]).map(e => (0, r.jsx)(h.A, {
                guildId: t,
                listingId: e.id,
                groupListingId: v[e.id],
                analyticsLocation: f.ThZ.ROLE_SUBSCRIPTION_GATED_CHANNEL
            }, e.id))
        })]
    })
}