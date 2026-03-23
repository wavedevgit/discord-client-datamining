/** chunk id: 901125 params = (module,exports,require) **/
n.d(t, {
    A: () => x
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
    _ = n(652215),
    g = n(985018),
    A = n(158793);
let x = e => {
    let t, n, {
            premiumSubscription: s,
            className: x,
            textColor: p
        } = e,
        h = (0, u.ar)();
    if (null == s) return null;
    let f = null != s ? c.Ay.getPremiumPlanItem(s) : null;
    if (c.Ay.isBoostOnlySubscription(s) ? t = g.intl.string(g.t.Uj0md3) : null != f && (t = c.Ay.getTierDisplayNameByPlanId(f.planId)), null == t) return null;
    let T = () => (0, o.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL),
        E = (null != f ? c.Ay.getSkuIdForPlan(f.planId) : null) === m.pe.TIER_1;
    return n = null != p ? p : h ? "always-white" : "text-default", (0, i.jsxs)(a.ZpM, {
        className: l()(A.kL, x, {
            [A.He]: h
        }),
        type: a.ZpM.Types.CUSTOM,
        children: [(0, i.jsx)(a.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: l()(A.Kk, {
                [A.Pt]: h
            })
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: n,
            children: E ? g.intl.format(g.t["tYuv+T"], {
                helpdeskArticle: d.A.getArticleURL(_.MVz.PREMIUM_DETAILS),
                onSubscriptionsClick: T
            }) : g.intl.format(g.t.xHRgU2, {
                subscriptionName: t,
                onSubscriptionsClick: T
            })
        })]
    })
}