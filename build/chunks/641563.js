/** chunk id: 641563 params = (module,exports,require) **/
n.d(t, {
    Z: () => u
});
var a = n(627968),
    r = n(64700),
    i = n(397927),
    s = n(688810),
    l = n(532794),
    c = n(758836),
    o = n(788868),
    d = n(447806);
let u = e => {
    let {
        text: t,
        onTrackClick: n
    } = e, {
        analyticsLocations: u
    } = (0, s.Ay)(), m = r.useRef(null);
    return (0, a.jsx)(i.DUT, {
        className: d.F,
        innerRef: m,
        onClick: () => {
            n?.(c.sH.SUBSCRIBE_NOW), (0, l.A)({
                subscriptionTier: o.pe.TIER_2,
                analyticsLocations: u,
                returnRef: m
            })
        },
        children: t
    })
}