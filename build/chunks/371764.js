/** chunk id: 371764 params = (module,exports,require) **/
n.d(t, {
    x: () => f
});
var i = n(627968);
n(64700);
var r = n(110259),
    a = n(877624),
    s = n(934551),
    l = n(158954),
    o = n(232582),
    c = n(732955),
    d = n(397927),
    u = n(212245),
    _ = n(688810),
    m = n(139286),
    p = n(498470),
    g = n(637706),
    A = n(308785);
let f = e => {
    let {
        componentId: t,
        promotionBannerMarketingComponentFields: n
    } = e, {
        analyticsLocations: f
    } = (0, _.Ay)(), h = (0, u.p)();
    (0, m.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.C.MARKETING_PAGE_BANNER,
            component_id: t
        }
    });
    let b = (0, p.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: f,
            analyticsLocation: h.location
        }),
        x = (0, g.a)(n.body),
        C = (0, g.C)(n.helpArticle, n.helpArticleId);
    return (0, i.jsxs)("div", {
        className: A.kL,
        children: [(0, i.jsx)("div", {
            className: A.LY,
            children: (0, i.jsx)("img", {
                src: n.assetUrl,
                className: A.ot,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: A.IH,
            children: [(0, i.jsx)(l.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: n.header
            }), (0, i.jsxs)(l.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: A.tb,
                children: [x, null != C && (0, i.jsxs)(i.Fragment, {
                    children: ["\xa0", (0, i.jsx)(d.MzZ, {
                        className: A.$T,
                        href: C.url,
                        children: C.linkText
                    })]
                })]
            })]
        }), null != n.button && (0, i.jsx)("div", {
            className: A.UD,
            children: (0, i.jsx)(c.$nd, {
                variant: "expressive",
                size: "md",
                onClick: b,
                text: n.button.copy,
                icon: s.NitroWheelIcon
            })
        })]
    })
}