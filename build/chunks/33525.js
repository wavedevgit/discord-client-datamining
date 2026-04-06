/** chunk id: 33525 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968);
n(64700);
var l = n(110259),
    s = n(417597),
    a = n(793574),
    r = n(139286),
    o = n(967198),
    d = n(250627),
    c = n(284605),
    u = n(412728);

function _(e) {
    let {
        code: t
    } = e, [n, _] = t.split("-"), m = (0, d.Qi)(n, _), h = (0, s.bG)([o.A], () => o.A.getGuildId());
    return ((0, r.A)({
        type: u.z.VIEW,
        name: l.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
        properties: {
            guild_product_listing_id: _,
            has_entitlement: m?.has_entitlement === !0
        }
    }, {
        disableTrack: null == m
    }), null == m || h !== n) ? null : (0, i.jsx)(c.i, {
        guildProductListing: m,
        guildId: n,
        location: a.A.GUILD_PRODUCT_EMBED_CARD,
        cardWidth: 390,
        thumbnailHeight: 219
    })
}