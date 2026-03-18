/** chunk id: 979080 params = (module,exports,require) **/
n.d(t, {
    H: () => g,
    default: () => p
});
var i = n(627968);
n(64700);
var a = n(65412),
    l = n(554146),
    r = n(287683),
    s = n(397927),
    o = n(212245),
    d = n(736653),
    c = n(793574),
    u = n(688810),
    A = n(826673),
    h = n(728458),
    _ = n(716600),
    m = n(848295);

function g(e) {
    let {
        promotionId: t,
        content: n,
        isPreview: i
    } = e, s = r.m.fromBinary((0, a.A)(n));
    if ("announcementModalVariant1" !== s.properties.oneofKind) return null;
    {
        let {
            isDismissed: e
        } = (0, A.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !i && e ? null : (i && (s.properties.announcementModalVariant1.dismissKey = ""), s)
    }
}

function p(e) {
    let {
        componentId: t,
        promotionId: n,
        renderModalProps: a,
        properties: l
    } = e, {
        location: r
    } = (0, o.p)(), {
        analyticsLocations: A
    } = (0, u.Ay)(c.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), g = (0, d.Ay)(), p = (0, s.qB1)(g);
    if ("announcementModalVariant1" === l.properties.oneofKind) {
        let e = (0, _.t)({
            componentId: t,
            promotionId: n,
            content: l.properties.announcementModalVariant1,
            renderModalProps: a,
            analyticsLocations: A,
            analyticsLocation: r,
            isLightTheme: p
        });
        return (0, i.jsx)(m.A, {
            ...e
        })
    }
    return h.A.captureMessage(`Property type ${l.properties.oneofKind} is not supported to render ServerDriveAnnouncementModal`), null
}