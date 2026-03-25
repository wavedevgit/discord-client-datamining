/** chunk id: 126076 params = (module,exports,require) **/
n.r(t), n.d(t, {
    default: () => p
});
var r = n(627968);
n(64700);
var i = n(110259),
    s = n(311907),
    l = n(688810),
    o = n(139286),
    a = n(49463),
    d = n(976860),
    u = n(71393),
    c = n(363487),
    m = n(484612);

function p(e) {
    let {
        guildId: t,
        powerupListingId: n
    } = e, p = (0, s.bG)([u.A], () => u.A.getGuild(t)), _ = (0, s.bG)([a.A], () => a.A.hasLoadedExperiments), f = (0, c.A)(t), g = (0, d.PR)(), x = !_ || null == f || null == p, A = (0, l.Ay)(null != g ? g : []);
    return ((0, o.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.BOOST_SHOP_OPENED,
        properties: {
            location_stack: A.analyticsLocations
        }
    }, {
        disableTrack: x
    }), x) ? null : (0, r.jsx)(m.A, {
        guildId: t,
        powerupListingId: n
    })
}