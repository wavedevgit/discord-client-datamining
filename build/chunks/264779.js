/** Chunk was on web.js **/
/** chunk id: 264779, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Cp: () => N,
    HB: () => D,
    OP: () => R,
    S0: () => P,
    So: () => w,
    WD: () => A,
    b3: () => S,
    kc: () => C,
    kd: () => T
}), n(747238), n(812715), n(938796), n(638769);
var r = n(665260),
    i = n(562465),
    a = n(554146),
    s = n(582754),
    o = n(367727),
    l = n(773669),
    c = n(617617),
    u = n(835095),
    d = n(166403),
    f = n(816733),
    p = n(954571),
    _ = n(723702),
    h = n(661191),
    m = n(412260),
    g = n(852218),
    E = n(788868),
    y = n(652215),
    b = n(360469);
let O = "{code}",
    v = 2592e5;

function A(e, t) {
    let n = (0, s.Mw)(t) ? "logo-dark" : "logo-light",
        r = window.GLOBAL_ENV.CDN_HOST,
        i = "?size=256";
    return null != r ? "https://".concat(r, "/promotions/").concat(e, "/").concat(n).concat(i) : "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT, "/promotions/").concat(e, "/").concat(n).concat(i)
}

function I(e) {
    return {
        code: e.code,
        userId: e.user_id,
        claimedAt: e.claimed_at,
        promotion: u.A.createFromServer(e.promotion)
    }
}
async function S() {
    return (await i.Bo.get({
        url: y.Rsh.CLAIMED_OUTBOUND_PROMOTION_CODES,
        query: {
            locale: l.default.locale
        },
        oldFormErrors: !0,
        rejectWithError: !1
    })).body.map(I)
}
async function T(e) {
    let t, {
            promotionId: n,
            analyticsLocations: r
        } = e,
        a = await i.Bo.post({
            url: y.Rsh.CLAIM_OUTBOUND_PROMOTION_CODE(n),
            rejectWithError: !1
        }),
        s = a.body;
    return t = b.vu.DESKTOP, p.default.track(y.HAw.OUTBOUND_PROMOTION_CLAIMED, {
        platform: t,
        status: a.status,
        location_stack: r
    }), I(s)
}

function C(e, t) {
    var n;
    return null != t.outboundRedemptionUrlFormat && "" !== t.outboundRedemptionUrlFormat ? t.outboundRedemptionUrlFormat.replace(O, encodeURIComponent(e)) : null != (n = t.outboundRedemptionPageLink) ? n : ""
}

function N() {
    var e, t;
    let n = m.A.outboundPromotions,
        i = m.A.consumedInboundPromotionId,
        s = n.filter(e => {
            let {
                id: t,
                flags: n
            } = e;
            return t !== i && !(0, r.Lt)(n, E.$3.SUPPRESS_NOTIFICATION)
        }),
        o = null == (t = c.A.settings.userContent) || null == (e = t.recurringDismissibleContentStates[a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR]) ? void 0 : e.lastDismissedObjectId,
        l = null == o ? s : s.filter(e => {
            let {
                id: t
            } = e;
            return 1 === h.default.compare(t, o)
        }),
        u = d.A.getPremiumTypeSubscription(),
        p = !!(null == u ? void 0 : u.hasActiveTrial),
        _ = f.A.hasAnyUnexpiredOffer(),
        g = p || _ ? l.filter(e => e.isRedeemableByTrialUsers()) : l;
    return 0 === g.length ? null : g.sort((e, t) => new Date(e.startDate) < new Date(t.startDate) ? -1 : 1)[0].id
}

function w() {
    let e = N();
    return null != e && !(0, o.j6)(a.M.THIRD_PARTY_OUTBOUND_PROMO_NAGBAR, e, {
        cooldownDurationMs: v
    })
}

function R(e) {
    return !(0, _.isIOS)() || !e.hasFlag(E.$3.IS_BLOCKED_IOS)
}

function P(e, t) {
    return null != t[e.id] || e.isRedeemableByTrialUsers()
}

function D(e) {
    let {
        promotionPartner: t,
        promotionType: n
    } = e;
    return n === g.pt.THIRD_PARTY_OUTBOUND_RECURRING || g.SW.has(t.toLocaleLowerCase())
}