/** chunk id: 347378 params = (module,exports,require) **/
i.d(e, {
    E: () => g
});
var n = i(627968),
    r = i(64700),
    l = i(503698),
    a = i.n(l),
    s = i(158954),
    u = i(927578),
    o = i(580630),
    c = i(735164),
    d = i(692440),
    m = i(916974),
    f = i(985018),
    p = i(690073);
let g = () => {
    let {
        transitionState: t,
        planId: e,
        renewalInvoice: i,
        onClose: l,
        handleCancellation: g,
        renewalInvoiceDetails: x,
        fullPrice: h,
        premiumSubscription: C
    } = (0, m.X)(), [P, y] = r.useState(!1), [v, j] = r.useState(!1);
    if (null == i) return null;
    let E = async () => {
        y(!0), j(!1);
        try {
            await g(), l()
        } catch (t) {
            j(!0), y(!1)
        }
    }, _ = [{
        text: f.intl.string(f.t.rzVN6j),
        onClick: () => l(),
        variant: "secondary"
    }, {
        text: `${f.intl.format(f.t.yxFzdO,{planPremiumType:u.Ay.getTierDisplayNameByPlanId(`${e}`)})}`,
        onClick: E,
        disabled: P,
        variant: "critical-primary",
        loading: P
    }];
    if (null == x) return null;
    let {
        intervalType: D,
        intervalCount: N
    } = x, S = (0, o.CE)(`${h}`, D, N);
    return (0, n.jsxs)(s.Modal, {
        size: "md",
        transitionState: t,
        title: `${f.intl.format(f.t.LZunzZ,{planPremiumType:u.Ay.getTierDisplayNameByPlanId(`${e}`)})}`,
        subtitle: 0 !== i.total ? f.intl.format(f.t.ycyeBx, {
            renewalDate: i.subscriptionPeriodStart,
            rate: (0, o.CE)((0, o.$g)(i.total, i.currency), D, N)
        }) : f.intl.format(f.t["+y0Tjy"], {
            renewalDate: i.subscriptionPeriodStart
        }),
        actions: _,
        onClose: async () => l(),
        children: [(0, n.jsxs)(c.Yx, {
            isPremiumRebrand: !0,
            className: a()({
                [p.JD]: v
            }),
            children: [(0, n.jsx)(c.Xd, {
                children: f.intl.string(f.t.iqhIp4)
            }), (0, n.jsx)(c.oR, {
                label: f.intl.formatToPlainString(f.t.r3jVZq, {
                    planName: u.Ay.getDisplayName(`${e}`)
                }),
                value: `${S}`,
                className: p.aD
            }), (0, n.jsx)(c.pK, {}), (0, n.jsx)(d.m0, {
                premiumSubscription: C,
                renewalInvoice: i,
                isUpdate: !0
            })]
        }), v ? (0, n.jsx)(s.wx6, {
            type: "critical",
            children: f.intl.string(f.t["5mlOCW"])
        }) : null]
    })
}