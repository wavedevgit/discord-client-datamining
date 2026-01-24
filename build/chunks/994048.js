/** Chunk was on web.js **/
/** chunk id: 994048, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    j: () => A
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    s = n.n(a),
    o = n(397927),
    l = n(793574),
    c = n(688810),
    u = n(422936),
    d = n(234419),
    f = n(811611),
    p = n(954571),
    _ = n(927578),
    h = n(410558),
    m = n(320061),
    g = n(652215),
    E = n(788868),
    y = n(985018),
    b = n(369614),
    O = n(939383);
let v = () => (0, h.U)(!1),
    A = e => {
        var t, n, a;
        let {
            onLearnMore: h
        } = e, {
            analyticsLocations: A
        } = (0, c.Ay)(l.A.PREMIUM_UPSELL);
        i.useEffect(() => {
            p.default.track(g.HAw.PREMIUM_UPSELL_VIEWED, {
                location_section: g.JJy.STICKER_PICKER_UPSELL,
                type: E.e.STICKER_PICKER_UPSELL,
                location_stack: A
            })
        }, [A]);
        let I = (0, d.V)(),
            S = (0, u.O)(),
            T = (null == I || null == (n = I.subscription_trial) ? void 0 : n.sku_id) === E.pe.TIER_0,
            C = null != I || null != S;
        return (0, r.jsxs)("div", {
            className: s()(b.VL, {
                [b.Hz]: C
            }),
            children: [C ? (0, r.jsx)(f.Ay, {
                trialOffer: I,
                discountOffer: S,
                onClose: v,
                type: E.e.STICKER_PICKER_UPSELL,
                subscriptionTier: null != (t = null == I || null == (a = I.subscription_trial) ? void 0 : a.sku_id) ? t : E.pe.TIER_2,
                children: T ? y.intl.format(y.t.MAGagw, {
                    planName: (0, _.RH)(E.gD.PREMIUM_MONTH_TIER_0),
                    onClick: h
                }) : y.intl.format(y.t.jt7JX6, {
                    onClick: h
                })
            }) : (0, r.jsxs)(r.Fragment, {
                children: [(0, r.jsx)("img", {
                    className: b.Tn,
                    src: O,
                    alt: y.intl.string(y.t.do7AoM)
                }), (0, r.jsx)(o.Text, {
                    className: b.ex,
                    color: "text-strong",
                    variant: "text-lg/semibold",
                    children: y.intl.string(y.t.jJG1pl)
                }), (0, r.jsx)(o.Text, {
                    className: b.GR,
                    variant: "text-md/normal",
                    children: y.intl.format(y.t.jt7JX6, {
                        onClick: h
                    })
                })]
            }), !C && (0, r.jsx)(m.A, {
                analyticsSection: g.JJy.EXPRESSION_PICKER,
                buttonText: C ? T ? y.intl.string(y.t.hz78hE) : y.intl.string(y.t["Gd/XHF"]) : void 0
            }), (0, r.jsx)(o.DUT, {
                className: b.kz,
                onClick: v,
                children: (0, r.jsx)(o.PGe, {
                    size: "md",
                    color: "currentColor"
                })
            })]
        })
    }