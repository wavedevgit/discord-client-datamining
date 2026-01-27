/** Chunk was on 60667 **/
/** chunk id: 901125, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
});
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(397927),
    a = n(780964),
    o = n(840065),
    c = n(975571),
    d = n(927578),
    u = n(526292),
    _ = n(788868),
    p = n(652215),
    m = n(985018),
    g = n(158793);
let A = e => {
    let t, n, {
            premiumSubscription: i,
            className: A,
            textColor: f
        } = e,
        h = (0, u.ar)();
    if (null == i) return null;
    let b = null != i ? d.Ay.getPremiumPlanItem(i) : null;
    if (d.Ay.isBoostOnlySubscription(i) ? t = m.intl.string(m.t.Uj0md3) : null != b && (t = d.Ay.getTierDisplayNameByPlanId(b.planId)), null == t) return null;
    let E = () => (0, o.openUserSettings)(a.X.SUBSCRIPTIONS_PANEL, {
            section: p.nc_.SUBSCRIPTIONS
        }),
        x = (null != b ? d.Ay.getSkuIdForPlan(b.planId) : null) === _.pe.TIER_1;
    return n = null != f ? f : h ? "always-white" : "text-default", (0, r.jsxs)(s.ZpM, {
        className: l()(g.kL, A, {
            [g.He]: h
        }),
        type: s.ZpM.Types.CUSTOM,
        children: [(0, r.jsx)(s.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: l()(g.Kk, {
                [g.Pt]: h
            })
        }), (0, r.jsx)(s.Text, {
            variant: "text-sm/medium",
            color: n,
            children: x ? m.intl.format(m.t["tYuv+T"], {
                helpdeskArticle: c.A.getArticleURL(p.MVz.PREMIUM_DETAILS),
                onSubscriptionsClick: E
            }) : m.intl.format(m.t.xHRgU2, {
                subscriptionName: t,
                onSubscriptionsClick: E
            })
        })]
    })
}