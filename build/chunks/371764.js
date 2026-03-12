/** chunk id: 371764 params = (module,exports,require) **/
n.d(t, {
    x: () => E
});
var i = n(627968);
n(64700);
var s = n(110259),
    l = n(877624),
    a = n(934551),
    r = n(158954),
    o = n(232582),
    d = n(732955),
    c = n(397927),
    u = n(212245),
    _ = n(688810),
    g = n(139286),
    m = n(975571),
    A = n(498470),
    h = n(637706),
    p = n(985018),
    x = n(577504);
let E = e => {
    let {
        componentId: t,
        promotionBannerMarketingComponentFields: n
    } = e, {
        analyticsLocations: E
    } = (0, _.Ay)(), T = (0, u.p)();
    (0, g.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: t
        }
    });
    let S = (0, A.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: E,
            analyticsLocation: T.location
        }),
        C = (0, h.a)(n.body);
    return (0, i.jsxs)("div", {
        className: x.kL,
        children: [(0, i.jsx)("div", {
            className: x.LY,
            children: (0, i.jsx)("img", {
                src: n.assetUrl,
                className: x.ot,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: x.IH,
            children: [(0, i.jsx)(r.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: n.header
            }), (0, i.jsxs)(r.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: x.tb,
                children: [C, "" !== n.helpArticleId && (0, i.jsxs)(i.Fragment, {
                    children: ["\xa0", (0, i.jsx)(c.MzZ, {
                        className: x.$T,
                        href: m.A.getArticleURL(n.helpArticleId),
                        children: p.intl.string(p.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != n.button && (0, i.jsx)("div", {
            className: x.UD,
            children: (0, i.jsx)(d.$nd, {
                variant: "expressive",
                size: "md",
                onClick: S,
                text: n.button.copy,
                icon: a.NitroWheelIcon
            })
        })]
    })
}