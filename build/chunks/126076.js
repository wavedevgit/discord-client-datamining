/** chunk id: 126076 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => m
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(311907),
    s = n(688810),
    o = n(139286),
    a = n(49463),
    u = n(976860),
    d = n(71393),
    c = n(363487),
    p = n(484612);

function m(e) {
    let {
        guildId: t,
        powerupListingId: n
    } = e, m = (0, l.bG)([d.A], () => d.A.getGuild(t)), _ = (0, l.bG)([a.A], () => a.A.hasLoadedExperiments), A = (0, c.A)(t), f = (0, u.PR)(), g = !_ || null == A || null == m, x = (0, s.Ay)(null != f ? f : []);
    return ((0, o.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.BOOST_SHOP_OPENED,
        properties: {
            location_stack: x.analyticsLocations
        }
    }, {
        disableTrack: g
    }), g) ? null : (0, r.jsx)(p.A, {
        guildId: t,
        powerupListingId: n
    })
}