/** chunk id: 177653 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(735438),
    r = n.n(a),
    o = n(311907),
    d = n(397927),
    c = n(287809),
    u = n(97352),
    _ = n(166403),
    m = n(469778),
    g = n(927578),
    A = n(538511),
    x = n(788868),
    h = n(652215),
    p = n(518582),
    T = n(985018),
    E = n(599359);

function S(e) {
    let t, {
            user: n,
            planId: s,
            count: a,
            userPremiumSubscription: r,
            unconsumedFractionalPremiumUnits: c = [],
            hasPremiumGroup: _
        } = e,
        [m, A] = (0, o.yK)([u.A], () => [u.A.get(s), null != r ? u.A.get(r.planId) : null]);
    if (null == m || g.Ay.getInterval(s).intervalType !== x.WT.MONTH) return null;
    let S = null != A ? A.skuId : null,
        f = m.skuId === S,
        C = g.Ay.getDisplayName(s);
    if (_) t = T.intl.string(p.default["5asczk"]);
    else if (f && null != r) {
        let e;
        e = new Date(r.status === h.Dmq.PAUSED && null != r.pauseEndsAt ? r.pauseEndsAt : r.currentPeriodEnd);
        let n = (0, g._e)(e, c);
        t = T.intl.formatToPlainString(T.t["5CNRRA"], {
            date: n ?? 0
        })
    } else t = T.intl.formatToPlainString(T.t.eNXZ5O, {
        planName: C
    });
    let b = n.hasFreePremium() || null != r && r.isPurchasedExternally;
    return (0, i.jsxs)("div", {
        className: E.Bh,
        children: [(0, i.jsx)("div", {
            className: l()({
                [E.sr]: m.skuId === x.pe.TIER_0,
                [E.lP]: m.skuId === x.pe.TIER_1,
                [E.eb]: m.skuId === x.pe.TIER_2
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
                    planName: C
                })
            }), !b && (0, i.jsx)(d.Heading, {
                className: E.gj,
                variant: "heading-sm/semibold",
                color: "text-default",
                children: t
            })]
        }), (0, i.jsx)(d.Text, {
            className: E.PJ,
            variant: "text-md/semibold",
            children: T.intl.format(T.t["ess/xl"], {
                count: a
            })
        })]
    })
}
let f = function(e) {
    let {
        className: t,
        entitlements: n
    } = e, s = r()(Array.from(n)).filter(e => {
        let {
            subscriptionPlanId: t,
            parentId: n,
            consumed: i
        } = e;
        return null != t && null != n && !i
    }).groupBy(e => e.subscriptionPlanId).value(), a = (0, o.yK)([m.A], () => m.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()), g = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()), h = Object.keys(s).some(e => e === x.gD.PREMIUM_MONTH_TIER_1), p = (0, o.bG)([c.default], () => c.default.getCurrentUser());
    if (null == p) return null;
    let f = p.isPremiumWithPremiumGroup();
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            className: l()(t, E.xF, E.J_),
            children: Object.keys(s).map(e => (0, i.jsx)(S, {
                planId: e,
                count: s[e].length,
                userPremiumSubscription: u,
                user: p,
                unconsumedFractionalPremiumUnits: a,
                hasPremiumGroup: f
            }, e))
        }), h && g && (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                className: E.eT,
                variant: "text-md/normal",
                children: T.intl.string(T.t["VNr4+O"])
            }), (0, i.jsx)(A.i, {})]
        })]
    })
}