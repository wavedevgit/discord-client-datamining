/** Chunk was on web.js **/
/** chunk id: 987237, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => C,
    C: () => T
});
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(793574),
    l = n(688810),
    c = n(532794),
    u = n(166403),
    d = n(954571),
    f = n(927578),
    p = n(697087),
    _ = n(112848),
    h = n(508591),
    m = n(788868),
    g = n(652215),
    E = n(49999),
    y = n(985018);
let b = 1,
    O = 15;

function v() {
    let e = S();
    return 1 === e ? y.intl.string(y.t.NBae0i) : y.intl.format(y.t.GSynLW, {
        time: e
    })
}

function A() {
    let e = (0, a.bG)([u.A], () => u.A.getPremiumSubscription());
    return null != e && e.status === g.Dmq.CANCELED ? e : null
}

function I() {
    let e = A(),
        t = S();
    return null != e && t >= b && t <= O
}

function S() {
    let e = A();
    return null != e ? (0, f.x6)(e) : 0
}

function T(e, t) {
    let n = (0, _.Lh)(),
        r = I(),
        i = (0, p.u)(e, t);
    return null != n && r && i
}
let C = e => {
    var t;
    let {
        markAsDismissed: n,
        children: a,
        mode: u = "popover",
        tooltipDelay: f = 300,
        targetElementRef: p
    } = e, {
        analyticsLocations: A
    } = (0, l.Ay)(o.A.TIERED_TENURE_BADGE_CHURN_REMINDER), I = v(), T = S(), C = null != (t = (0, _.Lh)()) ? t : m.Ac.PREMIUM_TENURE_1_MONTH, N = (0, i.useCallback)(() => {
        d.default.track(g.HAw.TOOLTIP_VIEWED, {
            type: "tiered_tenure_badge_churn_reminder"
        })
    }, []), w = (0, i.useCallback)(() => {
        null == n || n(E.i.TAKE_ACTION), (0, c.A)({
            initialPlanId: null,
            subscriptionTier: null,
            analyticsLocations: A
        })
    }, [n, A]), R = [{
        text: y.intl.string(y.t.iIvF2z),
        variant: "expressive",
        icon: s.tvc,
        iconPosition: "start",
        onClick: w
    }], P = T >= b && T <= O ? Math.max(1, Math.min(100, (O - T) / O * 100)) : 1, D = T <= 10 ? "critical" : "warning";
    return (0, r.jsx)(h.A, {
        badgeId: C,
        targetElementRef: p,
        body: I,
        mode: u,
        tooltipDelay: f,
        markAsDismissed: n,
        progressCircleText: "" + T,
        progressCirclePercent: P,
        progressCircleUrgency: D,
        actions: R,
        onShow: "tooltip" === u ? N : void 0,
        estimatedTooltipHeight: 300,
        children: a
    })
}