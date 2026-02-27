/** chunk id: 126076, original params: e,t,n (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => p
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(311907),
    s = n(688810),
    a = n(139286),
    o = n(49463),
    d = n(976860),
    u = n(71393),
    c = n(363487),
    m = n(484612);

function p(e) {
    let {
        guildId: t,
        powerupListingId: n
    } = e, p = (0, l.bG)([u.A], () => u.A.getGuild(t)), _ = (0, l.bG)([o.A], () => o.A.hasLoadedExperiments), x = (0, c.A)(t), A = (0, d.PR)(), f = !_ || null == x || null == p, g = (0, s.Ay)(null != A ? A : []);
    return ((0, a.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.BOOST_SHOP_OPENED,
        properties: {
            location_stack: g.analyticsLocations
        }
    }, {
        disableTrack: f
    }), f) ? null : (0, r.jsx)(m.A, {
        guildId: t,
        powerupListingId: n
    })
}