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
    A = n(498470),
    x = n(637706),
    p = n(985018),
    h = n(122506);
let T = e => {
    let {
        componentId: t,
        promotionBannerMarketingComponentFields: n
    } = e, {
        analyticsLocations: T
    } = (0, m.Ay)(), E = (0, u.p)();
    (0, _.A)({
        type: s.ImpressionTypes.VIEW,
        name: s.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: t
        }
    });
    let f = (0, A.h)({
            buttonAction: n.button?.buttonAction ?? o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: T,
            analyticsLocation: E.location
        }),
        S = (0, x.a)(n.body);
    return (0, i.jsxs)("div", {
        className: h.kL,
        children: [(0, i.jsx)("div", {
            className: h.LY,
            children: (0, i.jsx)("img", {
                src: n.assetUrl,
                className: h.ot,
                alt: ""
            })
        }), (0, i.jsxs)("div", {
            className: h.IH,
            children: [(0, i.jsx)(r.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: n.header
            }), (0, i.jsxs)(r.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: h.tb,
                children: [S, "" !== n.helpArticleId && (0, i.jsxs)(i.Fragment, {
                    children: ["\xa0", (0, i.jsx)(c.MzZ, {
                        className: h.$T,
                        href: g.A.getArticleURL(n.helpArticleId),
                        children: p.intl.string(p.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != n.button && (0, i.jsx)("div", {
            className: h.UD,
            children: (0, i.jsx)(d.$nd, {
                variant: "expressive",
                size: "md",
                onClick: f,
                text: n.button.copy,
                icon: a.NitroWheelIcon
            })
        })]
    })
}