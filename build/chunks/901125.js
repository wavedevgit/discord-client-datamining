/** chunk id: 901125 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(397927),
    a = n(780964),
    o = n(858897),
    d = n(975571),
    c = n(927578),
    u = n(526292),
    m = n(788868),
    g = n(652215),
    _ = n(985018),
    x = n(824888);
let h = e => {
    let t, n, {
            premiumSubscription: s,
            className: h,
            textColor: A
        } = e,
        p = (0, u.ar)();
    if (null == s) return null;
    let T = null != s ? c.Ay.getPremiumPlanItem(s) : null;
    if (c.Ay.isBoostOnlySubscription(s) ? t = _.intl.string(_.t.Uj0md3) : null != T && (t = c.Ay.getTierDisplayNameByPlanId(T.planId)), null == t) return null;
    let f = () => (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL),
        S = (null != T ? c.Ay.getSkuIdForPlan(T.planId) : null) === m.pe.TIER_1;
    return n = null != A ? A : p ? "always-white" : "text-default", (0, i.jsxs)(r.ZpM, {
        className: l()(x.kL, h, {
            [x.He]: p
        }),
        type: r.ZpM.Types.CUSTOM,
        children: [(0, i.jsx)(r.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: l()(x.Kk, {
                [x.Pt]: p
            })
        }), (0, i.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: n,
            children: S ? _.intl.format(_.t["tYuv+T"], {
                helpdeskArticle: d.A.getArticleURL(g.MVz.PREMIUM_DETAILS),
                onSubscriptionsClick: f
            }) : _.intl.format(_.t.xHRgU2, {
                subscriptionName: t,
                onSubscriptionsClick: f
            })
        })]
    })
}