/** chunk id: 517753, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => j
});
var s = r(627968);
r(64700);
var i = r(421380),
    n = r(397927),
    l = r(793574),
    a = r(688810),
    o = r(404374),
    c = r(422936),
    d = r(234419),
    u = r(465794),
    f = r(511484),
    h = r(927578),
    x = r(213279),
    p = r(788868),
    m = r(191850),
    _ = r(985018),
    g = r(827025);

function j(e) {
    let {
        onClose: t
    } = e, {
        analyticsLocations: r
    } = (0, a.Ay)(l.A.GO_LIVE_MODAL_V2), j = (0, d.V)(), v = (0, c.O)(), A = j?.subscription_trial?.sku_id === p.pe.TIER_2 || (0, f.U9)(v, p.pe.TIER_2), S = _.intl.string(m.default["+f+cqk"]);
    return A && (null != j ? S = (0, h.FY)({
        intervalType: j?.subscription_trial?.interval,
        intervalCount: j?.subscription_trial?.interval_count
    }) : null != v && (S = _.intl.formatToPlainString(_.t.bkQ4bH, {
        percent: v.discount.amount
    }))), (0, s.jsxs)("div", {
        className: g.zr,
        children: [(0, s.jsxs)(n.Text, {
            className: g.aV,
            variant: "text-xs/normal",
            color: "always-white",
            children: [(0, s.jsx)(n.XAi, {
                size: "xxs",
                color: "currentColor"
            }), _.intl.format(_.t.sLJ3EV, {
                onNitroClick: function() {
                    (0, x.p)({
                        analyticsLocation: r[0],
                        onClose: t
                    })
                }
            })]
        }), (0, s.jsx)(u.A, {
            className: g.lI,
            iconClassName: g.PC,
            size: i.$n.Sizes.TINY,
            color: i.$n.Colors.BRAND_INVERTED,
            subscriptionTier: p.pe.TIER_2,
            buttonShineClassName: g.vb,
            iconColor: o.k0.PREMIUM_TIER_2,
            onClick: () => {
                t()
            },
            textOptions: {
                subscribeText: S,
                textClassName: g.U_
            }
        })]
    })
}