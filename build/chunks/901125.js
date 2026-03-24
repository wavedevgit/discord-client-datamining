/** chunk id: 901125 params = (module,exports,require) **/
n.d(t, {
    A: () => A
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(780964),
    o = n(840065),
    d = n(975571),
    c = n(927578),
    u = n(526292),
    m = n(788868),
    g = n(652215),
    _ = n(985018),
    x = n(158793);
let A = e => {
    let t, n, {
            premiumSubscription: s,
            className: A,
            textColor: h
        } = e,
        p = (0, u.ar)();
    if (null == s) return null;
    let f = null != s ? c.Ay.getPremiumPlanItem(s) : null;
    if (c.Ay.isBoostOnlySubscription(s) ? t = _.intl.string(_.t.Uj0md3) : null != f && (t = c.Ay.getTierDisplayNameByPlanId(f.planId)), null == t) return null;
    let T = () => (0, o.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL),
        E = (null != f ? c.Ay.getSkuIdForPlan(f.planId) : null) === m.pe.TIER_1;
    return n = null != h ? h : p ? "always-white" : "text-default", (0, i.jsxs)(a.ZpM, {
        className: l()(x.kL, A, {
            [x.He]: p
        }),
        type: a.ZpM.Types.CUSTOM,
        children: [(0, i.jsx)(a.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: l()(x.Kk, {
                [x.Pt]: p
            })
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: n,
            children: E ? _.intl.format(_.t["tYuv+T"], {
                helpdeskArticle: d.A.getArticleURL(g.MVz.PREMIUM_DETAILS),
                onSubscriptionsClick: T
            }) : _.intl.format(_.t.xHRgU2, {
                subscriptionName: t,
                onSubscriptionsClick: T
            })
        })]
    })
}