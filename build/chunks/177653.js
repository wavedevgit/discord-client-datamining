/** chunk id: 177653 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    r = n(735438),
    a = n.n(r),
    o = n(311907),
    d = n(397927),
    c = n(287809),
    u = n(97352),
    _ = n(166403),
    m = n(469778),
    g = n(927578),
    A = n(538511),
    h = n(788868),
    x = n(652215),
    p = n(518582),
    T = n(985018),
    E = n(599359);

function C(e) {
    let t, {
            user: n,
            planId: s,
            count: r,
            userPremiumSubscription: a,
            unconsumedFractionalPremiumUnits: c = [],
            hasPremiumGroup: _
        } = e,
        [m, A] = (0, o.yK)([u.A], () => [u.A.get(s), null != a ? u.A.get(a.planId) : null]);
    if (null == m || g.Ay.getInterval(s).intervalType !== h.WT.MONTH) return null;
    let C = null != A ? A.skuId : null,
        S = m.skuId === C,
        f = g.Ay.getDisplayName(s);
    if (_) t = T.intl.string(p.default["5asczk"]);
    else if (S && null != a) {
        let e;
        e = new Date(a.status === x.Dmq.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd);
        let n = (0, g._e)(e, c);
        t = T.intl.formatToPlainString(T.t["5CNRRA"], {
            date: n ?? 0
        })
    } else t = T.intl.formatToPlainString(T.t.eNXZ5O, {
        planName: f
    });
    let N = n.hasFreePremium() || null != a && a.isPurchasedExternally;
    return (0, i.jsxs)("div", {
        className: E.Bh,
        children: [(0, i.jsx)("div", {
            className: l()({
                [E.sr]: m.skuId === h.pe.TIER_0,
                [E.lP]: m.skuId === h.pe.TIER_1,
                [E.eb]: m.skuId === h.pe.TIER_2
            }),
            children: (0, i.jsx)(d.tvc, {
                size: "md",
                color: "currentColor",
                className: E.Kk
            })
        }), (0, i.jsxs)("div", {
            className: E.pt,
            children: [(0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: T.intl.format(T.t.LzobT9, {
                    planName: f
                })
            }), !N && (0, i.jsx)(d.Heading, {
                className: E.gj,
                variant: "heading-sm/semibold",
                color: "text-default",
                children: t
            })]
        }), (0, i.jsx)(d.Text, {
            className: E.PJ,
            variant: "text-md/semibold",
            children: T.intl.format(T.t["ess/xl"], {
                count: r
            })
        })]
    })
}
let S = function(e) {
    let {
        className: t,
        entitlements: n
    } = e, s = a()(Array.from(n)).filter(e => {
        let {
            subscriptionPlanId: t,
            parentId: n,
            consumed: i
        } = e;
        return null != t && null != n && !i
    }).groupBy(e => e.subscriptionPlanId).value(), r = (0, o.yK)([m.A], () => m.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()), g = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()), x = Object.keys(s).some(e => e === h.gD.PREMIUM_MONTH_TIER_1), p = (0, o.bG)([c.default], () => c.default.getCurrentUser());
    if (null == p) return null;
    let S = p.isPremiumWithPremiumGroup();
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            className: l()(t, E.xF, E.J_),
            children: Object.keys(s).map(e => (0, i.jsx)(C, {
                planId: e,
                count: s[e].length,
                userPremiumSubscription: u,
                user: p,
                unconsumedFractionalPremiumUnits: r,
                hasPremiumGroup: S
            }, e))
        }), x && g && (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                className: E.eT,
                variant: "text-md/normal",
                children: T.intl.string(T.t["VNr4+O"])
            }), (0, i.jsx)(A.i, {})]
        })]
    })
}