/** chunk id: 284605 params = (module,exports,require) **/
n.d(t, {
    i: () => E
});
var i = n(627968);
n(64700);
var l = n(417597),
    s = n(732955),
    r = n(492749),
    a = n(827186),
    o = n(465932),
    d = n(317525),
    c = n(71393),
    u = n(957565),
    _ = n(250627),
    m = n(253141),
    h = n(579970),
    p = n(500770),
    g = n(571654),
    A = n(482711),
    x = n(897518),
    f = n(10979),
    C = n(652215);

function E(e) {
    let {
        guildProductListing: t,
        guildId: n,
        location: E,
        shouldShowFullDescriptionButton: I = !0,
        hideRoleTag: v = !1,
        lineClamp: b = 1,
        cardWidth: T,
        cardHeight: N,
        thumbnailHeight: S,
        descriptionTextVariant: y = "text-sm/normal",
        showOpaqueBackground: j = !1
    } = e, L = (0, l.bG)([c.A], () => c.A.getGuild(n), [n]), R = (0, l.bG)([d.A], () => d.A.getRole(n, t?.role_id ?? C.dJq)), P = (0, r.R)(t, 600), D = (0, g.z)(t), M = (0, _.BB)(L), {
        shouldHideGuildPurchaseEntryPoints: w
    } = (0, o.MH)(n), O = (0, g.X)(t), k = (0, x.A)({
        guildId: n,
        guildProductListingId: t.id,
        sourceAnalyticsLocations: E
    });
    if (null == L || w) return null;
    let U = () => (0, f.M)({
            guildId: n,
            guildProductListingId: t.id,
            analyticsLocation: E
        }),
        B = (0, i.jsx)(A.i, {
            product: t,
            guildId: n,
            showEditProduct: M,
            showUnpublishProduct: !1,
            showCopyLink: !0,
            showTestDownload: !1,
            showDeleteProduct: !1,
            showReportProduct: !0,
            onEditProduct: M ? () => {
                h.q(L.id, t.id)
            } : () => {},
            onUnpublishProduct: () => {},
            onDeleteProduct: () => {},
            onReportProduct: () => {
                (0, a.F)({
                    listing: t
                })
            },
            onCopyProductLink: () => {
                (0, u.C)((0, m.KW)(n, t.id))
            },
            onTestDownload: () => {}
        });
    return (0, i.jsx)(p.A, {
        imageUrl: P,
        name: t.name,
        description: t.description,
        formattedPrice: O,
        role: R,
        ctaComponent: (0, i.jsx)(s.$nd, {
            ...k
        }),
        productType: D,
        shouldShowFullDescriptionButton: I,
        onShowFullDescription: U,
        onTapCard: U,
        actionMenu: B,
        showOpaqueBackground: j,
        hideRoleTag: v,
        lineClamp: b,
        cardWidth: T,
        cardHeight: N,
        thumbnailHeight: S,
        descriptionTextVariant: y,
        isDraft: !t.published
    }, t.id)
}