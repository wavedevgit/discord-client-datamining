/** Chunk was on 96811 **/
/** chunk id: 517753, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => _
});
var n = r(627968);
r(64700);
var i = r(421380),
    l = r(397927),
    s = r(793574),
    a = r(688810),
    o = r(404374),
    c = r(422936),
    d = r(234419),
    u = r(465794),
    f = r(511484),
    h = r(927578),
    p = r(213279),
    x = r(788868),
    m = r(191850),
    j = r(985018),
    g = r(827025);

function _(e) {
    var t, r, _;
    let {
        onClose: v
    } = e, {
        analyticsLocations: b
    } = (0, a.Ay)(s.A.GO_LIVE_MODAL_V2), y = (0, d.V)(), S = (0, c.O)(), A = (null == y || null == (t = y.subscription_trial) ? void 0 : t.sku_id) === x.pe.TIER_2 || (0, f.U9)(S, x.pe.TIER_2), O = j.intl.string(m.default["+f+cqk"]);
    return A && (null != y ? O = (0, h.FY)({
        intervalType: null == y || null == (r = y.subscription_trial) ? void 0 : r.interval,
        intervalCount: null == y || null == (_ = y.subscription_trial) ? void 0 : _.interval_count
    }) : null != S && (O = j.intl.formatToPlainString(j.t.bkQ4bH, {
        percent: S.discount.amount
    }))), (0, n.jsxs)("div", {
        className: g.zr,
        children: [(0, n.jsxs)(l.Text, {
            className: g.aV,
            variant: "text-xs/normal",
            color: "always-white",
            children: [(0, n.jsx)(l.XAi, {
                size: "xxs",
                color: "currentColor"
            }), j.intl.format(j.t.sLJ3EV, {
                onNitroClick: function() {
                    (0, p.p)({
                        analyticsLocation: b[0],
                        onClose: v
                    })
                }
            })]
        }), (0, n.jsx)(u.A, {
            className: g.lI,
            iconClassName: g.PC,
            size: i.$n.Sizes.TINY,
            color: i.$n.Colors.BRAND_INVERTED,
            subscriptionTier: x.pe.TIER_2,
            buttonShineClassName: g.vb,
            iconColor: o.k0.PREMIUM_TIER_2,
            onClick: () => {
                v()
            },
            textOptions: {
                subscribeText: O,
                textClassName: g.U_
            }
        })]
    })
}