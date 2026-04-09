/** chunk id: 641563 params = (module,exports,require) **/
a.d(t, {
    Z: () => u
});
var n = a(627968),
    r = a(64700),
    i = a(397927),
    s = a(688810),
    l = a(532794),
    o = a(758836),
    c = a(788868),
    d = a(319278);
let u = e => {
    let {
        text: t,
        onTrackClick: a
    } = e, {
        analyticsLocations: u
    } = (0, s.Ay)(), m = r.useRef(null);
    return (0, n.jsx)(i.DUT, {
        className: d.F,
        innerRef: m,
        onClick: () => {
            a?.(o.sH.SUBSCRIBE_NOW), (0, l.A)({
                subscriptionTier: c.pe.TIER_2,
                analyticsLocations: u,
                returnRef: m
            })
        },
        children: t
    })
}