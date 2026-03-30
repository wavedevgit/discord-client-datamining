/** chunk id: 371764 params = (module,exports,require) **/
n.d(t, {
    x: () => T
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
    m = n(688810),
    _ = n(139286),
    g = n(975571),
    x = n(498470),
    A = n(637706),
    h = n(985018),
    p = n(308785);
let T = e => {
    let {
        componentId: t,
        promotionBannerMarketingComponentFields: n
    } = e, {
        analyticsLocations: T
    } = (0, m.Ay)(), f = (0, u.p)();
    (0, _.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: t
        }
    });
    let S = (0, x.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: T,
            analyticsLocation: f.location
        }),
        E = (0, A.a)(n.body);
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
            children: [(0, i.jsx)(r.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: n.header
            }), (0, i.jsxs)(r.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: p.tb,
                children: [E, "" !== n.helpArticleId && (0, i.jsxs)(i.Fragment, {
                    children: ["\xa0", (0, i.jsx)(c.MzZ, {
                        className: p.$T,
                        href: g.A.getArticleURL(n.helpArticleId),
                        children: h.intl.string(h.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != n.button && (0, i.jsx)("div", {
            className: p.UD,
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