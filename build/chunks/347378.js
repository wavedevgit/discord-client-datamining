/** Chunk was on web.js **/
/** chunk id: 347378, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => h
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(158954),
    l = n(927578),
    c = n(580630),
    u = n(735164),
    d = n(692440),
    f = n(916974),
    p = n(985018),
    _ = n(600834);
let h = () => {
    let {
        transitionState: e,
        planId: t,
        renewalInvoice: n,
        onClose: a,
        handleCancellation: h,
        renewalInvoiceDetails: m,
        fullPrice: g,
        premiumSubscription: E
    } = (0, f.X)(), [y, b] = i.useState(!1), [O, v] = i.useState(!1);
    if (null == n) return null;
    let A = async () => {
        b(!0), v(!1);
        try {
            await h(), a()
        } catch (e) {
            v(!0), b(!1)
        }
    }, I = [{
        text: p.intl.string(p.t.h9tkAK),
        onClick: () => a(),
        variant: "secondary"
    }, {
        text: "".concat(p.intl.format(p.t.yxFzdO, {
            planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(t))
        })),
        onClick: A,
        disabled: y,
        variant: "critical-primary",
        loading: y
    }];
    if (null == m) return null;
    let {
        intervalType: S,
        intervalCount: T
    } = m, C = (0, c.CE)("".concat(g), S, T);
    return (0, r.jsxs)(s.Modal, {
        size: "md",
        transitionState: e,
        title: "".concat(p.intl.format(p.t.LZunzZ, {
            planPremiumType: l.Ay.getTierDisplayNameByPlanId("".concat(t))
        })),
        subtitle: 0 !== n.total ? p.intl.format(p.t.ycyeBx, {
            renewalDate: n.subscriptionPeriodStart,
            rate: (0, c.CE)((0, c.$g)(n.total, n.currency), S, T)
        }) : p.intl.format(p.t["+y0Tjy"], {
            renewalDate: n.subscriptionPeriodStart
        }),
        actions: I,
        onClose: async () => a(),
        children: [(0, r.jsxs)(u.Yx, {
            isPremiumRebrand: !0,
            className: o()({
                [_.JD]: O
            }),
            children: [(0, r.jsx)(u.Xd, {
                children: p.intl.string(p.t.iqhIp4)
            }), (0, r.jsx)(u.oR, {
                label: p.intl.formatToPlainString(p.t.r3jVZq, {
                    planName: l.Ay.getDisplayName("".concat(t))
                }),
                value: "".concat(C),
                className: _.aD
            }), (0, r.jsx)(u.pK, {}), (0, r.jsx)(d.m0, {
                premiumSubscription: E,
                renewalInvoice: n,
                isUpdate: !0
            })]
        }), O ? (0, r.jsx)(s.wx6, {
            type: "critical",
            children: p.intl.string(p.t["5mlOCW"])
        }) : null]
    })
}