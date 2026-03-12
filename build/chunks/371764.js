/** chunk id: 371764 params = (module,exports,require) **/
n.d(t, {
    x: () => T
});
var i = n(627968);
n(64700);
var s = n(110259),
    l = n(877624),
    r = n(934551),
    a = n(158954),
    o = n(232582),
    d = n(732955),
    c = n(397927),
    u = n(212245),
    _ = n(688810),
    m = n(139286),
    g = n(975571),
    A = n(498470),
    h = n(637706),
    x = n(985018),
    p = n(577504);
let T = e => {
    let {
        componentId: t,
        promotionBannerMarketingComponentFields: n
    } = e, {
        analyticsLocations: T
    } = (0, _.Ay)(), E = (0, u.p)();
    (0, m.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: t
        }
    });
    let C = (0, A.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: T,
            analyticsLocation: E.location
        }),
        S = (0, h.a)(n.body);
    return (0, i.jsxs)("div", {
        className: p.kL,
        children: [(0, i.jsx)("div", {
            className: p.LY,
            children: (0, i.jsx)("img", {
                src: n.assetUrl,
                className: p.ot,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: p.IH,
            children: [(0, i.jsx)(a.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: n.header
            }), (0, i.jsxs)(a.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: p.tb,
                children: [S, "" !== n.helpArticleId && (0, i.jsxs)(i.Fragment, {
                    children: ["\xa0", (0, i.jsx)(c.MzZ, {
                        className: p.$T,
                        href: g.A.getArticleURL(n.helpArticleId),
                        children: x.intl.string(x.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != n.button && (0, i.jsx)("div", {
            className: p.UD,
            children: (0, i.jsx)(d.$nd, {
                variant: "expressive",
                size: "md",
                onClick: C,
                text: n.button.copy,
                icon: r.NitroWheelIcon
            })
        })]
    })
}