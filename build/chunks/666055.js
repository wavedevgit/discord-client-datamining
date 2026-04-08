/** chunk id: 666055 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var a = n(627968),
    i = n(64700),
    s = n(311907),
    l = n(562465),
    r = n(397927),
    o = n(384904),
    d = n(803306),
    c = n(112848),
    u = n(287809),
    m = n(166403),
    h = n(661191),
    x = n(652215),
    p = n(788868);
let g = [{
    id: "1week",
    label: "1 Week",
    value: 0
}, {
    id: "1month",
    label: "1 Month (Bronze)",
    value: 1
}, {
    id: "3months",
    label: "3 Months (Silver)",
    value: 3
}, {
    id: "6months",
    label: "6 Months (Gold)",
    value: 6
}, {
    id: "1year",
    label: "1 Year (Platinum)",
    value: 12
}, {
    id: "2years",
    label: "2 Years (Diamond)",
    value: 24
}, {
    id: "3years",
    label: "3 Years (Emerald)",
    value: 36
}, {
    id: "5years",
    label: "5 Years (Ruby)",
    value: 60
}, {
    id: "6years",
    label: "6 Years (Opal)",
    value: 72
}];

function f() {
    let [e, t] = i.useState(!1), n = (0, s.bG)([u.default], () => u.default.getCurrentUser()), f = (0, c.Lh)(), v = (0, s.bG)([m.A], () => m.A.getPremiumTypeSubscription()), _ = null != f ? p.VD[f]?.tenureReqNumMonths ?? 0 : 0, b = i.useCallback(async e => {
        let a = new Date;
        e > 0 ? a.setMonth(a.getMonth() - e) : a.setDate(a.getDate() - 7), a.setDate(a.getDate() - 2);
        let i = {
            subscription_status: x.Dmq.ACTIVE,
            endedAt: void 0,
            premium_streak_started_at: h.default.fromTimestamp(a.getTime())
        };
        t(!0), await l.Bo.patch({
            url: `/debug/subscriptions/${v.id}`,
            body: i,
            rejectWithError: !1
        }), await (0, d.eO)(n.id), await (0, o.hP)(), t(!1)
    }, [v, n]);
    if (null != n && null != v) return (0, a.jsx)(r.l6P, {
        label: "Tenure",
        hideLabel: !0,
        selectionMode: "single",
        disabled: e,
        value: _,
        options: g,
        onSelectionChange: b
    })
}