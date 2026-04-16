/** chunk id: 233761 params = (module,exports,require) **/
t.d(i, {
    A: () => p
});
var l = t(627968),
    s = t(64700),
    n = t(503698),
    a = t.n(n),
    r = t(397927),
    o = t(793574),
    d = t(688810),
    c = t(404374),
    u = t(772366),
    m = t(954571),
    _ = t(652215),
    h = t(788868),
    x = t(985018),
    g = t(310253);

function p(e) {
    let {
        className: i
    } = e, {
        analyticsLocations: t,
        sourceAnalyticsLocations: n
    } = (0, d.Ay)(o.A.PREMIUM_UPSELL_TOOLTIP);
    return s.useEffect(() => {
        m.default.track(_.HAw.PREMIUM_UPSELL_VIEWED, {
            type: h.e.GUILD_CAP_INLINE_INVITE_MODAL,
            location: {
                page: _.liQ.NATIVE_INVITE_MODAL
            },
            location_stack: n
        })
    }, [n]), (0, l.jsxs)(r.DUT, {
        onClick: () => (0, u.A)({
            analyticsSource: {
                page: _.ThZ.EXTERNAL_INVITE_LINK_MODAL
            },
            analyticsLocation: {
                page: _.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                section: _.JJy.GUILD_CAP_UPSELL_MODAL
            },
            analyticsLocations: t
        }),
        className: a()(g.fA, i),
        children: [(0, l.jsx)(r.tvc, {
            size: "md",
            className: g.Y2,
            color: c.k0.PREMIUM_TIER_2
        }), (0, l.jsx)("span", {
            className: g.Cq,
            children: x.intl.string(x.t["4/W4Pz"])
        }), (0, l.jsx)("span", {
            className: g.MY,
            children: x.intl.string(x.t.b6KOkI)
        })]
    })
}