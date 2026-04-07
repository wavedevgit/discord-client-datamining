/** chunk id: 727949 params = (module,exports,require) **/
"use strict";
s.d(t, {
    GQ: () => R,
    NF: () => S,
    QG: () => I,
    Tp: () => h,
    ZR: () => p,
    ne: () => f
});
var r = s(311907),
    i = s(554146),
    n = s(826673),
    a = s(367727),
    l = s(927813),
    c = s(661191),
    u = s(851746),
    o = s(894374),
    E = s(103411),
    d = s(49999),
    _ = s(985018);

function R(e) {
    let t = (e - Date.now()) / l.A.Millis.HOUR;
    return t > 24 ? _.intl.formatToPlainString(_.t["g9s+dA"], {
        numDays: Math.floor(t / 24)
    }) : t >= 1 ? _.intl.formatToPlainString(_.t.k9v33y, {
        numHours: Math.floor(t)
    }) : _.intl.formatToPlainString(_.t["/d0GmT"], {
        numMinutes: Math.floor(60 * t)
    })
}
let p = () => (0, n.k8)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    I = () => {
        (0, n.Dr)(i.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
    },
    S = e => {
        let {
            trialOffer: t
        } = e;
        if (null == t) return !1;
        let s = void 0 !== t.referrer_id,
            r = void 0 === t.redeemed_at,
            i = new Date(c.default.extractTimestamp(t.id)),
            n = new Date;
        return s && r && n >= i
    },
    f = e => {
        null != e ? (0, a.qr)(i.M.REFERRAL_PROGRAM_POPOVER_V2, e, {
            dismissAction: d.i.INDIRECT_ACTION
        }) : (0, n.Dr)(i.M.REFERRAL_PROGRAM_POPOVER)
    },
    h = () => {
        let e, t = (0, E.m)(!1),
            s = (0, r.bG)([u.A], () => u.A.getReferralsRemaining()),
            a = (0, r.bG)([u.A], () => u.A.getReminderStateId());
        return e = (0, o.A)({
            location: "ReferralProgramUtils"
        }) ? null != a && !(0, n.u$)(i.M.REFERRAL_PROGRAM_POPOVER_V2, a).isDismissed : !(0, n.k8)(i.M.REFERRAL_PROGRAM_POPOVER), t && e && null != s && s > 0
    }