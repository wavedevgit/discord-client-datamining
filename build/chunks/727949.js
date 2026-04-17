/** chunk id: 727949 params = (module,exports,require) **/
"use strict";
n.d(t, {
    GQ: () => E,
    NF: () => T,
    QG: () => I,
    Tp: () => N,
    ZR: () => m,
    ne: () => g
});
var i = n(311907),
    r = n(554146),
    l = n(826673),
    s = n(367727),
    a = n(927813),
    o = n(661191),
    c = n(851746),
    u = n(894374),
    d = n(103411),
    _ = n(49999),
    A = n(985018);

function E(e) {
    let t = (e - Date.now()) / a.A.Millis.HOUR;
    return t > 24 ? A.intl.formatToPlainString(A.t["g9s+dA"], {
        numDays: Math.floor(t / 24)
    }) : t >= 1 ? A.intl.formatToPlainString(A.t.k9v33y, {
        numHours: Math.floor(t)
    }) : A.intl.formatToPlainString(A.t["/d0GmT"], {
        numMinutes: Math.floor(60 * t)
    })
}
let m = () => (0, l.k8)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    I = () => {
        (0, l.Dr)(r.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
    },
    T = e => {
        let {
            trialOffer: t
        } = e;
        if (null == t) return !1;
        let n = void 0 !== t.referrer_id,
            i = void 0 === t.redeemed_at,
            r = new Date(o.default.extractTimestamp(t.id)),
            l = new Date;
        return n && i && l >= r
    },
    g = e => {
        null != e ? (0, s.qr)(r.M.REFERRAL_PROGRAM_POPOVER_V2, e, {
            dismissAction: _.i.INDIRECT_ACTION
        }) : (0, l.Dr)(r.M.REFERRAL_PROGRAM_POPOVER)
    },
    N = () => {
        let e, t = (0, d.m)(!1),
            n = (0, i.bG)([c.A], () => c.A.getReferralsRemaining()),
            s = (0, i.bG)([c.A], () => c.A.getReminderStateId());
        return e = (0, u.A)({
            location: "ReferralProgramUtils"
        }) ? null != s && !(0, l.u$)(r.M.REFERRAL_PROGRAM_POPOVER_V2, s).isDismissed : !(0, l.k8)(r.M.REFERRAL_PROGRAM_POPOVER), t && e && null != n && n > 0
    }