/** Chunk was on 87557 **/
/** chunk id: 666055, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f
}), n(896048);
var a = n(627968),
    l = n(64700),
    r = n(311907),
    i = n(562465),
    s = n(397927),
    o = n(384904),
    c = n(803306),
    d = n(112848),
    u = n(287809),
    m = n(166403),
    p = n(661191),
    h = n(652215),
    x = n(788868);
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
    var e, t;
    let [n, f] = l.useState(!1), b = (0, r.bG)([u.default], () => u.default.getCurrentUser()), v = (0, d.Lh)(), j = (0, r.bG)([m.A], () => m.A.getPremiumTypeSubscription()), _ = null != v && null != (e = null == (t = x.VD[v]) ? void 0 : t.tenureReqNumMonths) ? e : 0, y = l.useCallback(async e => {
        let t = new Date;
        e > 0 ? t.setMonth(t.getMonth() - e) : t.setDate(t.getDate() - 7), t.setDate(t.getDate() - 2);
        let n = {
            subscription_status: h.Dmq.ACTIVE,
            endedAt: void 0,
            premium_streak_started_at: p.default.fromTimestamp(t.getTime())
        };
        f(!0), await i.Bo.patch({
            url: "/debug/subscriptions/".concat(j.id),
            body: n,
            rejectWithError: !1
        }), await (0, c.eO)(b.id), await (0, o.hP)(), f(!1)
    }, [j, b]);
    if (null != b && null != j) return (0, a.jsx)(s.l6P, {
        label: "Tenure",
        hideLabel: !0,
        selectionMode: "single",
        disabled: n,
        value: _,
        options: g,
        onSelectionChange: y
    })
}