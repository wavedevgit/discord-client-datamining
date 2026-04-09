/** chunk id: 727949 params = (module,exports,require) **/
"use strict";
s.d(e, {
    GQ: () => l,
    NF: () => S,
    QG: () => M,
    Tp: () => P,
    ZR: () => o,
    ne: () => d
});
var r = s(311907),
    n = s(554146),
    i = s(826673),
    a = s(367727),
    _ = s(927813),
    E = s(661191),
    u = s(851746),
    c = s(894374),
    p = s(103411),
    I = s(49999),
    R = s(985018);

function l(t) {
    let e = (t - Date.now()) / _.A.Millis.HOUR;
    return e > 24 ? R.intl.formatToPlainString(R.t["g9s+dA"], {
        numDays: Math.floor(e / 24)
    }) : e >= 1 ? R.intl.formatToPlainString(R.t.k9v33y, {
        numHours: Math.floor(e)
    }) : R.intl.formatToPlainString(R.t["/d0GmT"], {
        numMinutes: Math.floor(60 * e)
    })
}
let o = () => (0, i.k8)(n.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE),
    M = () => {
        (0, i.Dr)(n.M.REFERRAL_PROGRAM_NITRO_TAB_BADGE)
    },
    S = t => {
        let {
            trialOffer: e
        } = t;
        if (null == e) return !1;
        let s = void 0 !== e.referrer_id,
            r = void 0 === e.redeemed_at,
            n = new Date(E.default.extractTimestamp(e.id)),
            i = new Date;
        return s && r && i >= n
    },
    d = t => {
        null != t ? (0, a.qr)(n.M.REFERRAL_PROGRAM_POPOVER_V2, t, {
            dismissAction: I.i.INDIRECT_ACTION
        }) : (0, i.Dr)(n.M.REFERRAL_PROGRAM_POPOVER)
    },
    P = () => {
        let t, e = (0, p.m)(!1),
            s = (0, r.bG)([u.A], () => u.A.getReferralsRemaining()),
            a = (0, r.bG)([u.A], () => u.A.getReminderStateId());
        return t = (0, c.A)({
            location: "ReferralProgramUtils"
        }) ? null != a && !(0, i.u$)(n.M.REFERRAL_PROGRAM_POPOVER_V2, a).isDismissed : !(0, i.k8)(n.M.REFERRAL_PROGRAM_POPOVER), e && t && null != s && s > 0
    }