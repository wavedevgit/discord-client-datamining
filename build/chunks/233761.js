/** chunk id: 233761 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var l = i(627968),
    n = i(64700),
    a = i(503698),
    s = i.n(a),
    r = i(397927),
    d = i(793574),
    c = i(688810),
    o = i(404374),
    u = i(772366),
    m = i(954571),
    x = i(652215),
    _ = i(788868),
    h = i(985018),
    g = i(929252);

function A(e) {
    let {
        className: t
    } = e, {
        analyticsLocations: i,
        sourceAnalyticsLocations: a
    } = (0, c.Ay)(d.A.PREMIUM_UPSELL_TOOLTIP);
    return n.useEffect(() => {
        m.default.track(x.HAw.PREMIUM_UPSELL_VIEWED, {
            type: _.e.GUILD_CAP_INLINE_INVITE_MODAL,
            location: {
                page: x.liQ.NATIVE_INVITE_MODAL
            },
            location_stack: a
        })
    }, [a]), (0, l.jsxs)(r.DUT, {
        onClick: () => (0, u.A)({
            analyticsSource: {
                page: x.ThZ.EXTERNAL_INVITE_LINK_MODAL
            },
            analyticsLocation: {
                page: x.ThZ.EXTERNAL_INVITE_LINK_MODAL,
                section: x.JJy.GUILD_CAP_UPSELL_MODAL
            },
            analyticsLocations: i
        }),
        className: s()(g.fA, t),
        children: [(0, l.jsx)(r.tvc, {
            size: "md",
            className: g.Y2,
            color: o.k0.PREMIUM_TIER_2
        }), (0, l.jsx)("span", {
            className: g.Cq,
            children: h.intl.string(h.t["4/W4Pz"])
        }), (0, l.jsx)("span", {
            className: g.MY,
            children: h.intl.string(h.t.b6KOkI)
        })]
    })
}