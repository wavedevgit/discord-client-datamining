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
    c = n(232582),
    o = n(732955),
    d = n(397927),
    u = n(212245),
    _ = n(688810),
    m = n(139286),
    p = n(975571),
    A = n(498470),
    g = n(637706),
    x = n(985018),
    h = n(308785);
let f = e => {
    let {
        componentId: t,
        promotionBannerMarketingComponentFields: n
    } = e, {
        analyticsLocations: f
    } = (0, _.Ay)(), b = (0, u.p)();
    (0, m.A)({
        type: r.ImpressionTypes.VIEW,
        name: r.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.C.MARKETING_PAGE_BANNER,
            component_id: t
        }
    });
    let N = (0, A.h)({
            buttonAction: n.button?.buttonAction ?? c.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: f,
            analyticsLocation: b.location
        }),
        R = (0, g.a)(n.body);
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
            children: [(0, i.jsx)(l.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: n.header
            }), (0, i.jsxs)(l.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: h.tb,
                children: [R, "" !== n.helpArticleId && (0, i.jsxs)(i.Fragment, {
                    children: ["\xa0", (0, i.jsx)(d.MzZ, {
                        className: h.$T,
                        href: p.A.getArticleURL(n.helpArticleId),
                        children: x.intl.string(x.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != n.button && (0, i.jsx)("div", {
            className: h.UD,
            children: (0, i.jsx)(o.$nd, {
                variant: "expressive",
                size: "md",
                onClick: N,
                text: n.button.copy,
                icon: s.NitroWheelIcon
            })
        })]
    })
}