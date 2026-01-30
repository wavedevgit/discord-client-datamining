/** chunk id: 40185, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    cg: () => N,
    hb: () => R,
    nq: () => w
});
var r = n(989349),
    i = n.n(r),
    a = n(607399),
    o = n(417597),
    s = n(384904),
    l = n(86379),
    c = n(287809),
    u = n(166403),
    d = n(816733),
    f = n(469778),
    p = n(723702),
    _ = n(927578),
    h = n(478097),
    m = n(238e3),
    g = n(196042),
    E = n(422936),
    y = n(234419),
    b = n(586983),
    O = n(597758),
    v = n(35587),
    A = n(412260),
    I = n(788868),
    S = n(652215);
let T = 10;

function C(e) {
    let {
        experimentEnabled: t,
        premiumSubscription: n,
        mostRecentSubscription: r,
        previousPremiumSubscription: o
    } = e;
    if (!t) return !1;
    if (null != r && r.status === S.Dmq.ENDED) {
        let e = r.endedAt,
            t = r.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(T, "days").isBefore(e)) return !1
    }
    if (null != o && o.status === S.Dmq.ENDED) {
        let e = o.endedAt,
            t = o.hasPremiumAtLeast(I.PremiumTypes.TIER_2);
        if (null != e && t && i()().subtract(T, "days").isBefore(e)) return !1
    }
    if (null != n) {
        let e = n.hasPremiumAtLeast(I.PremiumTypes.TIER_2),
            t = c.default.getCurrentUser(),
            r = !!(null == n ? void 0 : n.hasActiveTrial) && _.Ay.isPremiumExactly(t, I.PremiumTypes.TIER_0),
            i = (0, p.isAndroid)() && n.paymentGateway !== S.kM_.GOOGLE;
        if (e || r || i) return !1
    }
    return !(a.Fr && f.A.isFractionalPremiumActive())
}

function N() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        {
            paymentsBlocked: n
        } = l.A.useExperiment({
            location: "153d31_1"
        }, {
            autoTrackExposure: !1
        }),
        {
            promotion: r
        } = (0, v.Eu)(),
        {
            enabled: i
        } = (0, g.Ay)(),
        {
            enabled: s
        } = (0, m.Ay)(),
        {
            mostRecentSubscription: c,
            premiumSubscription: d,
            previousPremiumSubscription: f
        } = (0, o.cf)([u.A], () => ({
            mostRecentSubscription: u.A.getMostRecentPremiumTypeSubscription(),
            premiumSubscription: u.A.getPremiumTypeSubscription(),
            previousPremiumSubscription: u.A.getPreviousPremiumTypeSubscription()
        })),
        _ = (0, y.V)(),
        O = (0, E.O)(),
        A = new Date(null != (e = null == r ? void 0 : r.endDate) ? e : 0).valueOf(),
        I = Date.now(),
        S = I > A;
    (0, b.A)({
        delay: S ? -1 : A - I
    });
    let T = !a.Fr || (0, p.isAndroid)() && s,
        N = C({
            experimentEnabled: i,
            premiumSubscription: d,
            mostRecentSubscription: c,
            previousPremiumSubscription: f
        }),
        w = T && N && null == _ && null != r && !n && null == O,
        {
            enabled: R
        } = h.A.useExperiment({
            location: "153d31_2"
        }, {
            autoTrackExposure: w,
            disable: !w
        });
    return !S && (t ? R : w)
}
async function w() {
    var e;
    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
        n = c.default.getCurrentUser(),
        r = !(null == n ? void 0 : n.isClaimed()),
        {
            paymentsBlocked: i
        } = l.A.getCurrentConfig({
            location: "153d31_3"
        }, {
            autoTrackExposure: !1
        }),
        {
            enabled: o
        } = (0, g.fy)(),
        {
            enabled: f
        } = (0, m.LB)(),
        {
            enabled: p
        } = h.A.getCurrentConfig({
            location: "153d31_4"
        }, {
            autoTrackExposure: !1
        }),
        _ = !a.Fr || f;
    if (r || i || !o || t && !p || !_ || d.A.hasFetchedOffer() && (d.A.hasAnyUnexpiredOffer() || d.A.hasAnyUnexpiredDiscountOffer())) return !1;
    !u.A.hasFetchedMostRecentPremiumTypeSubscription() && (null == (e = c.default.getCurrentUser()) ? void 0 : e.hasPurchasedFlag(I.lA.PREMIUM_TIER_2)) && await (0, s.I8)(), u.A.hasFetchedSubscriptions() || await (0, s.hP)();
    let E = u.A.getMostRecentPremiumTypeSubscription();
    return C({
        experimentEnabled: o,
        premiumSubscription: u.A.getPremiumTypeSubscription(),
        mostRecentSubscription: E,
        previousPremiumSubscription: u.A.getPreviousPremiumTypeSubscription()
    })
}
async function R() {
    if (!await w(!1)) return;
    let e = A.A.bogoPromotion;
    null != e && new Date(e.endDate).valueOf() >= Date.now() || await (0, O.hS)()
}