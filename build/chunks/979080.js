/** chunk id: 979080, original params: e,t,n (module,exports,require) **/
n.d(t, {
    H: () => f,
    default: () => A
});
var r = n(627968);
n(64700);
var i = n(65412),
    l = n(554146),
    a = n(287683),
    s = n(397927),
    o = n(212245),
    c = n(736653),
    u = n(793574),
    d = n(688810),
    p = n(826673),
    h = n(728458),
    g = n(716600),
    m = n(848295);

function f(e) {
    let {
        promotionId: t,
        content: n,
        isPreview: r
    } = e, s = a.m.fromBinary((0, i.A)(n));
    if ("announcementModalVariant1" !== s.properties.oneofKind) return null;
    {
        let {
            isDismissed: e
        } = (0, p.u$)(l.M.PREMIUM_MARKETING_MOMENT_ANNOUNCEMENT_UPSELL, t);
        return !r && e ? null : (r && (s.properties.announcementModalVariant1.dismissKey = ""), s)
    }
}

function A(e) {
    let {
        componentId: t,
        promotionId: n,
        renderModalProps: i,
        properties: l
    } = e, {
        location: a
    } = (0, o.p)(), {
        analyticsLocations: p
    } = (0, d.Ay)(u.A.PREMIUM_MARKETING_ANNOUNCEMENT_MODAL), f = (0, c.Ay)(), A = (0, s.qB1)(f);
    if ("announcementModalVariant1" === l.properties.oneofKind) {
        let e = (0, g.t)({
            componentId: t,
            promotionId: n,
            content: l.properties.announcementModalVariant1,
            renderModalProps: i,
            analyticsLocations: p,
            analyticsLocation: a,
            isLightTheme: A
        });
        return (0, r.jsx)(m.A, function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    var r;
                    r = n[t], t in e ? Object.defineProperty(e, t, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = r
                })
            }
            return e
        }({}, e))
    }
    return h.A.captureMessage("Property type ".concat(l.properties.oneofKind, " is not supported to render ServerDriveAnnouncementModal")), null
}