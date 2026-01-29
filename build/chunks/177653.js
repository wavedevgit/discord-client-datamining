/** Chunk was on 2827 **/
/** chunk id: 177653, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
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
    _ = n(166403),
    p = n(469778),
    m = n(927578),
    g = n(538511),
    A = n(788868),
    f = n(652215),
    b = n(985018),
    h = n(802937);

function E(e) {
    let t, {
            user: n,
            planId: i,
            count: s,
            userPremiumSubscription: a,
            unconsumedFractionalPremiumUnits: d = []
        } = e,
        [_, p] = (0, o.yK)([u.A], () => [u.A.get(i), null != a ? u.A.get(a.planId) : null]);
    if (null == _ || m.Ay.getInterval(i).intervalType !== A.WT.MONTH) return null;
    let g = null != p ? p.skuId : null,
        E = _.skuId === g,
        O = m.Ay.getDisplayName(i);
    if (null != a) {
        let e;
        e = new Date(a.status === f.Dmq.PAUSED && null != a.pauseEndsAt ? a.pauseEndsAt : a.currentPeriodEnd), t = (0, m._e)(e, d)
    }
    return (0, r.jsxs)("div", {
        className: h.Bh,
        children: [(0, r.jsx)("div", {
            className: l()({
                [h.sr]: _.skuId === A.pe.TIER_0,
                [h.lP]: _.skuId === A.pe.TIER_1,
                [h.eb]: _.skuId === A.pe.TIER_2
            }),
            children: (0, r.jsx)(c.tvc, {
                size: "md",
                color: "currentColor",
                className: h.Kk
            })
        }), (0, r.jsxs)("div", {
            className: h.pt,
            children: [(0, r.jsx)(c.Heading, {
                variant: "heading-md/semibold",
                children: b.intl.format(b.t.LzobT9, {
                    planName: O
                })
            }), n.hasFreePremium() || null != a && a.isPurchasedExternally ? null : (0, r.jsx)(c.Heading, {
                className: h.gj,
                variant: "heading-sm/semibold",
                color: "text-default",
                children: E && null != a ? b.intl.formatToPlainString(b.t["5CNRRA"], {
                    date: null != t ? t : 0
                }) : b.intl.formatToPlainString(b.t.eNXZ5O, {
                    planName: O
                })
            })]
        }), (0, r.jsx)(c.Text, {
            className: h.PJ,
            variant: "text-md/semibold",
            children: b.intl.format(b.t["ess/xl"], {
                count: s
            })
        })]
    })
}
let O = function(e) {
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
    }).groupBy(e => e.subscriptionPlanId).value(), s = (0, o.yK)([p.A], () => p.A.getUnactivatedFractionalPremiumUnits()), u = (0, o.bG)([_.A], () => _.A.getPremiumSubscription()), m = (0, o.bG)([_.A], () => null == _.A.getPremiumTypeSubscription()), f = Object.keys(i).some(e => e === A.gD.PREMIUM_MONTH_TIER_1), O = (0, o.bG)([d.default], () => d.default.getCurrentUser());
    return null == O ? null : (0, r.jsxs)("div", {
        children: [(0, r.jsx)("div", {
            className: l()(t, h.xF, h.J_),
            children: Object.keys(i).map(e => (0, r.jsx)(E, {
                planId: e,
                count: i[e].length,
                userPremiumSubscription: u,
                user: O,
                unconsumedFractionalPremiumUnits: s
            }, e))
        }), f && m && (0, r.jsxs)("div", {
            children: [(0, r.jsx)(c.Text, {
                className: h.eT,
                variant: "text-md/normal",
                children: b.intl.string(b.t["VNr4+O"])
            }), (0, r.jsx)(g.i, {})]
        })]
    })
}