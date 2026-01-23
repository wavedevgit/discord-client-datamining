/** Chunk was on web.js **/
/** chunk id: 371764, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => b
});
var r = n(627968);
n(64700);
var i = n(110259),
    a = n(877624),
    s = n(934551),
    o = n(158954),
    l = n(232582),
    c = n(732955),
    u = n(397927),
    d = n(212245),
    f = n(688810),
    p = n(139286),
    _ = n(975571),
    h = n(498470),
    m = n(637706),
    g = n(895163),
    E = n(985018),
    y = n(122506);
let b = e => {
    var t, n;
    let {
        componentId: b,
        promotionBannerMarketingComponentFields: O
    } = e, {
        analyticsLocations: v
    } = (0, f.Ay)(), A = (0, d.p)();
    (0, p.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: a.C.MARKETING_PAGE_BANNER,
            component_id: b
        }
    });
    let I = O,
        S = (0, g.Xn)("marketing_page_banner"),
        T = (0, h.h)({
            buttonAction: S.treatment === g.tz.PLAN_SELECTION ? l.dz.OPEN_PLAN_SELECTION_MODAL : null != (t = null == (n = I.button) ? void 0 : n.buttonAction) ? t : l.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: v,
            analyticsLocation: A.location
        }),
        C = (0, m.a)(I.body);
    return (0, r.jsxs)("div", {
        className: y.kL,
        children: [(0, r.jsx)("div", {
            className: y.LY,
            children: (0, r.jsx)(u._V3, {
                src: I.assetUrl,
                width: 96,
                height: 96,
                className: y.ot
            })
        }), (0, r.jsxs)("div", {
            className: y.IH,
            children: [(0, r.jsx)(o.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: I.header
            }), (0, r.jsxs)(o.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: y.tb,
                children: [C, "" !== I.helpArticleId && (0, r.jsxs)(r.Fragment, {
                    children: ["\xa0", (0, r.jsx)(u.MzZ, {
                        className: y.$T,
                        href: _.A.getArticleURL(I.helpArticleId),
                        children: E.intl.string(E.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != I.button && (0, r.jsx)("div", {
            className: y.UD,
            children: (0, r.jsx)(c.$nd, {
                variant: "expressive",
                size: "md",
                onClick: T,
                text: I.button.copy,
                icon: s.NitroWheelIcon
            })
        })]
    })
}