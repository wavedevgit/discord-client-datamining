/** Chunk was on 5606 **/
/** chunk id: 177653, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => x
}), n(896048);
var r = n(627968);
n(64700);
var i = n(503698),
    l = n.n(i),
    s = n(735438),
    a = n.n(s),
    o = n(311907),
    c = n(397927),
    d = n(287809),
    u = n(97352),
    p = n(166403),
    _ = n(469778),
    m = n(927578),
    g = n(538511),
    f = n(788868),
    b = n(652215),
    h = n(985018),
    A = n(802937);

function E(e) {
    let t, {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: a,
            unconsumedFractionalPremiumUnits: d = []
        } = e,
        [p, _] = (0, o.yK)([u.A], () => [u.A.get(i), null != a ? u.A.get(a.planId) : null]);
    if (null == p || m.Ay.getInterval(i).intervalType !== f.WT.MONTH) return null;
    let g = null != _ ? _.skuId : null,
        E = p.skuId === g,
        x = m.Ay.getDisplayName(i);
    if (null != a) {
        let e;
        e = new Date(a.status === b.Dmq.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd), t = (0, m._e)(e, d)
    }
    return (0, r.jsxs)("div", {
        className: A.Bh,
        children: [(0, r.jsx)("div", {
            className: l()({
                [A.sr]: p.skuId === f.pe.TIER_0,
                [A.lP]: p.skuId === f.pe.TIER_1,
                [A.eb]: p.skuId === f.pe.TIER_2
            }),
            children: (0, r.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
                className: A.Kk
            })
        }), (0, r.jsxs)("div", {
            className: A.pt,
            children: [(0, r.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                children: h.intl.format(h.t.LzobT9, {
                    planName: x
                })
            }), n.hasFreePremium() || null != a && a.isPurchasedExternally ? null : (0, r.jsx)(c.Heading, {
                className: A.gj,
                variant: "heading-sm/semibold",
                color: "text-default",
                children: E && null != a ? h.intl.formatToPlainString(h.t["5CNRRA"], {
                    date: null != t ? t : 0
                }) : h.intl.formatToPlainString(h.t.eNXZ5O, {
                    planName: x
                })
            })]
        }), (0, r.jsx)(c.Text, {
            className: A.PJ,
            variant: "text-md/semibold",
            children: h.intl.format(h.t["ess/xl"], {
                count: s
            })
        })]
    })
}
let x = function(e) {
    let {
        className: t,
        entitlements: n
    } = e, i = a()(Array.from(n)).filter(e => {
        let {
            subscriptionPlanId: t,
            parentId: n,
            consumed: r
        } = e;
        return null != t && null != n && !r
    }).groupBy(e => e.subscriptionPlanId).value(), s = (0, o.yK)([_.A], () => _.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([p.A], () => p.A.getPremiumSubscription()), m = (0, o.bG)([p.A], () => null == p.A.getPremiumTypeSubscription()), b = Object.keys(i).some(e => e === f.gD.PREMIUM_MONTH_TIER_1), x = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return null == x ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
            className: l()(t, A.xF, A.J_),
            children: Object.keys(i).map(e => (0, r.jsx)(E, {
                planId: e,
                count: i[e].length,
                userPremiumSubscription: u,
                user: x,
                unconsumedFractionalPremiumUnits: s
            }, e))
        }), b && m && (0, r.jsxs)("div", {
            children: [(0, r.jsx)(c.Text, {
                className: A.eT,
                variant: "text-md/normal",
                children: h.intl.string(h.t["VNr4+O"])
            }), (0, r.jsx)(g.i, {})]
        })]
    })
}