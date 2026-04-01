/** chunk id: 434395 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968);
n(64700);
var s = n(503698),
    l = n.n(s),
    a = n(397927),
    r = n(531260),
    o = n(927578),
    d = n(788868),
    c = n(985018),
    u = n(643158);

function m(e) {
    let {
        subscription: t,
        renewalMutations: s,
        className: m,
        analyticsLocation: g
    } = e, _ = (0, r.A)(), A = t.currentPeriodEnd;
    return _.fractionalState === d.xc.FP_SUB_PAUSED && (A = _.endsAt.toDate()), (0, i.jsxs)("div", {
        className: l()(u.zr, m),
        children: [(0, i.jsx)(a.EpV, {
            size: "custom",
            width: 20,
            height: 20,
            color: "currentColor",
            className: u.G
        }), (0, i.jsx)("div", {
            className: u.Qq,
            children: c.intl.format(c.t.ar1cPl, {
                planName: t.hasExternalPlanChange ? (0, o.OU)(s) : o.Ay.getDisplayName(s.planId),
                date: A
            })
        }), t.isPurchasedExternally ? null : (0, i.jsx)(a.MzZ, {
            onClick: e => {
                e.preventDefault(), (0, a.mMO)(async () => {
                    let {
                        default: e
                    } = await n.e("65975").then(n.bind(n, 702698));
                    return n => (0, i.jsx)(e, {
                        ...n,
                        subscription: t,
                        renewalMutations: s,
                        analyticsLocation: g
                    })
                })
            },
            className: u.Lu,
            children: c.intl.string(c.t["ETE/oC"])
        })]
    })
}