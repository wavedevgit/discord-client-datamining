/** chunk id: 897518 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(284009),
    l = n.n(i),
    s = n(417597),
    r = n(71393),
    a = n(250627),
    o = n(871109),
    d = n(935453),
    c = n(179499),
    u = n(985018);

function _(e) {
    let {
        guildId: t,
        guildProductListingId: n,
        sourceAnalyticsLocations: i
    } = e, _ = (0, s.bG)([o.A], () => o.A.getGuildProduct(n)), m = (0, s.bG)([r.A], () => r.A.getGuild(t), [t]), h = (0, c.A)({
        guildId: t,
        productId: n
    });
    return (l()(null != m, "guild cannot be null"), l()(null != _, "guildProductListing cannot be null"), (0, a.BB)(m)) ? {
        variant: "primary",
        text: u.intl.string(u.t.xUi3BL),
        disabled: !0
    } : _.has_entitlement ? null != _.attachments ? h : {
        variant: "secondary",
        text: u.intl.string(u.t.RcTOGF),
        disabled: !0
    } : {
        variant: "primary",
        text: u.intl.string(u.t.xUi3BL),
        onClick: () => (0, d.N)({
            guildProductListing: _,
            guildId: m.id,
            sourceAnalyticsLocations: i
        })
    }
}