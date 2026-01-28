/** Chunk was on 5606 **/
/** chunk id: 371764, original params: e,t,n (module,exports,require) **/
n.d(t, {
    x: () => E
});
var r = n(627968);
n(64700);
var i = n(110259),
    l = n(877624),
    s = n(934551),
    a = n(158954),
    o = n(232582),
    c = n(732955),
    d = n(397927),
    u = n(212245),
    p = n(688810),
    _ = n(139286),
    m = n(975571),
    g = n(498470),
    f = n(637706),
    b = n(895163),
    h = n(985018),
    A = n(122506);
let E = e => {
    var t, n;
    let {
        componentId: E,
        promotionBannerMarketingComponentFields: x
    } = e, {
        analyticsLocations: O
    } = (0, p.Ay)(), C = (0, u.p)();
    (0, _.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: E
        }
    });
    let y = (0, b.Xn)("marketing_page_banner"),
        j = (0, g.h)({
            buttonAction: y.treatment === b.tz.PLAN_SELECTION ? o.dz.OPEN_PLAN_SELECTION_MODAL : null != (t = null == (n = x.button) ? void 0 : n.buttonAction) ? t : o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: O,
            analyticsLocation: C.location
        }),
        T = (0, f.a)(x.body);
    return (0, r.jsxs)("div", {
        className: A.kL,
        children: [(0, r.jsx)("div", {
            className: A.LY,
            children: (0, r.jsx)(d._V3, {
                src: x.assetUrl,
                width: 96,
                height: 96,
                className: A.ot
            })
        }), (0, r.jsxs)("div", {
            className: A.IH,
            children: [(0, r.jsx)(a.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: x.header
            }), (0, r.jsxs)(a.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: A.tb,
                children: [T, "" !== x.helpArticleId && (0, r.jsxs)(r.Fragment, {
                    children: ["\xa0", (0, r.jsx)(d.MzZ, {
                        className: A.$T,
                        href: m.A.getArticleURL(x.helpArticleId),
                        children: h.intl.string(h.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != x.button && (0, r.jsx)("div", {
            className: A.UD,
            children: (0, r.jsx)(c.$nd, {
                variant: "expressive",
                size: "md",
                onClick: j,
                text: x.button.copy,
                icon: s.NitroWheelIcon
            })
        })]
    })
}