/** chunk id: 617745, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    q: () => O,
    t: () => b
}), n(896048), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(397927),
    o = n(384904),
    s = n(73825),
    l = n(235986),
    c = n(683433),
    u = n(36167),
    d = n(937008),
    f = n(156312),
    p = n(166532),
    _ = n(814626),
    h = n(652215),
    m = n(788868),
    g = n(985018),
    E = n(926701);
let y = 1e3,
    b = e => {
        let t, {
                step: n,
                onPurchaseComplete: l,
                onHandoffFailure: c
            } = e,
            {
                selectedPlan: b,
                setSelectedPlanId: O,
                setSelectedSkuId: v,
                browserCheckoutState: A,
                browserCheckoutStateLoadId: I,
                browserCheckoutStateSkuId: S,
                browserCheckoutStatePlanId: T,
                contextMetadata: C
            } = (0, f.P5)(),
            {
                isGift: N
            } = (0, d.Pv)(),
            [w, R] = i.useState(!1);
        switch (n) {
            case p.pn.AWAITING_BROWSER_CHECKOUT_GOOGLE_PAY:
                t = h.do8.GOOGLE_PAY;
                break;
            case p.pn.AWAITING_BROWSER_CHECKOUT_APPLE_PAY:
                t = h.do8.APPLE_PAY
        }
        return i.useEffect(() => {
            let e = setTimeout(() => {
                var e;
                w || (R(!0), (0, o.Ze)(C.loadId), (0, u.my)({
                    planId: null != (e = null == b ? void 0 : b.id) ? e : m.gD.PREMIUM_MONTH_TIER_2,
                    isGift: N,
                    loadId: C.loadId,
                    paymentMethodType: t
                }, c))
            }, y);
            return () => clearTimeout(e)
        }, [b, N, C, c, R, w, t]), i.useEffect(() => {
            null !== S && (m.oz.includes(S) && ((0, s.ur)(S), (0, o.hP)()), v(S)), null !== T && O(T), I === C.loadId && A === _.k.DONE && l()
        }, [v, O, A, I, S, T, C, l]), (0, r.jsxs)("div", {
            className: E.r,
            children: [(0, r.jsx)(a.Heading, {
                variant: "heading-xl/bold",
                children: g.intl.string(g.t.C4HYfy)
            }), (0, r.jsx)(a.Text, {
                variant: "text-md/normal",
                className: E.h,
                children: g.intl.string(g.t.xfG7Jp)
            })]
        })
    },
    O = e => {
        let {
            onPrimaryClick: t,
            onBackClick: n
        } = e;
        return (0, r.jsx)("div", {
            children: (0, r.jsxs)(a.jlY, {
                justify: l.A.Justify.BETWEEN,
                align: l.A.Align.CENTER,
                "data-migration-pending": !0,
                children: [(0, r.jsx)(c.F, {
                    onClick: t,
                    children: g.intl.string(g.t["4Qvmmj"])
                }), (0, r.jsx)(c.A, {
                    onClick: n
                })]
            })
        })
    }