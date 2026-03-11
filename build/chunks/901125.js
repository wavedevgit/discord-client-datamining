/** chunk id: 901125 params = (module,exports,require) **/
n.d(t, {
    A: () => h
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
    _ = n(788868),
    g = n(652215),
    A = n(985018),
    m = n(158793);
let h = e => {
    let t, n, {
            premiumSubscription: s,
            className: h,
            textColor: p
        } = e,
        x = (0, u.ar)();
    if (null == s) return null;
    let E = null != s ? c.Ay.getPremiumPlanItem(s) : null;
    if (c.Ay.isBoostOnlySubscription(s) ? t = A.intl.string(A.t.Uj0md3) : null != E && (t = c.Ay.getTierDisplayNameByPlanId(E.planId)), null == t) return null;
    let T = () => (0, o.openUserSettings)(r.X.SUBSCRIPTIONS_PANEL, {
            section: g.nc_.SUBSCRIPTIONS
        }),
        S = (null != E ? c.Ay.getSkuIdForPlan(E.planId) : null) === _.pe.TIER_1;
    return n = null != p ? p : x ? "always-white" : "text-default", (0, i.jsxs)(a.ZpM, {
        className: l()(m.kL, h, {
            [m.He]: x
        }),
        type: a.ZpM.Types.CUSTOM,
        children: [(0, i.jsx)(a.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: l()(m.Kk, {
                [m.Pt]: x
            })
        }), (0, i.jsx)(a.Text, {
            variant: "text-sm/medium",
            color: n,
            children: S ? A.intl.format(A.t["tYuv+T"], {
                helpdeskArticle: d.A.getArticleURL(g.MVz.PREMIUM_DETAILS),
                onSubscriptionsClick: T
            }) : A.intl.format(A.t.xHRgU2, {
                subscriptionName: t,
                onSubscriptionsClick: T
            })
        })]
    })
}