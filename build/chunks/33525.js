/** chunk id: 33525 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var l = n(110259),
    r = n(417597),
    s = n(793574),
    a = n(139286),
    o = n(967198),
    d = n(250627),
    c = n(284605),
    u = n(412728);

function m(e) {
    let {
        code: t
    } = e, [n, m] = t.split("-"), _ = (0, d.Qi)(n, m), h = (0, r.bG)([o.A], () => o.A.getGuildId());
    return ((0, a.A)({
        type: u.z.VIEW,
        name: l.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
        properties: {
            guild_product_listing_id: m,
            has_entitlement: _?.has_entitlement === !0
        }
    }, {
        disableTrack: null == _
    }), null == _ || h !== n) ? null : (0, i.jsx)(c.i, {
        guildProductListing: _,
        guildId: n,
        location: s.A.GUILD_PRODUCT_EMBED_CARD,
        cardWidth: 390,
        thumbnailHeight: 219
    })
}