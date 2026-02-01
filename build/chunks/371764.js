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
    _ = n(688810),
    p = n(139286),
    m = n(975571),
    g = n(498470),
    A = n(637706),
    f = n(895163),
    b = n(985018),
    h = n(122506);
let E = e => {
    var t, n;
    let {
        componentId: E,
        promotionBannerMarketingComponentFields: O
    } = e, {
        analyticsLocations: x
    } = (0, _.Ay)(), C = (0, u.p)();
    (0, p.A)({
        type: i.ImpressionTypes.VIEW,
        name: i.ImpressionNames.PREMIUM_MARKETING_COMPONENT,
        properties: {
            component_type: l.C.MARKETING_PAGE_BANNER,
            component_id: E
        }
    });
    let S = (0, f.Xn)("marketing_page_banner"),
        T = (0, g.h)({
            buttonAction: S.treatment === f.tz.PLAN_SELECTION ? o.dz.OPEN_PLAN_SELECTION_MODAL : null != (t = null == (n = O.button) ? void 0 : n.buttonAction) ? t : o.dz.OPEN_TIER_2_PAYMENT_MODAL,
            analyticsLocations: x,
            analyticsLocation: C.location
        }),
        I = (0, A.a)(O.body);
    return (0, r.jsxs)("div", {
        className: h.kL,
        children: [(0, r.jsx)("div", {
            className: h.LY,
            children: (0, r.jsx)(d._V3, {
                src: O.assetUrl,
                width: 96,
                height: 96,
                className: h.ot
            })
        }), (0, r.jsxs)("div", {
            className: h.IH,
            children: [(0, r.jsx)(a.DZT, {
                variant: "heading-md/semibold",
                color: "text-strong",
                children: O.header
            }), (0, r.jsxs)(a.EYj, {
                variant: "text-md/medium",
                color: "text-subtle",
                className: h.tb,
                children: [I, "" !== O.helpArticleId && (0, r.jsxs)(r.Fragment, {
                    children: ["\xa0", (0, r.jsx)(d.MzZ, {
                        className: h.$T,
                        href: m.A.getArticleURL(O.helpArticleId),
                        children: b.intl.string(b.t["sBp+u0"])
                    })]
                })]
            })]
        }), null != O.button && (0, r.jsx)("div", {
            className: h.UD,
            children: (0, r.jsx)(c.$nd, {
                variant: "expressive",
                size: "md",
                onClick: T,
                text: O.button.copy,
                icon: s.NitroWheelIcon
            })
        })]
    })
}