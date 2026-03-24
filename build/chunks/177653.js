/** chunk id: 177653 params = (module,exports,require) **/
n.d(t, {
    A: () => S
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
    m = n(166403),
    g = n(469778),
    _ = n(927578),
    x = n(538511),
    A = n(788868),
    h = n(652215),
    p = n(519412),
    f = n(985018),
    T = n(802937);

function E(e) {
    let t, {
            user: n,
            planId: s,
            count: a,
            userPremiumSubscription: r,
            unconsumedFractionalPremiumUnits: c = [],
            hasPremiumGroup: m
        } = e,
        [g, x] = (0, o.yK)([u.A], () => [u.A.get(s), null != r ? u.A.get(r.planId) : null]);
    if (null == g || _.Ay.getInterval(s).intervalType !== A.WT.MONTH) return null;
    let E = null != x ? x.skuId : null,
        S = g.skuId === E,
        b = _.Ay.getDisplayName(s);
    if (m) t = f.intl.string(p.default["5asczk"]);
    else if (S && null != r) {
        let e;
        e = new Date(r.status === h.Dmq.PAUSED && null != r.pauseEndsAt ? r.pauseEndsAt : r.currentPeriodEnd);
        let n = (0, _._e)(e, c);
        t = f.intl.formatToPlainString(f.t["5CNRRA"], {
            date: n ?? 0
        })
    } else t = f.intl.formatToPlainString(f.t.eNXZ5O, {
        planName: b
    });
    let C = n.hasFreePremium() || null != r && r.isPurchasedExternally;
    return (0, i.jsxs)("div", {
        className: T.Bh,
        children: [(0, i.jsx)("div", {
            className: l()({
                [T.sr]: g.skuId === A.pe.TIER_0,
                [T.lP]: g.skuId === A.pe.TIER_1,
                [T.eb]: g.skuId === A.pe.TIER_2
            }),
            children: (0, i.jsx)(d.tvc, {
                size: "md",
                color: "currentColor",
                className: T.Kk
            })
        }), (0, i.jsxs)("div", {
            className: T.pt,
            children: [(0, i.jsx)(d.Heading, {
                variant: "heading-md/semibold",
                children: f.intl.format(f.t.LzobT9, {
                    planName: b
                })
            }), !C && (0, i.jsx)(d.Heading, {
                className: T.gj,
                variant: "heading-sm/semibold",
                color: "text-default",
                children: t
            })]
        }), (0, i.jsx)(d.Text, {
            className: T.PJ,
            variant: "text-md/semibold",
            children: f.intl.format(f.t["ess/xl"], {
                count: a
            })
        })]
    })
}
let S = function(e) {
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
    }).groupBy(e => e.subscriptionPlanId).value(), a = (0, o.yK)([g.A], () => g.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([m.A], () => m.A.getPremiumSubscription()), _ = (0, o.bG)([m.A], () => null == m.A.getPremiumTypeSubscription()), h = Object.keys(s).some(e => e === A.gD.PREMIUM_MONTH_TIER_1), p = (0, o.bG)([c.default], () => c.default.getCurrentUser());
    if (null == p) return null;
    let S = p.isPremiumWithPremiumGroup();
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            className: l()(t, T.xF, T.J_),
            children: Object.keys(s).map(e => (0, i.jsx)(E, {
                planId: e,
                count: s[e].length,
                userPremiumSubscription: u,
                user: p,
                unconsumedFractionalPremiumUnits: a,
                hasPremiumGroup: S
            }, e))
        }), h && _ && (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                className: T.eT,
                variant: "text-md/normal",
                children: f.intl.string(f.t["VNr4+O"])
            }), (0, i.jsx)(x.i, {})]
        })]
    })
}