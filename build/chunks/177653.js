/** chunk id: 177653 params = (module,exports,require) **/
n.d(t, {
    A: () => C
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
    g = n(469778),
    m = n(927578),
    A = n(538511),
    h = n(788868),
    p = n(652215),
    x = n(518582),
    E = n(985018),
    T = n(599359);

function S(e) {
    let t, {
            user: n,
            planId: s,
            count: a,
            userPremiumSubscription: r,
            unconsumedFractionalPremiumUnits: c = [],
            hasPremiumGroup: _
        } = e,
        [g, A] = (0, o.yK)([u.A], () => [u.A.get(s), null != r ? u.A.get(r.planId) : null]);
    if (null == g || m.Ay.getInterval(s).intervalType !== h.WT.MONTH) return null;
    let S = null != A ? A.skuId : null,
        C = g.skuId === S,
        f = m.Ay.getDisplayName(s);
    if (_) t = E.intl.string(x.default["5asczk"]);
    else if (C && null != r) {
        let e;
        e = new Date(r.status === p.Dmq.PAUSED && null != r.pauseEndsAt ? r.pauseEndsAt : r.currentPeriodEnd);
        let n = (0, m._e)(e, c);
        t = E.intl.formatToPlainString(E.t["5CNRRA"], {
            date: n ?? 0
        })
    } else t = E.intl.formatToPlainString(E.t.eNXZ5O, {
        planName: f
    });
    let I = n.hasFreePremium() || null != r && r.isPurchasedExternally;
    return (0, i.jsxs)("div", {
        className: T.Bh,
        children: [(0, i.jsx)("div", {
            className: l()({
                [T.sr]: g.skuId === h.pe.TIER_0,
                [T.lP]: g.skuId === h.pe.TIER_1,
                [T.eb]: g.skuId === h.pe.TIER_2
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
                children: E.intl.format(E.t.LzobT9, {
                    planName: f
                })
            }), !I && (0, i.jsx)(d.Heading, {
                className: T.gj,
                variant: "heading-sm/semibold",
                color: "text-default",
                children: t
            })]
        }), (0, i.jsx)(d.Text, {
            className: T.PJ,
            variant: "text-md/semibold",
            children: E.intl.format(E.t["ess/xl"], {
                count: a
            })
        })]
    })
}
let C = function(e) {
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
    }).groupBy(e => e.subscriptionPlanId).value(), a = (0, o.yK)([g.A], () => g.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()), m = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()), p = Object.keys(s).some(e => e === h.gD.PREMIUM_MONTH_TIER_1), x = (0, o.bG)([c.default], () => c.default.getCurrentUser());
    if (null == x) return null;
    let C = x.isPremiumWithPremiumGroup();
    return (0, i.jsxs)("div", {
        children: [(0, i.jsx)("div", {
            className: l()(t, T.xF, T.J_),
            children: Object.keys(s).map(e => (0, i.jsx)(S, {
                planId: e,
                count: s[e].length,
                userPremiumSubscription: u,
                user: x,
                unconsumedFractionalPremiumUnits: a,
                hasPremiumGroup: C
            }, e))
        }), p && m && (0, i.jsxs)("div", {
            children: [(0, i.jsx)(d.Text, {
                className: T.eT,
                variant: "text-md/normal",
                children: E.intl.string(E.t["VNr4+O"])
            }), (0, i.jsx)(A.i, {})]
        })]
    })
}