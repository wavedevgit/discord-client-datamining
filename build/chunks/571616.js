/** chunk id: 571616, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
});
var r = n(627968);
n(64700);
var i = n(793574),
    l = n(688810),
    a = n(64983),
    s = n(631305),
    o = n(473145),
    c = n(652215),
    u = n(49999),
    d = n(874864),
    p = n(985018),
    h = n(664795);

function f(e) {
    let {
        guild: t,
        markAsDismissed: n
    } = e, f = (0, o.Os)(t, c.TVA.TIER_2), {
        analyticsLocations: g
    } = (0, l.Ay)(i.A.GUILD_BANNER_NOTICE);
    return (0, r.jsx)(a.A, {
        guild: t,
        onDismissed: () => n(u.i.UNKNOWN),
        cta: p.intl.string(p.t.oPAx73),
        message: p.intl.format(p.t.AcaNYw, {
            boostsNeeded: f
        }),
        type: c.n5X.GUILD_BANNER,
        image: h,
        onClick: () => (0, s.A)({
            analyticsLocations: g,
            analyticsSourceLocation: {
                section: c.JJy.CHANNEL_NOTICE,
                object: c.ZSU.SERVER_BANNER_TOOLTIP
            },
            guild: t,
            perks: (0, d.QR)()
        }),
        imageMarginTop: 15,
        imageMarginX: 22
    })
}