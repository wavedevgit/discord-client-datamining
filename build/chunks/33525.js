/** chunk id: 33525, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p
}), n(896048), n(747238);
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(417597),
    a = n(793574),
    s = n(139286),
    o = n(967198),
    c = n(250627),
    u = n(284605),
    d = n(412728);

function p(e) {
    let {
        code: t
    } = e, [n, p] = t.split("-"), m = (0, c.Qi)(n, p), f = (0, l.bG)([o.A], () => o.A.getGuildId());
    return ((0, s.A)({
        type: d.z.VIEW,
        name: i.ImpressionNames.GUILD_PRODUCT_LISTING_EMBED,
        properties: {
            guild_product_listing_id: p,
            has_entitlement: (null == m ? void 0 : m.has_entitlement) === !0
        }
    }, {
        disableTrack: null == m
    }), null == m || f !== n) ? null : (0, r.jsx)(u.i, {
        guildProductListing: m,
        guildId: n,
        location: a.A.GUILD_PRODUCT_EMBED_CARD,
        cardWidth: 390,
        thumbnailHeight: 219
    })
}