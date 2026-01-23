/** Chunk was on 69079 **/
/** chunk id: 519146, original params: e,t,n (module,exports,require) **/
n.d(t, {
    default: () => A
}), n(228524);
var r = n(627968);
n(64700);
var l = n(284009),
    a = n.n(l),
    i = n(110259),
    s = n(158954),
    o = n(311907),
    c = n(397927),
    d = n(793574),
    u = n(139286),
    x = n(308234),
    m = n(303612),
    f = n(71393),
    h = n(871109),
    p = n(571654),
    j = n(819968),
    _ = n(897518),
    g = n(985018),
    b = n(451144);

function A(e) {
    var t, n;
    let {
        transitionState: l,
        guildProductListingId: A,
        analyticsLocation: O,
        guildId: v,
        onClose: y
    } = e, N = (0, o.bG)([h.A], () => h.A.getGuildProduct(A));
    a()(null != N, "guildProductListing cannot be null"), (0, u.A)({
        type: i.ImpressionTypes.MODAL,
        name: i.ImpressionNames.GUILD_PRODUCT_LISTING_INFO_MODAL,
        properties: {
            guild_product_listing_id: A,
            has_entitlement: !0 === N.has_entitlement,
            location: O
        }
    });
    let I = null != (t = (0, p.z)(N)) ? t : "",
        D = (0, p.X)(N),
        z = (0, o.bG)([f.A], () => f.A.getGuild(v)),
        P = (0, _.A)({
            guildId: v,
            guildProductListingId: A,
            sourceAnalyticsLocations: d.A.GUILD_PRODUCT_INFO_MODAL
        });
    return (0, r.jsxs)(s.Modal, {
        title: N.name,
        subtitle: g.intl.format(g.t.xImSei, {
            productType: I,
            personName: null != (n = null == z ? void 0 : z.name) ? n : ""
        }),
        size: "md",
        transitionState: l,
        onClose: y,
        "aria-label": N.name,
        actions: [P],
        actionBarInput: (0, r.jsx)(c.Text, {
            tag: "div",
            variant: "heading-xl/semibold",
            color: "text-strong",
            children: D
        }),
        children: [(0, r.jsx)(m.y, {
            height: 267,
            listing: N,
            className: b.F0,
            alt: ""
        }), (0, r.jsxs)("div", {
            className: b.rf,
            children: [(0, r.jsx)(j.A, {
                listing: N
            }), (0, r.jsx)(c.hKd, {
                size: 16
            }), (0, r.jsx)("div", {
                className: b.OO
            }), (0, r.jsx)(c.hKd, {
                size: 16
            }), (0, r.jsx)(c.Heading, {
                variant: "heading-lg/medium",
                color: "text-strong",
                children: g.intl.string(g.t.TNnDJs)
            }), (0, r.jsx)(c.hKd, {
                size: 12
            }), (0, r.jsx)(x.A, {
                className: b.h_,
                variant: "text-md/normal",
                color: "text-muted",
                text: N.description
            })]
        })]
    })
}